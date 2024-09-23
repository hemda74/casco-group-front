// import React, { ReactElement } from 'react';
// import Head from 'next/head';
// import { useLanguage } from '../../Context/LanguageContext';
// import styles from '../../styles/Main.module.css';
// import OurApproachEn from '../../components/About/OurApproachEn';
// import OurApproachAr from '../../components/About/OurApproachAr';
// import OldNavBar from '../../components/OldNavBar';
// import Footer from '../../components/Footer';
// import FooterAr from '../../components/FooterAr';
// import { fetchTest } from '../../lib/fetchTest';
// import { Test } from '../../types';

// type Props = {
//   test: Test[]
// }
// const IndexPage: React.FC<Props> = ({ test }) => {
//   const { language } = useLanguage();
//   return (
//     <>
//       <Head>
//         <title>Our Approach | CASCO</title>
//       </Head>
//       {language === 'en' ? (
//         <main className={`${styles.bodyContainer}`}>
//           <OldNavBar />
//           <OurApproachEn test={test} />
//           <Footer />
//         </main>
//       ) : (
//         <main className={`${styles.bodyContainer}`}>
//           <OldNavBar />
//           <OurApproachAr test={test} />
//           <FooterAr />
//         </main>
//       )}

//     </>
//   );
// };
// export const getStaticProps = async () => {
//   const test = await fetchTest();
//   return {
//     props: {
//       test,
//     },
//   };
// };
// export default IndexPage;
import React from 'react'

const id = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default id
