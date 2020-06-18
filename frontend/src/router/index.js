import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: "/",
      name: "Hello",
      component: HelloWorld,
    },
  ],
});

export default router;
