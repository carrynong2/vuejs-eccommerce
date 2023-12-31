<script setup>
import { RouterLink } from "vue-router";
import { useAdminUserStore } from "@/stores/admin/user";

import AdminLayout from "@/layouts/AdminLayout.vue";

import Table from "@/components/Table.vue";

const adminUserStore = useAdminUserStore();

const changeStatus = (index) => {
  const selectedUser = adminUserStore.list[index];
  selectedUser.status =
    selectedUser.status === "active" ? "inactive" : "active";
  adminUserStore.updateUser(selectedUser);
};
</script>

<template>
  <AdminLayout>
    <div class="flex items-center justify-between my-4">
      <div class="text-3xl font-bold">User</div>
    </div>
    <Table :headers="['Name', 'Role', 'Status', 'Updated At', '']">
      <tr v-for="(user, index) in adminUserStore.list">
        <td>{{ user.fullname }}</td>
        <td>{{ user.role }}</td>
        <td>
          <div
            class="badge"
            :class="user.status === 'active' ? 'badge-success' : 'badge-ghost'"
          >
            {{ user.status }}
          </div>
        </td>
        <td>{{ user.updatedAt }}</td>
        <td>
          <div class="flex gap-2">
            <RouterLink
              :to="{ name: 'admin-users-update', params: { id: index } }"
              class="btn"
              >Edit</RouterLink
            >
            <button class="btn" @click="changeStatus(index)">
              {{ user.status === "active" ? "Disble" : "Enable" }}
            </button>
          </div>
        </td>
      </tr>
    </Table>
  </AdminLayout>
</template>