import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/connexion",
      name: "connexion",
      component: () => import("./views/Connexion.vue")
    },
    {
      path: "/profil",
      name: "profil",
      component: () => import("./views/Profil.vue")
    },
    {
      path: "/saisiePlanning",
      name: "saisiePlanning",
      component: () => import("./views/SaisiePlanning.vue")
    },
    {
      path: "/planning",
      name: "planning",
      component: () => import("./views/Planning.vue")
    }
  ]
});
