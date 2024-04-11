import { defineStore } from 'pinia';
import {
  getAllLogs,
  getAllCategories,
  sendNotificationRequest
} from '@/services/notification';

export const useNotificationsStore = defineStore({
  id: 'notification',
  state: () => ({
    // STATES
  }),
  actions: {
    async sendNotification(data: any) {
      try {
        const response = await sendNotificationRequest(data);
        return response;
      } catch (error) {
        console.error('Error to sent notification:', error);
        throw error;
      }
    },
    async getLogs() {
      try {
        const response = await getAllLogs();
        return response
      } catch (error) {
        console.error('Error to get logs:', error);
        throw error;
      }
    },
    async getCategories() {
      try {
        const response = await getAllCategories();
        return response
      } catch (error) {
        console.error('Error to get logs:', error);
        throw error;
      }
    }
  },
});
