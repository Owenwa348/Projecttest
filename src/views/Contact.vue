<script setup>
import Footer from "../components/Footer.vue";

import { ref } from "vue";

const isOpen = ref(false);
</script>
<template>
  <div class="w-full bg-white absolute inset-0 w-full h-full object-cover">
    <!-- เนื้อหา -->
    <div
      class="flex flex-col items-center justify-center h-full text-center px- inset-0 w-full object-cover"
    >
      <!-- หัวข้อ -->
      <h3 class="text-4xl font-bold text-[#000000] mb-12 -mt-20">
        เกี่ยวกับเรา
      </h3>
      

      <!-- เนื้อหาหลัก -->
           <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-6 px-">
      <!-- รูปภาพ -->
    </div>
    </div>
    <div id="Footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
