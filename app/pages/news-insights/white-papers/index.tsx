// import React, { ReactElement } from 'react';
// import Head from 'next/head';
// import { useLanguage } from '../../../Context/LanguageContext';
// import styles from '../../../styles/Main.module.css';
// import { NextPageWithLayout } from '../../_app';
// import ViewerLayout from '../../../layouts/ViewerLayout';
// import { Event2 } from '../../../types';
// import { fetchPapers } from '../../../lib/fetchWhitePapers';
// import WhitePaperMainAr from '../../../components/News&Insghits/WhitePaperMainAr';
// import WhitePaperMainEn from '../../../components/News&Insghits/WhitePaperMainEn';
// type Props = {
//   papers: Event2[]
// };
// const Contactus: NextPageWithLayout<Props> = ({ papers }) => {
//   const { language } = useLanguage();
//   return (
//     <>
//       <Head>
//         <title>White Papaers | CASCO</title>
//       </Head>
//       {language === 'en' ? (
//         <main className={`${styles.bodyContainer}`}>
//           <WhitePaperMainEn papers={papers} />
//         </main>
//       ) : (
//         <main className={`${styles.bodyContainer}`}>
//           <WhitePaperMainAr papers={papers} />
//         </main>
//       )}
//     </>
//   );
// };
// export const getStaticProps = async () => {
//   const papers = await fetchPapers();
//   return {
//     props: {
//       papers,
//     },
//   };
// };
// // adding Layout
// Contactus.getLayout = function getLayout(contactus: ReactElement) {
//   return <ViewerLayout childern={contactus}></ViewerLayout>;
// };
// export default Contactus;
import React from 'react'

const id = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default id
