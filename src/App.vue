<script setup>

import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";


import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow" id="NavBar">
      <NavBar></NavBar>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
/* เพิ่มเติมสไตล์ได้ตามต้องการ */
</style>
