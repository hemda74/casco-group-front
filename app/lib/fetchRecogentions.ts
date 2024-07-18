import axios from 'axios';
import { Reco } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}recognitions`;

export const fetchReco = async (): Promise<Reco[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data || []; // Return an empty array if response.data is undefined or falsy
  } catch (error) {
    console.error('Error fetching news:', error);
    return []; // Return an empty array on error
  }
};
