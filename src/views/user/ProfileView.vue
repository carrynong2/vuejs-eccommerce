<script setup>
import { ref, onMounted } from "vue";
import UserLayout from "@/layouts/UserLayout.vue";

const profileImageUrl = ref(
  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
);
const email = ref("");
const name = ref("");

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImageUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const updateProfile = () => {
  const profileData = {
    imageUrl: profileImageUrl.value,
    name: name.value,
    email: email.value,
  };
  localStorage.setItem("profile-data", JSON.stringify(profileData));
  alert("success profile");
};

onMounted(() => {
  let profileData = localStorage.getItem("profile-data");
  if (profileData) {
    profileData = JSON.parse(profileData);
    profileImageUrl.value = profileData.imageUrl;
    name.value = profileData.name;
    email.value = profileData.email;
  }
});
</script>

<template>
  <UserLayout>
    <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8 my-4">
      <div class="font-bold text-2xl">Your profile</div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img class="w-64" :src="profileImageUrl" alt="" />
            </div>
          </div>
          <input type="file" @change="handleFileUpload" />
        </div>
        <div class="form-control w-full">
          <div class="label">
            <span class="label-text">Email</span>
          </div>
          <input
            v-model="email"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <div class="form-control w-full">
          <div class="label">
            <span class="label-text">Name</span>
          </div>
          <input
            v-model="name"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button @click="updateProfile" class="btn btn-neutral w-full mt-4">
          Update Profile
        </button>
      </div>
    </div>
  </UserLayout>
</template>