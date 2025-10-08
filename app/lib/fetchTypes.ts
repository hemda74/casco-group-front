import axios from 'axios';
import { CourseType } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}course-type`
  : 'https://casco-group-back.vercel.app/api/2c4615d6-817d-4893-9497-bec7e7dd2dd5/course-type';

export const fetchCourseTypes = async (): Promise<CourseType[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching course types:', error);
    return []; // Return an empty array on error to prevent build failure
  }
};
