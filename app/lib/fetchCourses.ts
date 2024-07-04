import axios from 'axios';
import { CourseShort } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/services`;

export const fetchIndustries = async (): Promise<CourseShort[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
