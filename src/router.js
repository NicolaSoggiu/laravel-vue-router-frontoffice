import { createRouter, createWebHistory } from "vue-router";

import AppShow from "./pages/AppShow.vue";
import CocktailList from "./components/CocktailList.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppHome from "./pages/AppHome.vue";
import AppContacts from "./pages/AppContacts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/cocktails/:id",
      name: "cocktails.show",
      component: AppShow,
    },
    {
      path: "/cocktails",
      name: "cocktails",
      component: CocktailList,
    },
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: AppContacts,
    },
  ],
});

export { router };
