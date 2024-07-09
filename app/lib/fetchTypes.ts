import axios from 'axios';
import { CourseType } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}course-type`;

export const fetchCourses = async (): Promise<CourseType[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
