import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Main.module.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { userLogin, userDataSelector } from '../features/user';
import LocalizationBtn from '../components/LocalizationBtn';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Companies from '../components/Companies';
const Login: NextPage = () => {
  // binding useDispatch to dispatch.
  const dispatch = useAppDispatch();
  // graping user data from the store.
  const { userData, pending, error } = useAppSelector(userDataSelector);

  // declaring next/router in variable to use it in the component.
  const router = useRouter();

  // a function to grap user email an password and pass it to userlogin action.
  const handleUserInputs = () => {
    let userEmail = document.getElementById('emailInput') as HTMLInputElement;
    let userPassword = document.getElementById(
      'passwordInput'
    ) as HTMLInputElement;
    let userInputs: object = {
      email: userEmail.value,
      password: userPassword.value,
    };
    return userInputs;
  };

  // a handle function to redirect user based on his role.
  const handleUserRedirect = () => {
    router.push('/tenant-admin');
  };
  // a UseEffect hook watchs when the userData state changes it invokes handleUserRedirect func.
  useEffect(() => {
    // checking if userData object is not empty.
    // if (Object.entries(userData).length !== 0) {
    // handleUserRedirect();
    // }
  }, [userData]);
  let choise = 0;
  useEffect(() => {
    let lang = localStorage.getItem('lang');
    if (lang === null || lang === undefined) {
      localStorage.setItem('lang', 'en');
    } else {
      choise = 1;
    }
  });

  return (
    <>
      <Head>
        <title>CASCO</title>
      </Head>
      <main className={`${styles.bodyContainer}`}>
        <NavBar />
        <Companies />
        {/* <WhatsLink/>
          <NavBar/>
          <Hero/>
          <FlagesSection/>
          <ServicesSlider/>
          <ApplyAcc/> 
          <Steps/> 
          <AssessorOrCAB/>
          <CoursesSectionHomePage/>
          <Recogention/> 
          <AccreditedBodiesCompaines/>  
          <AccreditedBodiesCompainesRtl/>  
          <NewsHomePage/>  
          <Footer/> */}
      </main>
    </>
  );
};

export default Login;
