<script setup>
import Footer from "../components/Footer.vue";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <div class="w-full h-screen overflow-hidden">
    <!-- รูป -->
    <img
      src="/industry.jpg"
      alt="background"
      class="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-20000 hover:scale-110"
    />

    <!-- พื้นหลังสีทึบ พร้อม gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#06202B]/70 via-[#06202B]/60 to-[#0A3A4A]/50 z-0"></div>
    

    <!-- เนื้อหาทับพื้นหลัง -->
    <div
      class="z-10 flex flex-col items-center justify-center h-full text-center -translate-y-10 relative"
    >

      <!-- Main content with enhanced styling -->
      <div class="max-w-4xl mx-auto px-4">
        <h3 class="text-white text-3xl font-bold relative mb-6 animate-fade-in">
          <span class="relative z-0">เพราะนวัตกรรมหลักคือ</span>
          <div class="absolute -bottom- left-1/2 transform -translate-x-1/2 w-75 h-1 bg-gradient-to-r from-transparent via-[#7ae2cf] to-transparent rounded-full"></div>
        </h3>
        
        <div class="relative">
          <h4 class="underline decoration-[#7ae2cf] decoration-4 underline-offset-8 text-white text-3xl font-bold mt-4 animate-slide-up relative z-10">
            "การสร้างกระบวนการเพื่อเพิ่มประสิทธภาพการทำงาน"
          </h4>
          
        </div>
      </div>

      <!-- ปุ่ม -->
      <div
        class="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 animate-fade-in-up"
      >
        <a href="#AssessmentForm" class="group">
          <button
            style="background-color: #7ae2cf"
            class="relative px-8 py-6 rounded-full text-xl font-semibold hover:bg-[#62CFC0] text-[#000000] transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-[#7ae2cf]/25 overflow-hidden"
          >
            
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span class="relative z-10 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              ทำแบบประเมินของบริษัท
            </span>
          </button>
        </a>
        
        <router-link to="/contact" style="color: white;">
          <button
            style="background-color: #7ae2cf"
            class="relative text-[#000000] px-8 py-6 rounded-full text-xl font-semibold hover:bg-[#62CFC0] transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-[#7ae2cf]/25 overflow-hidden"
          >
          
            
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span class="relative z-10 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                
              </svg>
              ติดต่อสอบถาม
            </span>
          </button>
        </router-link>
      </div>
    </div>
    
    <div id="Footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out 0.6s forwards;
  opacity: 0;
}

/* Enhanced button hover effects */
button:hover {
  box-shadow: 0 20px 40px rgba(122, 226, 207, 0.3);
}


/* Scroll indicator animation */
@keyframes scroll-indicator {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>