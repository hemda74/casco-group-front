import axios from 'axios';
import { Event3 } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}articles`;

export const fetchArticles = async (): Promise<Event3[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchArticleById = async (id: string): Promise<Event3> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
