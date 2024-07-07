// pages/industries/[id].tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import styles from '../../styles/Main.module.css';
import { NextPageWithLayout } from '../_app';
import ViewerLayout from '../../layouts/ViewerLayout';
import SingleIndustryEn from '../../components/Industries/SingleIndustryEn';
import SingleIndustryAr from '../../components/Industries/SingleIndustryAr';
import { fetchIndustryById, fetchIndustries } from '../../lib/fetchIndustries';
import { fetchServices, fetchServiceById } from '../../lib/fetchServices';
import { Industry, ServiceShort } from '../../types';
type Props = {
  industry: Industry;
  services: ServiceShort[];
};

const SingleIndustryPage: NextPageWithLayout<Props> = ({ industry, services }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>{industry.name} | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={styles.bodyContainer}>
            <SingleIndustryEn industry={industry} services={services} />
          </main>
        ) : (
          <main className={styles.bodyContainer}>
            <SingleIndustryAr industry={industry} services={services} />
          </main>
        )}
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const industries = await fetchIndustries();
  const paths = industries.map((industry) => ({
    params: { id: industry.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const industry = await fetchIndustryById(id);
  const services = await fetchServices();
  return {
    props: {
      industry,
      services,
    },
  };
};

// adding Layout
SingleIndustryPage.getLayout = function getLayout(page: ReactElement) {
  return <ViewerLayout childern={page}></ViewerLayout>;
};

export default SingleIndustryPage;
