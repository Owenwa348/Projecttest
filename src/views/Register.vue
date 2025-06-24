<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6 md:p-20">
    <div class="w-full max-w-xl bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">ระบุข้อมูลส่วนตัวของพนักงาน</h2>

      <form @submit.prevent="handleRegister" class="space-y-6">
        <!-- ชื่อ - นามสกุล -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">ชื่อ - นามสกุล</label>
          <input
            v-model="name"
            type="text"
            class="w-full px-4 py-2 border rounded-lg"
            placeholder="กรุณาระบุชื่อ - นามสกุล"
            pattern="^[ก-ฮa-zA-Z\s]+$"
            required
            :disabled="isSubmitting"
          />
        </div>

        <!-- ID พนักงาน -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">ID พนักงาน</label>
          <input
            v-model="employeeId"
            type="text"
            class="w-full px-4 py-2 border rounded-lg"
            placeholder="ระบุ ID พนักงาน 8 หลัก"
            pattern="[0-9]{8}"
            required
            :disabled="isSubmitting"
          />
        </div>

        <!-- อีเมลองค์กร -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">อีเมลองค์กร</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-2 border rounded-lg"
            placeholder="example@yourcompany.com"
            required
            :disabled="isSubmitting"
          />
        </div>

        <!-- ตำแหน่ง -->
        <div class="mb-4">
          <h1 class="text-lg font-semibold">ตำแหน่งงานในองค์กร</h1>
          <label class="block text-gray-700">ผู้จัดการฝ่าย(DM)</label>
            <select v-model="departmentDM" class="w-full px-4 py-2 border rounded-lg mb-4">
              <option disabled value="">เลือกตำแหน่งงาน</option>
              <option v-for="job in jobTitlesDm" :key="job">{{ job }}</option>
            </select>
          <label class="block text-gray-700 ">รองประธานอาวุโส(SVP)</label>
          <select v-model="departmentSVP" class="w-full px-4 py-2 border rounded-lg mb-4">
            <option disabled value="">เลือกตำแหน่งงาน</option>
            <option>ฝ่ายนวัตกรรม</option>
            <option>ฝ่ายการผลิต</option>
            <option>ฝ่ายทรัพยากรบุคคล</option>
            <option>ฝ่ายบัญชี</option> 
          </select>
          <label class="block text-gray-700">รองประธานบริหาร(EVP)</label>
          <select v-model="departmentEVP" class="w-full px-4 py-2 border rounded-lg">
            <option disabled value="">เลือกตำแหน่งงาน</option>
            <option>ฝ่ายนวัตกรรม</option>
            <option>ฝ่ายการผลิต</option>
            <option>ฝ่ายทรัพยากรบุคคล</option>
            <option>ฝ่ายบัญชี</option> 
          </select>
        </div>

        <!-- พื้นที่งาน -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">พื้นที่งาน</label>
          <input
            v-model="workArea"
            type="text"
            class="w-full px-4 py-2 border rounded-lg"
            placeholder="กรุณาระบุพื้นที่งาน"
            pattern="^[ก-ฮa-zA-Z\s]+$"
            required
            :disabled="isSubmitting"
          />
        </div>

        <!-- อายุงาน -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">อายุงาน (ปี)</label>
          <input
            v-model.number="experience"
            type="number"
            min="0"
            required
            class="w-full px-4 py-2 border rounded-lg"
            :disabled="isSubmitting"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? "กำลังส่งข้อมูล..." : "ตกลง" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '../data/position.js'
const jobTitlesDm = questions.jobTitlesDM



const router = useRouter()

const name = ref('')
const employeeId = ref('')
const email = ref('')
const departmentDM = ref('')
const departmentSVP = ref('')
const departmentEVP = ref('')
const level = ref('')
const workArea = ref('')
const experience = ref(0)
const isSubmitting = ref(false)

const handleRegister = () => {
  if (!email.value.endsWith('@yourcompany.com')) {
    alert('ใช้ได้เฉพาะอีเมลองค์กรเท่านั้น (@yourcompany.com)')
    return
  }

  if (
    !name.value ||
    !employeeId.value ||
    !email.value ||
    !departmentDM.value ||
    !departmentSVP.value ||
    !departmentEVP.value ||
    !level.value ||
    !workArea.value ||
    experience.value === null
  ) {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    return
  }

  isSubmitting.value = true

const user = {
  token: 'mock_token',
  name: name.value,
  id: employeeId.value,
  email: email.value,
  departmentDM: departmentDM.value,
  departmentSVP: departmentSVP.value,
  departmentEVP: departmentEVP.value,
  level: level.value,
  experience: experience.value,
  workArea: workArea.value,
}


  localStorage.setItem('user', JSON.stringify(user))
  router.push('/assessmentform')
}
</script>
