<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold mb-6 text-center">สมัครสมาชิก</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block text-gray-700">ชื่อ - นามสกุล</label>
          <input v-model="name" required class="w-full px-4 py-2 border rounded-lg" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">ID พนักงาน</label>
          <input v-model="employeeId" required class="w-full px-4 py-2 border rounded-lg" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">อีเมลองค์กร</label>
          <input v-model="email" type="email" required class="w-full px-4 py-2 border rounded-lg" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">หน่วยงาน</label>
          <select v-model="department" class="w-full px-4 py-2 border rounded-lg">
            <option disabled value="">เลือกหน่วยงาน</option>
            <option>ฝ่ายนวัตกรรม</option>
            <option>ฝ่ายการผลิต</option>
            <option>ฝ่ายทรัพยากรบุคคล</option>
            <option>ฝ่ายบัญชี</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">ระดับ</label>
          <input v-model="level" required class="w-full px-4 py-2 border rounded-lg" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">อายุงาน (ปี)</label>
          <input v-model.number="experience" type="number" min="0" required class="w-full px-4 py-2 border rounded-lg" />
        </div>

        <div class="mt-6">
          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            สมัครสมาชิก
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const employeeId = ref('')
const email = ref('')
const department = ref('')
const level = ref('')
const experience = ref(0)

const handleRegister = () => {
  if (!email.value.endsWith('@yourcompany.com')) {
    alert('ใช้ได้เฉพาะอีเมลองค์กรเท่านั้น')
    return
  }

  const user = {
    token: 'mock_token',
    email: email.value,
    id: employeeId.value,
    name: name.value,
    department: department.value,
    level: level.value,
    experience: experience.value,
  }

  localStorage.setItem('user', JSON.stringify(user))
  router.push('/survey')
}
</script>
