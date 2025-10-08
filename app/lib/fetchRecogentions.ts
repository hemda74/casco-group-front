import axios from 'axios';
import { Reco } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}recognitions`
  : 'https://casco-group-back.vercel.app/api/2c4615d6-817d-4893-9497-bec7e7dd2dd5/recognitions';

export const fetchReco = async (): Promise<Reco[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data || []; // Return an empty array if response.data is undefined or falsy
  } catch (error) {
    console.error('Error fetching recognitions:', error);
    return []; // Return an empty array on error
  }
};
