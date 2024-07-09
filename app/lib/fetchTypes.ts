import axios from 'axios';
import { CourseType } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}course-type`;

export const fetchCourseTypes = async (): Promise<CourseType[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching course types:', error);
    throw error; // Propagate the error back to the caller
  }
};
