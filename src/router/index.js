import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "@/stores/authStore";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/:pathMatch(.*)*",
    component: HomeView,
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("@/views/AccountView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/highscores",
    name: "Highscores",
    component: () => import("@/views/HighscoresView.vue"),
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: () => import("@/views/TicketsView.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !useAuthStore().isAuthenticated) {
    next(from.path);
  } else {
    next();
  }
});

export default router;
