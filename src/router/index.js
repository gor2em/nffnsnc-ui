import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "app",
    path: "/",
    redirect: "/home",
    component: () => import("../layouts/AppLayout.vue"),
    children: [
      {
        name: "home",
        path: "/home",
        component: () => import("../views/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
