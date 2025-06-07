<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
    <div class="bg-gray-900 text-white rounded-xl shadow-lg w-full max-w-sm p-6 space-y-5">
      <h2 class="text-xl font-bold text-center">ลงชื่อเข้าใช้หรือสมัครใช้งานได้ในไม่กี่วินาที</h2>
      <p class="text-sm text-center text-gray-300">เข้าสู่ระบบหรือสร้างบัญชีได้ง่าย ๆ ด้วยอีเมลหรือช่องทางอื่น ๆ (ฟรี)</p>

      <button @click="loginWithGoogle"
        class="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition">
        <img src="/google-icon.svg" alt="Google" class="w-5 h-5" />
        ดำเนินการต่อด้วย Google
      </button>

      <button @click="loginWithFacebook"
        class="w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition">
        <img src="/facebook-icon.svg" alt="Facebook" class="w-5 h-5" />
        ดำเนินการต่อด้วย Facebook
      </button>

      <button @click="loginWithEmail"
        class="w-full flex items-center justify-center gap-3 bg-gray-800 border border-gray-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-700 transition">
        ดำเนินการต่อด้วยอีเมล
      </button>
    </div>
  </div>
</template>

<script setup>
const loginWithGoogle = () => {
  // Firebase Auth Google
};

const loginWithFacebook = () => {
  // Firebase Auth Facebook
};

const loginWithEmail = () => {
  // เปิด modal login ด้วย email/password
};
</script>
