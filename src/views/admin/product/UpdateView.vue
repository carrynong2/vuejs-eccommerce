<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAdminProductStore } from "@/stores/admin/product";

import AdminLayout from "@/layouts/AdminLayout.vue";
import { useEventStore } from "@/stores/event";

const formData = [
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Image",
    field: "imageUrl",
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

const adminProductStore = useAdminProductStore();
const eventStore = useEventStore();
const router = useRouter();
const route = useRoute();

const productIndex = ref(-1);
const mode = ref("ADD");

const productData = reactive({
  name: "",
  imageUrl: "",
  price: 0,
  quantity: 0,
  about: "",
  status: "",
});

const updateProduct = () => {
  if (mode.value === "EDIT") {
    adminProductStore.updateProduct(productIndex.value, productData);
    eventStore.popupMessage("info", "Update product success");
  } else {
    adminProductStore.addProduct(productData);
    eventStore.popupMessage("info", "Add product success");
  }
  router.push({ name: "admin-products-list" });
};

onMounted(() => {
  if (route.params.id) {
    productIndex.value = parseInt(route.params.id);
    mode.value = "EDIT";

    const selectedProduct = adminProductStore.getProduct(productIndex.value);

    productData.name = selectedProduct.name;
    productData.imageUrl = selectedProduct.imageUrl;
    productData.price = selectedProduct.price;
    productData.quantity = selectedProduct.quantity;
    productData.about = selectedProduct.about;
    productData.status = selectedProduct.status;
  }
});
</script>

<template>
  <AdminLayout>
    <div class="shadow-xl p-8 mt-4">
      <div class="text-1xl font-bold">{{ mode }}</div>
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
        <RouterLink :to="{ name: 'admin-products-list' }" class="btn btn-ghost"
          >Back</RouterLink
        >
        <button class="btn btn-neutral" @click="updateProduct()">
          {{ mode }}
        </button>
      </div>
    </div>
  </AdminLayout>
</template>