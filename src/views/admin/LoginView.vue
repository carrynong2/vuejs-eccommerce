<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="h-screen flex items-center">
    <div class="max-w-2xl shadow-xl mx-auto p-8 flex-1">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl">Login</h1>
        <div class="form-control w-full">
          <div class="label">
            <span class="label-text">Email</span>
          </div>
          <input
            type="text"
            placeholder="Your email"
            class="input input-bordered w-full"
          />
        </div>
        <div class="form-control w-full">
          <div class="label">
            <span class="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="Your password"
            class="input input-bordered w-full"
          />
        </div>
        <RouterLink
          :to="{ name: 'admin-dashboard' }"
          class="btn btn-neutral mt-4 w-full"
          >Login</RouterLink
        >
      </div>
    </div>
  </div>
</template>