// import React, { ReactElement } from 'react';
// import Head from 'next/head';
// import { useLanguage } from '../../../Context/LanguageContext';
// import styles from '../../../styles/Main.module.css';
// import EventsEn from '../../../components/News&Insghits/EventsEn';
// import EventsAr from '../../../components/News&Insghits/EventsAr';
// import { NextPageWithLayout } from '../../_app';
// import ViewerLayout from '../../../layouts/ViewerLayout';
// import { Event } from '../../../types';
// import { fetchEvents } from '../../../lib/fetchEvents';
// type Props = {
//   events: Event[]
// };
// const Contactus: NextPageWithLayout<Props> = ({ events }) => {
//   const { language } = useLanguage();
//   return (
//     <>
//       <Head>
//         <title>Events | CASCO</title>
//       </Head>
//       {language === 'en' ? (
//         <main className={`${styles.bodyContainer}`}>
//           <EventsEn events={events} />
//         </main>
//       ) : (
//         <main className={`${styles.bodyContainer}`}>
//           <EventsAr events={events} />
//         </main>
//       )}
//     </>
//   );
// };
// export const getStaticProps = async () => {
//   const events = await fetchEvents();
//   return {
//     props: {
//       events,
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
