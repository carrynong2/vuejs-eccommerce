<script setup>
import { defineProps } from "vue";

defineProps({
  products: Array,
  addToCart: Function,
});
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 mx-4"
  >
    <div
      v-for="product in products"
      :key="product.name"
      class="card w-full bg-base-100 shadow-xl"
    >
      <figure>
        <img class="h-64 w-full" :src="product.imageUrl" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <p>{{ product.about }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="addToCart(product)">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>