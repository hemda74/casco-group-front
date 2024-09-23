import axios from 'axios';
import { Industry, IndustryShort } from '../types';

const API_URL =
  `${process.env.NEXT_PUBLIC_API_URL}industries` || 'http://127.0.0.1:80';

export const fetchIndustries = async (): Promise<IndustryShort[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchIndustryById = async (id: string): Promise<Industry> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
