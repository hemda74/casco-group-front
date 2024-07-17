import React, { useState } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import styles from '../../styles/Main.module.css';
import OldNavBar from '../../components/OldNavBar';
import Footer from '../../components/Footer';
import FooterAr from '../../components/FooterAr';
import MainPageEn from '../../components/Courses/MainPageEn';
import MainPageAr from '../../components/Courses/MainPageAr';
import { fetchCourses } from '../../lib/fetchCourses';
import { fetchCourseTypes } from '../../lib/fetchTypes';
import { Category, CourseShort, Course, CourseType } from '../../types';
import { fetchCat } from "../../lib/fetchCategory";

type Props = {
  courses: CourseShort[];
  cat: Category[];
  types: CourseType[];
};

const Index: React.FC<Props> = ({ courses: initialCourses, cat, types }) => {
  const { language } = useLanguage();
  const [courses, setCourses] = useState<CourseShort[]>(initialCourses);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [forceUpdate, setForceUpdate] = useState<boolean>(false); // State to force update

  // Function to filter courses based on selected category and type
  const filterCourses = () => {
    let filteredCourses = initialCourses;

    if (selectedCategory) {
      filteredCourses = filteredCourses.filter(course => course.categoryId === selectedCategory);
    }

    if (selectedType) {
      filteredCourses = filteredCourses.filter(course => course.coursetypeId === selectedType);
    }

    setCourses(filteredCourses);
    setForceUpdate(prev => !prev); // Toggle forceUpdate to trigger re-render
  };

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedType(null); // Reset type selection
    filterCourses();
    // reload();
  };

  // Handle type selection
  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setSelectedCategory(null); // Reset category selection
    filterCourses();
    // reload();
  };
  const reload = () => {
    window.location.reload()
  }
  return (
    <>
      <Head>
        <title>Courses | CASCO</title>
      </Head>

      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <OldNavBar />
          <MainPageEn
            key={forceUpdate ? 'forceUpdate' : 'initial'} // Use key to force re-render
            courses={courses}
            types={types}
            cat={cat}
            onCategorySelect={handleCategorySelect}
            onTypeSelect={handleTypeSelect}
          />
          <Footer />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <OldNavBar />
          <MainPageAr
            key={forceUpdate ? 'forceUpdate' : 'initial'} // Use key to force re-render
            courses={courses}
            types={types}
            cat={cat}
            onCategorySelect={handleCategorySelect}
            onTypeSelect={handleTypeSelect}
          />
          <FooterAr />
        </main>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const courses = await fetchCourses();
  const types = await fetchCourseTypes();
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
