import axios from 'axios';
import { Category } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}courses-categories`;

export const fetchCat = async (): Promise<Category[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; // Propagate the error back to the caller
  }
};
