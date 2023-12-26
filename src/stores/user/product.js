import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [{
      name: 'test',
      imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100,
    },
    {
      name: 'test123',
      imageUrl: 'https://fastly.picsum.photos/id/406/200/200.jpg?hmac=RkvoDL29GdYFLEDajHXtCCieqAjWVp9vl__A-D6bddw',
      quantity: 10,
      about: 'testzaza',
      status: 'open',
      price: 100,
    },
    {
      name: 'test456',
      imageUrl: 'https://fastly.picsum.photos/id/80/200/200.jpg?hmac=uEQ6yExxeaopTOWf3oByB8KMH6Eip3-AVLN5jEMthko',
      quantity: 10,
      about: 'testt4zaza',
      status: 'open',
      price: 100,
    },
    {
      name: 'test789',
      imageUrl: 'https://fastly.picsum.photos/id/141/200/200.jpg?hmac=cy5VCF6f8Mq7cum6d-R7m7mbrGC0wgUzI4UpSX_qkIk',
      quantity: 10,
      about: 'testtza',
      status: 'open',
      price: 100,
    },
    {
      name: 'test',
      imageUrl: 'https://fastly.picsum.photos/id/849/200/200.jpg?hmac=LwsdGn2endKvoLY10FPqtfqKYCVMbPEp5J6S_tUN1Yg',
      quantity: 10,
      about: 'testt',
      status: 'open',
      price: 100,
    },
    {
      name: 'test123',
      imageUrl: 'https://fastly.picsum.photos/id/406/200/200.jpg?hmac=RkvoDL29GdYFLEDajHXtCCieqAjWVp9vl__A-D6bddw',
      quantity: 10,
      about: 'testzaza',
      status: 'open',
      price: 100,
    },
    {
      name: 'test456',
      imageUrl: 'https://fastly.picsum.photos/id/80/200/200.jpg?hmac=uEQ6yExxeaopTOWf3oByB8KMH6Eip3-AVLN5jEMthko',
      quantity: 10,
      about: 'testt4zaza',
      status: 'open',
      price: 100,
    },
    {
      name: 'test789',
      imageUrl: 'https://fastly.picsum.photos/id/141/200/200.jpg?hmac=cy5VCF6f8Mq7cum6d-R7m7mbrGC0wgUzI4UpSX_qkIk',
      quantity: 10,
      about: 'testtza',
      status: 'open',
      price: 100,
    },
    ]
  })
})
