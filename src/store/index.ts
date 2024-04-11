import { createPinia } from 'pinia';
import { useNotificationsStore } from './modules/notification';

const pinia = createPinia();

export const useStore = () => {
  return {
    notifications: useNotificationsStore(),
    // Add more modules if it is necessary
  };
};

export default pinia;

