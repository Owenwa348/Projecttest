<script setup>
import Footer from "../components/Footer.vue";
import { ref } from "vue";

const isOpen = ref(false);
// ข้อมูลทีมวิทยากร
const teamMembers = ref([
  {
    id: 1,
    name: "คทา ประภาสะวัต",
    position: "ความปลอดภัย ความปลอดภัยกระบวนการผลิต SSHE software",
    // expertise: "ความปลอดภัยในอุตสาหกรรม",
    // experience: "15+ ปี",
    image: "/team1.jpg",
    // description: "ผู้เชี่ยวชาญด้านการจัดการความปลอดภัยในอุตสาหกรรม"
  }
]);
</script>

<template>
  <div class="about-us  from-gray-50 to-white min-h-screen ">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute top-10 left-10 w-32 h-32 bg-[#7AE2CF] rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200 rounded-full blur-2xl"></div>
    </div>

    <!-- เนื้อหาหลัก -->
    <div class="relative z-10 pt-20 pb-16">
      <!-- หัวข้อเกี่ยวกับเรา -->
      <div class="text-center mb-16">
        <h3 class="text-4xl font-bold text-[#000000] mb-4 relative inline-block">
          เกี่ยวกับเรา
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#7AE2CF] to-blue-400 rounded-full"></div>
        </h3>
      </div>

      <!-- เนื้อหาหลัก -->
      <div class="max-w-6xl mx-auto relative px-4 mb-20">
        <!-- Container สำหรับการจัดวาง -->
        <div class="relative flex flex-col md:flex-row items-center">
          <!-- รูปภาพ -->
          <div class="w-full md:w-7/12 group relative">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
              <img
                src="/industryv2.jpg"
                alt="โรงงาน"
                class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <!-- Corner accent -->
              <div class="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#7AE2CF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#7AE2CF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <!-- กล่องข้อความ - ซ้อนทับครึ่งหนึ่ง -->
          <div class="w-full md:w-8/12 bg-white border-l-6 border-[#7AE2CF] p-8 rounded-2xl shadow-2xl relative overflow-hidden transform transition-all duration-300 hover:shadow-3xl md:-ml-32 mt-8 md:mt-0 z-10">
            <!-- Background pattern inside box -->
            <div class="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#7AE2CF" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            
            <!-- Header with icon -->
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-[#7AE2CF] to-blue-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-[#000000]">Verte Smart Solution</h2>
            </div>
            
            <!-- Animated divider -->
            <div class="relative mb-6">
              <div class="h-1 bg-gradient-to-r from-[#7AE2CF] via-blue-400 to-green-400 rounded-full"></div>
              <div class="absolute top-0 left-0 h-1 w-0 bg-white rounded-full animate-pulse"></div>
            </div>
            
            <!-- Content with enhanced styling -->
            <div class="space-y-6">
              <div class="relative pl-6">
                <div class="absolute left-0 top-2 w-2 h-2 bg-[#7AE2CF] rounded-full"></div>
                <p class="text-[#000000] text-xl leading-relaxed font-medium relative">
                  <span class="bg-gradient-to-r from-[#7AE2CF]/10 to-transparent px-2 py-1 rounded">
                    "Empowering Thai industry to enhance safety, reduce risks, and drive
                    a future of sustainable operational excellence through SHE
                    innovation"
                  </span>
                </p>
              </div>
              
              <div class="relative pl-6">
                <div class="absolute left-0 top-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <p class="text-[#000000] text-xl leading-relaxed font-medium relative">
                  <span class="bg-gradient-to-r from-blue-400/10 to-transparent px-2 py-1 rounded">
                    "เสริมพลังให้อุตสาหกรรมไทย ยกระดับความปลอดภัย ลดความเสี่ยง
                    และขับเคลื่อนสู่ความเป็นเลิศในการดำเนินงานอย่างยั่งยืน
                    ผ่านนวัตกรรมด้านความปลอดภัย อาชีวอนามัย และสิ่งแวดล้อม (SHE)"
                  </span>
                </p>
              </div>
            </div>
            
            <!-- Bottom accent -->
            <div class="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#7AE2CF]/10 to-transparent rounded-tl-full"></div>
          </div>
        </div>
      </div>

      <!-- ส่วนทีมวิทยากร -->
      <div class="text-center mb-16">
        <h3 class="text-4xl font-bold text-[#000000] mb-4 relative inline-block">
          ทีมวิทยากร
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#7AE2CF] to-blue-400 rounded-full"></div>
        </h3>
      </div>
      
      <!-- Grid ทีมวิทยากร -->
      <div class="max-w-7xl mx-auto px-4 mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div 
            v-for="member in teamMembers" 
            :key="member.id"
            class="group relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl max-w-sm w-full"
          >
            <!-- รูปภาพวิทยากร -->
            <div class="relative h-64 overflow-hidden">
              <img 
                :src="member.image" 
                :alt="member.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Badge ประสบการณ์ (แสดงเฉพาะเมื่อมีข้อมูล) -->
              <div v-if="member.experience" class="absolute top-4 right-4 bg-[#7AE2CF] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {{ member.experience }}
              </div>
            </div>
            
            <!-- ข้อมูลวิทยากร -->
            <div class="p-6 relative">
              <!-- Background pattern -->
              <div class="absolute top-0 right-0 w-20 h-20 opacity-5">
                <svg viewBox="0 0 100 100" class="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#7AE2CF" stroke-width="2"/>
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#7AE2CF" stroke-width="1"/>
                </svg>
              </div>
              
              <!-- ชื่อและตำแหน่ง -->
              <div class="mb-4">
                <h4 class="text-xl font-bold text-[#000000] mb-2">{{ member.name }}</h4>
                <p class="text-[#7AE2CF] font-semibold mb-1">{{ member.position }}</p>
                <p class="text-gray-600 text-sm">{{ member.expertise }}</p>
              </div>
              
              <!-- คำอธิบาย -->
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                {{ member.description }}
              </p>
              
              <!-- Divider -->
              <div class="h-1 bg-gradient-to-r from-[#7AE2CF] to-blue-400 rounded-full w-1/3 group-hover:w-full transition-all duration-500"></div>
              
              <!-- Icon decoration -->
              <div class="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-[#7AE2CF]/20 to-blue-400/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg class="w-4 h-4 text-[#7AE2CF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Floating elements -->
      <div class="absolute top-1/4 right-10 w-4 h-4 bg-[#7AE2CF] rounded-full animate-bounce pointer-events-none" style="animation-delay: 1s"></div>
      <div class="absolute bottom-1/4 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce pointer-events-none" style="animation-delay: 2s"></div>
    </div>

    <div id="Footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

.border-l-6 {
  border-left-width: 6px;
}

/* Custom animations */
@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse-slow {
  animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>