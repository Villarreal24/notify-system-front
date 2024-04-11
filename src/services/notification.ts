import axios from 'axios';
import { env } from '@/env.js';

const baseUrl = env.apiUrl

export const sendNotificationRequest = async (data: any): Promise<any> => {
  try {
    const response = await axios.post(`${baseUrl}/notification`, data);
    return response.data;
  } catch (error) {
    console.error('Error al enviar la notificación:', error);
    throw error;
  }
};

export const getAllCategories = async (): Promise<any> => {
  try {
    const response = await axios.get(`${baseUrl}/notification/categories`);
    return response.data;
  } catch (error) {
    console.error('Error al enviar la notificación:', error);
    throw error;
  }
};

export const getAllLogs = async (): Promise<any> => {
  try {
    const response = await axios.get(`${baseUrl}/notification/logs`);
    return response.data;
  } catch (error) {
    console.error('Error al enviar la notificación:', error);
    throw error;
  }
};
