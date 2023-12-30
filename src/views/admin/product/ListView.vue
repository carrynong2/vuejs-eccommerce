<script setup>
import { RouterLink } from "vue-router";

import { useAdminProoductStore } from "@/stores/admin/product";

import AdminLayout from "@/layouts/AdminLayout.vue";

import Edit from "@/components/icons/Edit.vue";
import Trash from "@/components/icons/Trash.vue";
import Table from "@/components/Table.vue";

import { onMounted } from "vue";

const adminProductStore = useAdminProoductStore();

onMounted(() => {
  adminProductStore.loadProducts();
});

const removeProduct = (index) => {
  adminProductStore.removeProduct(index);
};
</script>

<template>
  <AdminLayout>
    <div class="flex items-center justify-between my-4">
      <div class="text-3xl font-bold">Product</div>
      <div>
        <RouterLink
          :to="{ name: 'admin-products-create' }"
          class="btn btn-neutral"
          >Add New</RouterLink
        >
      </div>
    </div>
    <div class="overflow-x-auto">
      <Table
        :headers="[
          'name',
          'image',
          'price',
          'quantity',
          'status',
          'updatedAt',
          '',
        ]"
      >
        <tr v-for="(product, index) in adminProductStore.list">
          <th>{{ product.name }}</th>
          <td>
            <img :src="product.image" class="w-12" />
          </td>
          <td>{{ product.price }}</td>
          <td>{{ product.remainQuantity }} / {{ product.quantity }}</td>
          <td>
            <div
              class="badge"
              :class="
                product.status === 'open' ? 'badge-success' : 'badge-error'
              "
            >
              {{ product.status }}
            </div>
          </td>
          <td>{{ product.updatedAt }}</td>
          <td>
            <div class="flex gap-2">
              <RouterLink
                :to="{ name: 'admin-products-update', params: { id: index } }"
                class="btn btn-ghost"
              >
                <Edit></Edit>
              </RouterLink>
              <div @click="removeProduct(index)" class="btn btn-ghost">
                <Trash></Trash>
              </div>
            </div>
          </td>
        </tr>
      </Table>
    </div>
  </AdminLayout>
</template>