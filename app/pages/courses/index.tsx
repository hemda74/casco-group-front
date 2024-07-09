import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import styles from '../../styles/Main.module.css';
import OldNavBar from '../../components/OldNavBar';
import Footer from '../../components/Footer';
import FooterAr from '../../components/FooterAr';
import MainPageEn from '../../components/Courses/MainPageEn';
import MainPageAr from '../../components/Courses/MainPageAr';
import { fetchCourses } from '../../lib/fetchCourses';
import { fetchTypes } from '../../lib/fetchTypes';
import { Category, CourseShort, CourseType } from '../../types';
import { fetchCat } from "../../lib/fetchCategory"
type Props = {
  courses: CourseShort[];
  cat: Category[];
  types: CourseType[];
};
// dymmy data for ui till handle working with api
const Index: React.FC<Props> = ({ courses, cat, types }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Courses | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <MainPageEn courses={courses} types={types} cat={cat} />
            <Footer />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <MainPageAr courses={courses} />
            <FooterAr />
          </main>
        )}
      </Layout>
    </>
  );
};
export const getStaticProps = async () => {
  const courses = await fetchCourses();
  const types = await fetchTypes();
  const cat = await fetchCat();

  return {
    props: {
      courses,
      types,
      cat
    },
  };
};
export default Index; 
