<template>
  <div class="min-h-screen bg-gray-50 p-6 pt-3 text-gray-800">
    <!-- Title Section -->
    <div class="mb-6 border-b pb-4">
      <div
        class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
      >
        <div>
          <h3 class="text-2xl font-bold leading-snug">
            {{ currentIndex + 1 }}. {{ questions[currentIndex].th }}
          </h3>
          <p class="text-lg text-gray-600 mt-1">
            {{ questions[currentIndex].en }}
          </p>
        </div>
        <div class="text-sm font-medium text-gray-600 self-start lg:self-end">
          คำถามที่
          <span class="text-green-600 font-semibold">{{ currentIndex + 1 }}</span> จาก
          <span class="font-semibold">{{ questions.length }}</span>
        </div>
      </div>
    </div>

    <!-- Table Header -->
    <div
      class="grid grid-cols-12 bg-gray-100 font-semibold text-sm p-4 rounded-t-lg border"
    >
      <div class="col-span-3 text-center">
        <div class="grid grid-cols-2">
          <div class="border-r">ปัจจุบัน</div>
          <div>สิ่งที่คาดหวังในอนาคต</div>
        </div>
      </div>
      <div class="col-span-2 text-center">ระดับคะแนน</div>
      <div class="col-span-7 text-center">ความหมายของคะแนนประเมิน</div>
    </div>

    <!-- Radio Choices -->
    <form class="space-y-4 border border-t-0 rounded-b-lg bg-white mb-6">
      <div
        v-for="(level, n) in questions[currentIndex].levels"
        :key="n"
        class="grid grid-cols-12 items-start gap-4 px-4 py-3 border-t"
      >
        <!-- ตัวเลือก: ปัจจุบัน และ อนาคต -->
        <div class="col-span-3 grid grid-cols-2 gap-2 place-items-center">
          <!-- ปัจจุบัน -->
          <input
            type="radio"
            :id="'current-level' + n"
            name="current-level"
            :value="n + 1"
            class="w-5 h-5 text-blue-500 focus:ring-blue-400"
            v-model="answers[currentIndex].level"
          />
          <!-- อนาคต -->
          <input
            type="radio"
            :id="'future-level' + n"
            name="future-level"
            :value="n + 1"
            class="w-5 h-5 text-green-500 focus:ring-green-400"
            v-model="answers[currentIndex].futureLevel"
          />
        </div>

        <!-- คะแนน -->
        <div class="col-span-2 text-center pt-2 text-lg font-bold text-gray-700">
          {{ n + 1 }}
        </div>

        <!-- ความหมาย -->
        <div class="col-span-7 space-y-1 text-sm leading-snug">
          <p class="text-gray-800 font-medium">{{ level.th }}</p>
          <p class="text-gray-500 italic">{{ level.en }}</p>
        </div>
      </div>
    </form>

    <!-- Comment Box -->
    <div class="mb-8">
      <label class="block text-lg font-semibold text-gray-800 mb-2">
        แสดงความคิดเห็นเพิ่มเติม
      </label>
      <textarea
        v-model="answers[currentIndex].comment"
        rows="4"
        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ae2cf] focus:border-transparent resize-vertical"
        placeholder="กรุณากรอกข้อความที่ต้องการสอบถาม..."
      ></textarea>
    </div>

    <!-- Buttons -->
    <div class="mt-8 flex justify-between">
      <button
        class="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 shadow disabled:opacity-50"
        @click="goBack"
        :disabled="currentIndex === 0"
        type="button"
      >
        ก่อนหน้า
      </button>
      <button
        class="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 shadow"
        @click="goNext"
        type="button"
      >
        {{ currentIndex === questions.length - 1 ? "ส่งแบบประเมิน" : "ถัดไป" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { questions } from "../data/questions.js";

const currentIndex = ref(0);
const answers = ref(questions.map(() => ({
  level: null,
  futureLevel: null,
  comment: ''
})))

function goNext() {
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value++;
  } else {
    // ส่งข้อมูลไป backend ได้ตรงนี้
    console.log("ผลการประเมิน:", answers.value);
    alert("ส่งแบบประเมินเรียบร้อยแล้ว ขอบคุณค่ะ");
  }
}

function goBack() {
  if (currentIndex.value > 0) currentIndex.value--;
}
</script>
