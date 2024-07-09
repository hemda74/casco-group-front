import axios from 'axios';
import { CourseShort, Course } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}courses`;

export const fetchCourses = async (): Promise<CourseShort[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error; // Propagate the error back to the caller
  }
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
