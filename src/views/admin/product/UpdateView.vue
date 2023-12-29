<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAdminProoductStore } from "@/stores/admin/product";

import AdminLayout from "@/layouts/AdminLayout.vue";

const formData = [
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Image",
    field: "image",
  },
  {
    name: "Price",
    field: "price",
  },
  {
    name: "Quantity",
    field: "quantity",
  },
  {
    name: "About",
    field: "about",
  },
];

const adminProductStore = useAdminProoductStore();
const router = useRouter();

const productData = reactive({
  name: "",
  image: "",
  price: 0,
  quantity: 0,
  about: "",
  status: "",
});

const addProduct = () => {
  adminProductStore.addProduct(productData);
  router.push({ name: "admin-products-list" });
};
</script>

<template>
  <AdminLayout>
    <div class="shadow-xl p-8 mt-4">
      <div class="text-1xl font-bold">ADD</div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 gap-2">
        <div v-for="form in formData" class="form-control w-full">
          <div class="label">
            <span class="label-text">{{ form.name }}</span>
          </div>
          <input
            v-model="productData[form.field]"
            type="text"
            class="input input-bordered w-full"
          />
        </div>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 gap-2">
        <div class="form-control w-full">
          <div class="label">
            <span class="label-text">Status</span>
          </div>
          <select v-model="productData.status" class="select select-bordered">
            <option disabled selected>choose status</option>
            <option value="open">Open</option>
            <option value="close">Close</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end mt-4">
        <button class="btn btn-ghost">Back</button>
        <button class="btn btn-neutral" @click="addProduct()">Add</button>
      </div>
    </div>
  </AdminLayout>
</template>