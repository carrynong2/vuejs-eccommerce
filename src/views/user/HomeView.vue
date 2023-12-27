<script setup>
import { useRouter } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import { useProductStore } from "@/stores/user/product";
import Product from "@/components/Product.vue";
import { useCartStore } from "@/stores/user/cart";

const productStore = useProductStore();
const cartStore = useCartStore();
const router = useRouter();

const addToCart = (product) => {
  cartStore.addToCart(product);
  router.push({
    name: "cart",
  });
};
</script>

<template>
  <UserLayout>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello Again</h1>
          <p class="py-6">Trust your intuition!</p>
        </div>
      </div>
    </div>
    <!-- Product Shelf -->
    <Product :products="productStore.list" :addToCart="addToCart" />
  </UserLayout>
</template>