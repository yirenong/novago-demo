import { createRouter, createWebHistory } from "vue-router";
import LoginView from "./views/LoginPage.vue";
import LandingView from "./views/LandingView.vue";
import DashboardView from "./views/Dashboard.vue";
import PayrollView from "./views/PayrollView.vue";
import RentalCollectionView from "./views/RentalCollectionView.vue";
import CorporateBankingView from "./views/CorporateBankingView.vue";
import RentalCollectionSummary from "./views/RentalCollectionSummary.vue";
import GlobalMultiCurrencyAccount from "./views/GlobalMultiCurrencyAccount.vue";
import GlobalCardIssuance from "./views/GlobalCardIssuance.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/payroll",
    name: "payroll",
    component: PayrollView,
  },
  {
    path: "/rental-collection",
    name: "rental-collection",
    component: RentalCollectionView,
  },
  {
    path: "/corporate-banking",
    name: "corporate-banking",
    component: CorporateBankingView,
  },
  {
    path: "/rental-collection-summary",
    name: "RentalCollectionSummary",
    component: RentalCollectionSummary,
  },
  {
    path: "/global-multi-currency-account",
    name: "GlobalMultiCurrencyAccount",
    component: GlobalMultiCurrencyAccount,
  },
  {
    path: "/global-card-issuance",
    name: "GlobalCardIssuance",
    component: GlobalCardIssuance,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 30 minutes inactivity limit (you can change this)
const INACTIVITY_LIMIT_MS = 30 * 60 * 1000;

router.beforeEach((to, from, next) => {
  const publicPaths = ["/", "/login", "/rental-collection-summary", "/global-multi-currency-account", "/global-card-issuance"]; // landing + login are public
  const authRequired = !publicPaths.includes(to.path);

  const loggedIn = sessionStorage.getItem("novago_loggedIn") === "true";
  const lastActiveRaw = sessionStorage.getItem("novago_lastActive");
  const lastActive = lastActiveRaw ? Number(lastActiveRaw) : 0;
  const now = Date.now();

  // If logged in but inactive too long → force logout
  if (loggedIn && lastActive && now - lastActive > INACTIVITY_LIMIT_MS) {
    sessionStorage.removeItem("novago_loggedIn");
    sessionStorage.removeItem("novago_role");
    sessionStorage.removeItem("novago_lastActive");

    if (authRequired) {
      return next({ name: "login" });
    }
  }

  // If route requires auth and user is not logged in → go to login
  if (authRequired && !loggedIn) {
    return next({ name: "login" });
  }

  // If logged in and going to login page, redirect to dashboard
  if (loggedIn && to.name === "login") {
    return next({ name: "dashboard" });
  }

  // Update lastActive on any successful navigation when logged in
  if (loggedIn) {
    sessionStorage.setItem("novago_lastActive", String(now));
  }

  next();
});

export default router;
