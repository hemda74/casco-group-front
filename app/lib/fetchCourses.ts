import axios from 'axios';
import { CourseShort, Course } from '../types';
import { useQuery } from 'react-query';
const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}courses`
  : 'https://casco-group-back.vercel.app/api/2c4615d6-817d-4893-9497-bec7e7dd2dd5/courses';
export const useCourses = () => {
  return useQuery<CourseShort[], Error>('courses', fetchCourses);
};

export const fetchCourseById = async (id: string): Promise<Course> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course with id ${id}:`, error);
    throw error; // Propagate the error back to the caller
  }
};
export const fetchCourses = async (): Promise<CourseShort[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching courses:', error);
    return []; // Return an empty array on error to prevent build failure
  }
};
