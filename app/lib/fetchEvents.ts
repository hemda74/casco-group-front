import axios from 'axios';
import { Event } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}events`
  : 'https://casco-group-back.vercel.app/api/2c4615d6-817d-4893-9497-bec7e7dd2dd5/events';

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    return []; // Return an empty array on error to prevent build failure
  }
};

export const fetchEventById = async (id: string): Promise<Event> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event with ID ${id}:`, error);
    throw error; // Propagate the error for specific ID fetching
  }
};
