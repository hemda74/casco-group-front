import axios from 'axios';
import { ServiceShort, Service } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}services`
  : 'https://casco-group-back.vercel.app/api/2c4615d6-817d-4893-9497-bec7e7dd2dd5/services';

export const fetchServices = async (): Promise<ServiceShort[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return []; // Return an empty array on error to prevent build failure
  }
};

export const fetchServiceById = async (id: string): Promise<Service> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching service with ID ${id}:`, error);
    throw error; // Propagate the error for specific ID fetching
  }
};
