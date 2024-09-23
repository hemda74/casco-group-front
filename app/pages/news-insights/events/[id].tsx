// // pages/events/[id].tsx
// import React, { ReactElement } from 'react';
// import Head from 'next/head';
// import { GetStaticPaths, GetStaticProps } from 'next';
// import { useLanguage } from '../../../Context/LanguageContext';
// import styles from '../../../styles/Main.module.css';
// import { NextPageWithLayout } from '../../_app';
// import ViewerLayout from '../../../layouts/ViewerLayout';
// import { fetchEventById, fetchEvents } from '../../../lib/fetchEvents';
// import SingleEventAr from '../../../components/News&Insghits/SingleEventAr';
// import SingleEventEn from '../../../components/News&Insghits/SingleEventEn';
// import { Event } from '../../../types';

// type Props = {
//   event: Event;
//   events: Event[];
// };

// const SingleeventPage: NextPageWithLayout<Props> = ({ event, events }) => {
//   const { language } = useLanguage();
//   return (
//     <>
//       <Head>
//         <title>{event.title} | CASCO</title>
//       </Head>
//       {language === 'en' ? (
//         <main className={styles.bodyContainer}>
//           <SingleEventEn event={event} events={events} />
//         </main>
//       ) : (
//         <main className={styles.bodyContainer}>
//           <SingleEventAr event={event} events={events} />
//         </main>
//       )}
//     </>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const events = await fetchEvents();
//   const paths = events.map((event) => ({
//     params: { id: event.id },
//   }));
//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { id } = params as { id: string };
//   const event = await fetchEventById(id);
//   const events = await fetchEvents();
//   return {
//     props: {
//       event,
//       events,
//     },
//   };
// };
// // adding Layout
// SingleeventPage.getLayout = function getLayout(page: ReactElement) {
//   return <ViewerLayout childern={page}></ViewerLayout>;
// };

// export default SingleeventPage;
// // pages/events/[id].tsx
import React from 'react'

const id = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default id
