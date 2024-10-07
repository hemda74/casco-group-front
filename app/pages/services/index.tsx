import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import styles from '../../styles/Main.module.css';
import MainPageEn from '../../components/Services/MainPageEn';
import MainPageAr from '../../components/Services/MainPageAr';
import { NextPageWithLayout } from '../_app';
import ViewerLayout from '../../layouts/ViewerLayout';
import { ServiceShort } from '../../types';
import { fetchServices } from '../../lib/fetchServices';
type Props = {
  services: ServiceShort[]
};
const Contactus: NextPageWithLayout<Props> = ({ services }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Services | CASCO</title>
      </Head>
      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <MainPageEn services={services} />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <MainPageAr services={services} />
        </main>
      )}
    </>
  );
};
export const getStaticProps = async () => {
  const services = await fetchServices();
  return {
    props: {
      services,
    },
  };
};
// adding Layout
Contactus.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};
export default Contactus;

