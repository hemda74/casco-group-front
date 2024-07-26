import axios from 'axios';
import { Event } from '../types';

const API_URL =
  `${process.env.NEXT_PUBLIC_API_URL}events` || 'http://127.0.0.1:80';

export const fetchEvents = async (): Promise<Event[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchEventById = async (id: string): Promise<Event> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
