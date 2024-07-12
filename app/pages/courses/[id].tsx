import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import styles from '../../styles/Main.module.css';
import OldNavBar from '../../components/OldNavBar';
import Footer from '../../components/Footer';
import FooterAr from '../../components/FooterAr';
import CourseEn from '../../components/Courses/CourseEn';
import CourseAr from '../../components/Courses/CourseAr';
import { CourseShort, Course } from '../../types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchCourses, fetchCourseById } from '../../lib/fetchCourses';
type Props = {
  course: Course;
  courses: CourseShort[];
};

// dymmy data for ui till handle working with api
const Contactus: React.FC<Props> = ({ course, courses }) => {
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
            <CourseAr course={course} courses={courses} />
            <Footer />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <OldNavBar />
            <CourseEn course={course} courses={courses} />
            <FooterAr />
          </main>
        )}
      </Layout>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await fetchCourses();
  const paths = courses.map((course) => ({
    params: { id: course.id },
  }));
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const course = await fetchCourseById(id);
  const courses = await fetchCourses();
  return {
    props: {
      course,
      courses,
    },
  };
};
export default Contactus;
