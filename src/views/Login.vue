<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">เข้าสู่ระบบพนักงาน</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700">อีเมลองค์กร</label>
          <input v-model="email" type="email" required class="w-full px-4 py-2 border rounded-lg" />
        </div>

        <div v-if="step === 2" class="mb-4">
          <label class="block text-gray-700">ยืนยันตัวเลข 2 ชั้น</label>
          <div class="flex items-center gap-2">
            <span class="font-mono text-xl">{{ verificationCode }}</span>
            <button type="button" @click="generateCode" class="text-blue-500 underline text-sm">สุ่มใหม่</button>
          </div>
          <input v-model="userCode" placeholder="พิมพ์ตัวเลขที่เห็น" required class="w-full px-4 py-2 border rounded-lg mt-2" />
        </div>

        <div class="mt-6">
          <router-link to="/assessmentform">
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              {{ step === 1 ? 'ดำเนินการต่อ' : 'เข้าสู่ระบบ' }}
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const step = ref(1)
const verificationCode = ref('')
const userCode = ref('')

const generateCode = () => {
  verificationCode.value = Math.floor(1000 + Math.random() * 9000).toString()
}

generateCode()

const handleLogin = () => {
  if (step.value === 1) {

    if (!email.value.endsWith('@yourcompany.com')) {
      alert('โปรดใช้อีเมลองค์กรเท่านั้น')
      return
    }
    step.value = 2
  } else if (step.value === 2) {
    if (userCode.value !== verificationCode.value) {
      alert('รหัสยืนยันไม่ถูกต้อง')
      generateCode()
      return
    }

    const user = {
      token: 'mock_token',
      email: email.value,
      id: 'EMP12345',
      name: 'สมชาย ตัวอย่าง',
      department: 'ฝ่ายนวัตกรรม',
      role: 'DM',
    }
    localStorage.setItem('user', JSON.stringify(user))
    router.push('/assessmentform')
  }
}
</script>
