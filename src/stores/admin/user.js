import { defineStore } from 'pinia'

export const useAdminUserStore = defineStore('admin-user', {
  state: () => ({
    list: [
      {
        fullname: "Nong",
        role: "admin",
        status: "active",
        updatedAt: (new Date()).toISOString()
      }
    ]
  }),
  actions: {
    getUser(index) {
      return this.list[index]
    },
    updateUser(index, userData) {
      this.list[index] = { ...userData }
      this.list[index].updatedAt = (new Date()).toISOString()
    },
    removeUser(index) {
      this.list.splice(index, 1);
    }
  }
})  