import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/user/HomeView.vue'
import SearchView from '@/views/user/SearchView.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import CartView from '@/views/user/CartView.vue'
import CheckoutView from '@/views/user/CheckoutView.vue'
import SuccessView from '@/views/user/SuccessView.vue'

import AdminLoginView from "@/views/admin/LoginView.vue"
import AdminDashboradView from "@/views/admin/DashboardView.vue"
import AdminProductListView from "@/views/admin/product/ListView.vue"
import AdminProductUpdateView from "@/views/admin/product/UpdateView.vue"

import AdminUserListView from "@/views/admin/user/ListView.vue"
import AdminUserUpdateView from "@/views/admin/user/UpdateView.vue"

import AdminOrderListView from "@/views/admin/order/ListView.vue"
import AdminOrderDetailView from "@/views/admin/order/DetailVIew.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    // admin site
    {
      path: "/admin/login",
      name: "admin-login",
      component: AdminLoginView
    },
    {
      path: "/admin/dashboard",
      name: "admin-dashboard",
      component: AdminDashboradView
    },
    {
      path: "/admin/products",
      name: "admin-products-list",
      component: AdminProductListView
    },
    {
      path: "/admin/products/create",
      name: "admin-products-create",
      component: AdminProductUpdateView
    },
    {
      path: "/admin/products/update/:id",
      name: "admin-products-update",
      component: AdminProductUpdateView
    },
    {
      path: "/admin/users",
      name: "admin-users-list",
      component: AdminUserListView
    },
    {
      path: "/admin/users/update/:id",
      name: "admin-users-update",
      component: AdminUserUpdateView
    },
    {
      path: "/admin/orders",
      name: "admin-orders-list",
      component: AdminOrderListView
    },
    {
      path: "/admin/orders/detail/:id",
      name: "admin-orders-detail",
      component: AdminOrderDetailView
    },
  ]
})

export default router
