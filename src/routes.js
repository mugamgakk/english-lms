import { createWebHistory, createRouter } from 'vue-router';
import Home from "./pages/Home.vue";
import Reservation from "./pages/Reservation.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home/>
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: <Reservation/>
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router