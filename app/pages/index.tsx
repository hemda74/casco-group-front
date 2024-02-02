import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Main.module.css';
import Logo from '../components/Logo';
import logo from '../public/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import LocalizationBtn from '../components/LocalizationBtn';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import deleteCookie from '../helper/deleteCookie';
import getCookie from '../helper/getCookie';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ApplyAcc from '../components/ApplyAcc';
import CoursesSectionHomePage from '../components/CoursesSectionHomePage';
import Recogention from '../components/Recogention';
import AssessorOrCAB from '../components/AssessorOrCAB';
import ServicesSlider from '../components/ServicesSlider';
import AccreditedBodiesCompaines from '../components/AccreditedBodiesCompaines';
import AccreditedBodiesCompainesRtl from '../components/AccreditedBodiesCompainesRtl';
import NewsHomePage from '../components/NewsHomePage';
import Steps from '../components/Steps';
import FlagesSection from '../components/FlagesSection';
import WhatsLink from '../components/WhatsLink';
import FourOhFour from '../components/OpeningSoon2';
const Login: NextPage = () => {
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
        <h1>Hello</h1>
      </main>
    </>
  );
};

export default Login;
