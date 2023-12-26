<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Close from "@/components/icons/Close.vue";
</script>

<template>
  <UserLayout>
    <h1 class="text-3xl font-bold m-4">Shopping Cart</h1>
    <div class="flex">
      <div class="flex-auto w-64 bg-base-200 p-4">
        <div v-for="item in [1, 2, 3, 4, 5]" class="flex">
          <div class="flex-1">
            <img
              class="w-full p-10"
              src="https://fastly.picsum.photos/id/4/200/200.jpg?hmac=ozRrjh7SMobdmKcOU0f5sWYszFW9Or1c90qeq7uqtuw"
              alt=""
            />
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="relative grid grid-cols-2">
                  <div>
                    <div><b>Flower</b></div>
                    <div>Just flower</div>
                    <div>100 ฿</div>
                  </div>
                  <div>
                    <select class="w-1/2 p-4">
                      <option v-for="quantity in [1, 2, 3, 4, 5]">
                        {{ quantity }}
                      </option>
                    </select>
                  </div>
                  <div class="absolute top-0 right-0">
                    <Close />
                  </div>
                </div>
              </div>
              <div><b>Instock</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto w-32 bg-slate-200 p-4">
        <div class="text-xl font-bold">Order Summary</div>
        <div class="my-4 divide-y divide-black">
          <div class="flex justify-between py-2">
            <div>ราคาสินค้าทั้งหมด</div>
            <div>100</div>
          </div>
          <div class="flex justify-between py-2">
            <div>ค่าส่ง</div>
            <div>0</div>
          </div>
          <div class="flex justify-between py-2">
            <div>ราคารวมท้ังหมด</div>
            <div>0</div>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>