import axios from 'axios';
import { Category } from '../types';

const URL = `http://localhost:3000/api/9a7c35de-5997-45ae-885f-237a9eb453a6/courses-categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get(URL);
    console.log('Response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export default getCategories;
