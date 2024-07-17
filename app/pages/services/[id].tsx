// pages/services/[id].tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useLanguage } from '../../Context/LanguageContext';
import styles from '../../styles/Main.module.css';
import { NextPageWithLayout } from '../_app';
import ViewerLayout from '../../layouts/ViewerLayout';
import { fetchServiceById, fetchServices } from '../../lib/fetchServices';
import { Service, ServiceShort, CaseStudy } from '../../types';
import ServiceAr from '../../components/Services/ServiceAr';
import ServiceEn from '../../components/Services/ServiceEn';

type Props = {
  service: Service;
  services: ServiceShort[]
};

const SingleservicePage: NextPageWithLayout<Props> = ({ service, services }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>{service.name} | CASCO</title>
      </Head>
      {language === 'en' ? (
        <main className={styles.bodyContainer}>
          <ServiceEn service={service} services={services} />
        </main>
      ) : (
        <main className={styles.bodyContainer}>
          <ServiceAr service={service} services={services} />
        </main>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const services = await fetchServices();
  const paths = services.map((service) => ({
    params: { id: service.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const service = await fetchServiceById(id);
  const services = await fetchServices();
  return {
    props: {
      service,
      services,
    },
  };
};
// adding Layout
SingleservicePage.getLayout = function getLayout(page: ReactElement) {
  return <ViewerLayout childern={page}></ViewerLayout>;
};

export default SingleservicePage;
// pages/services/[id].tsx
