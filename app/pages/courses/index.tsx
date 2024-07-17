import React from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import styles from '../../styles/Main.module.css';
import OldNavBar from '../../components/OldNavBar';
import Footer from '../../components/Footer';
import FooterAr from '../../components/FooterAr';
import MainPageEn from '../../components/Courses/MainPageEn';
import MainPageAr from '../../components/Courses/MainPageAr';
import { fetchCourseTypes } from '../../lib/fetchTypes';
import { Category, CourseShort, CourseType } from '../../types';
import { fetchCat } from "../../lib/fetchCategory";
import { fetchCourses } from '../../lib/fetchCourses';

type Props = {
  courses: CourseShort[];
  cat: Category[];
  types: CourseType[];
};

const Index: React.FC<Props> = ({ courses: initialCourses, cat, types }) => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedType, setSelectedType] = React.useState<string | null>(null);

  // Function to filter courses based on selected category and type
  const filterCourses = (initialCourses: CourseShort[]) => {
    let filteredCourses = [...initialCourses]; // Make a copy of initialCourses

    if (selectedCategory) {
      filteredCourses = filteredCourses.filter(course => course.categoryId === selectedCategory);
    }

    if (selectedType) {
      filteredCourses = filteredCourses.filter(course => course.coursetypeId === selectedType);
    }

    return filteredCourses;
  };

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedType(null); // Reset type selection
  };

  // Handle type selection
  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setSelectedCategory(null); // Reset category selection
  };

  // Determine which courses to display based on filters
  const filteredCourses = filterCourses(initialCourses);

  return (
    <>
      <Head>
        <title>Courses | CASCO</title>
      </Head>

      <main className={`${styles.bodyContainer}`}>
        <OldNavBar />
        {language === 'en' ? (
          <MainPageEn
            courses={filteredCourses}
            types={types}
            cat={cat}
            onCategorySelect={handleCategorySelect}
            onTypeSelect={handleTypeSelect}
          />
        ) : (
          <MainPageAr
            courses={filteredCourses}
            types={types}
            cat={cat}
            onCategorySelect={handleCategorySelect}
            onTypeSelect={handleTypeSelect}
          />
        )}
        {language === 'en' ? <Footer /> : <FooterAr />}
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const [courses, types, cat] = await Promise.all([
      fetchCourses(),
      fetchCourseTypes(),
      fetchCat()
    ]);

    return {
      props: {
        courses,
        types,
        cat
      },
    };
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return {
      props: {
        courses: [],
        types: [],
        cat: []
      },
    };
  }
};

export default Index;
