import axios from 'axios';
import { Event3 } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}articles`
  : 'https://casco-group-back.vercel.app/api/2c4615d6-817d-4893-9497-bec7e7dd2dd5/articles';

export const fetchArticles = async (): Promise<Event3[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return []; // Return an empty array on error to prevent build failure
  }
};

export const fetchArticleById = async (id: string): Promise<Event3> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    throw error; // Propagate the error for specific ID fetching
  }
};
