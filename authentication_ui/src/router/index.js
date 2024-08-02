import AddUserView from '@/views/AddUserView.vue';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: AddUserView,
    }
  ],
});

export default router;
