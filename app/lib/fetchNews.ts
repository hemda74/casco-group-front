import axios from 'axios';
import { Event } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}news`;

export const fetchNews = async (): Promise<Event[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchNewsById = async (id: string): Promise<Event> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
