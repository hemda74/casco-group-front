import axios from 'axios';
import { CourseShort } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}courses`;

export const fetchCourses = async (): Promise<CourseShort[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
