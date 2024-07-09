import axios from 'axios';
import { CourseShort, Course, Category } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}courses`;

export const fetchCourses = async (): Promise<CourseShort[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
export const fetchCourseById = async (id: string): Promise<Course> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
export const fetchCoursesCategories = async (): Promise<Category[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
