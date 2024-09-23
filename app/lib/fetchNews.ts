// import axios from 'axios';
// import { Event } from '../types';

// const API_URL =
//   `${process.env.NEXT_PUBLIC_API_URL}news` || 'http://127.0.0.1:80';

// export const fetchNews = async (): Promise<Event[]> => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data || []; // Return an empty array if response.data is undefined or falsy
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     return []; // Return an empty array on error
//   }
// };

// export const fetchNewsById = async (id: string): Promise<Event> => {
//   try {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching news with ID ${id}:`, error);
//     throw error; // Propagate the error for specific ID fetching
//   }
// };
