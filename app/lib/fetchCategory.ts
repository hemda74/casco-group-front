import axios from 'axios';
import { Category } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}courses-categories`;

export const fetchCat = async (): Promise<Category[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
