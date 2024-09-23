import axios from 'axios';
import { Event2 } from '../types';

const API_URL =
  `${process.env.NEXT_PUBLIC_API_URL}white-papers` || 'http://127.0.0.1:80';

export const fetchPapers = async (): Promise<Event2[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchPaperById = async (id: string): Promise<Event2> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
