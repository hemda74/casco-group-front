import axios from 'axios';
import { Teams } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}teams`;

export const fetchTeams = async (): Promise<Teams[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchTeamById = async (id: string): Promise<Teams> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
