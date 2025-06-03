<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-[#06202B] backdrop-blur-md shadow-md">
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#Home" class="flex items-center">
            <img src="/logoandname.png" alt="Logo" class="h-15 w-40 mr-2" />
            <!-- <span class="text-xl font-bold text-white">Verte</span> -->
          </a>
        </div>

        <!-- Desktop Navigation -->
<div class="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6 text-base font-medium">
  <router-link to="/" style="color: white;" class="text-xl text-white hover:text-white hover:bg-[#7AE2CF] px-3 py-2 rounded-md transition">หน้าแรก</router-link>
  <router-link to="/assessmentform" style="color: white;" class="text-xl text-white hover:text-white hover:bg-[#7AE2CF] px-3 py-2 rounded-md transition">แบบประเมิน</router-link>
  <router-link to="/about" style="color: white;" class="text-xl text-white hover:text-white hover:bg-[#7AE2CF] px-3 py-2 rounded-md transition">เกี่ยวกับเรา</router-link>
  <router-link to="/contact" style="color: white;" class="text-xl text-white hover:text-white hover:bg-[#7AE2CF] px-3 py-2 rounded-md transition">ติดต่อสอบถาม</router-link>
</div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="p-2 rounded-md bg-white text-[#06202B] hover:bg-[#7AE2CF] focus:outline-none">
            <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
<div v-if="isOpen" class="md:hidden px-4 pt-2 pb-4 space-y-1 bg-[#06202B] backdrop-blur-md shadow-md">
  <a href="#หน้าแรก" class="block px-3 py-2 rounded-md text-white hover:text-white hover:bg-[#7AE2CF]">หน้าแรก</a>
  <a href="#AssessmentForm" class="block px-3 py-2 rounded-md text-white hover:text-white hover:bg-[#7AE2CF]">Assessment Form</a>
  <a href="#Aboutus" class="block px-3 py-2 rounded-md text-white hover:text-white hover:bg-[#7AE2CF]">About Us</a>
  <a href="#Contactus" class="block px-3 py-2 rounded-md text-white hover:text-white hover:bg-[#7AE2CF]">Contact Us</a>
</div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
