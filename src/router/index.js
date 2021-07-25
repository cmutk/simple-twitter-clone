import Vue from "vue";
import VueRouter from "vue-router";
import RootView from "../views/TheRootView.vue";
import Main from "../views/Main.vue";
import store from "../store/index.js";
// import Explore from "../components/TheExplore.vue";
// import Explore from "../views/Explore.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: RootView,
    children: [
      {
        path: "",
        name: "Entrance",
        component: () =>
          import(/* webpackChunkName: "Entrance" */ "../views/Entrance.vue"),
      },
      {
        path: "/login/:Error?",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
      },
      {
        path: "/signup",
        name: "Signup",
        props: true,
        component: () =>
          import(/* webpackChunkName: "Signup" */ "../views/Signup.vue"),
      },
      {
        path: "/",
        redirect: "",
        name: "Main",
        component: Main,
        children: [
          {
            path: "/home",
            name: "Home",
            component: () =>
              import(/* webpackChunkName: "home" */ "../views/Home.vue"),
            meta: { requiresAuth: true },
          },
          {
            path: "/explore",
            name: "TheExplore",
            component: () =>
              import(
                /* webpackChunkName: "explore" */ "../components/TheExplore.vue"
              ),
          },
          {
            path: "/search",
            name: "TheSearch",
            component: () =>
              import(
                /* webpackChunkName: "search" */ "../components/TheSearch.vue"
              ),
            props: (route) => ({ query: route.query.q }),
          },
          {
            path:"/under-development",
            name:"TheUnderDevelopment",
            component: () =>
            import(
              /* webpackChunkName: "UnderDevelopment" */ "../components/TheUnderDevelopment.vue"
            ),
          },
          {
            path:"/notifications", redirect:"/under-development" 
          },
          {
            path:"/messages", redirect:"/under-development" 
          },
          {
            path:"/i/bookmarks", redirect:"/under-development" 
          },
          {
            path:"/profileName/lists", redirect:"/under-development" 
          },
          {
            path:"/userdetailspageforuser", redirect:"/under-development" 
          },
          {
            path:"/settings", redirect:"/under-development" 
          },
          {
            path: "/:user",
            name: "UserDetails",
            component: () =>
              import(
                /* webpackChunkName: "UserDetails" */ "../components/TheUserDetails.vue"
              ),
          },
          {
            path: "/:user/status/:statusId",
            name: "TweetDetails",
            component: () =>
              import(
                /* webpackChunkName: "TweetDetails" */ "../components/TheTweetDetails.vue"
              ),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     const position = {};
  //     if (to.hash) {
  //       position.selector = to.hash;
  //       return false;
  //     }
  //   }
  // },
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.getLoggedUser) {
      next({ name: "Entrance" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
