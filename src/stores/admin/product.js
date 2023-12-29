import { defineStore } from 'pinia'


export const useAdminProoductStore = defineStore('admin-product', {
  state: () => ({
    list: [
      {
        name: "test",
        image:
          "https://fastly.picsum.photos/id/444/200/200.jpg?hmac=j2rJG0CKjM3Pmd7gDrCI5-1pYZIh4tjiScLDa5xS_KU",
        price: 200,
        quantity: 20,
        remainQuantity: 11,
        status: "open",
        updatedAt: new Date().toISOString(),
      }
    ]
  }),
  actions: {
    getProduct(index) {
      return this.list[index]
    },
    addProduct(productData) {
      productData.remainQuantity = productData.quantity
      productData.updatedAt = (new Date()).toISOString()
      this.list.push(productData)
    },
    updateProduct(index, productData) {
      this.list[index] = { ...productData }
      this.list[index].updatedAt = (new Date()).toISOString()
    },
    removeProduct(index) {
      this.list.splice(index, 1);
    }
  }
})