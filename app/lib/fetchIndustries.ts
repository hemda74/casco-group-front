import axios from 'axios';
import { Industry, IndustryShort } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}industries`
  : 'https://casco-group-back.vercel.app/api/2c4615d6-817d-4893-9497-bec7e7dd2dd5/industries';

export const fetchIndustries = async (): Promise<IndustryShort[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching industries:', error);
    return []; // Return an empty array on error to prevent build failure
  }
};

export const fetchIndustryById = async (id: string): Promise<Industry> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching industry with ID ${id}:`, error);
    throw error; // Propagate the error for specific ID fetching
  }
};
