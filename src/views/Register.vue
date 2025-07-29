<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 md:p-5">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div class="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
    </div>

    <div class="relative flex items-center justify-center min-h-screen">
      <div class="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 md:p-10">
        <!-- Header with icon -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-2">ระบุข้อมูลส่วนตัวของพนักงาน</h2>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-6">
          <!-- คำนำหน้า -->
          <div class="group">
            <label class="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">
              <span class="flex items-center">
                คำนำหน้า
              </span>
            </label>
            <select v-model="prefix" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm">
              <option disabled value="">เลือกคำนำหน้า</option>
              <option>นาย</option>
              <option>นาง</option>
              <option>นางสาว</option>
            </select>
          </div>

          <!-- ชื่อ - นามสกุล -->
          <div class="group">
            <label class="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">
              <span class="flex items-center">
                ชื่อ - นามสกุล
              </span>
            </label>
            <input
              v-model="name"
              type="text"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="กรุณาระบุชื่อ - นามสกุล"
              pattern="^[ก-ฮa-zA-Z\s]+$"
              required
              :disabled="isSubmitting"
            />
          </div>

          <!-- ตำแหน่ง -->
          <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-100">
            <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              ตำแหน่งงานในองค์กร
            </h3>
            
            <div class="space-y-5">
              <!-- DM Position -->
              <div class="group">
                <label class="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">
                  ผู้จัดการฝ่าย (DM)
                </label>
                <select v-model="departmentDM" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/70 backdrop-blur-sm">
                  <option disabled value="">เลือกตำแหน่งงาน</option>
                  <option v-for="job in jobTitlesDm" :key="job">{{ job }}</option>
                </select>
              </div>

              <!-- SVP Position -->
              <div class="group">
                <label class="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">
                  รองประธานอาวุโส (SVP)
                </label>
                <select v-model="departmentSVP" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/70 backdrop-blur-sm">
                  <option disabled value="">เลือกตำแหน่งงาน</option>
                  <option>ฝ่ายนวัตกรรม</option>
                  <option>ฝ่ายการผลิต</option>
                  <option>ฝ่ายทรัพยากรบุคคล</option>
                  <option>ฝ่ายบัญชี</option> 
                </select>
              </div>

              <!-- EVP Position -->
              <div class="group">
                <label class="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">
                  รองประธานบริหาร (EVP)
                </label>
                <select v-model="departmentEVP" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/70 backdrop-blur-sm">
                  <option disabled value="">เลือกตำแหน่งงาน</option>
                  <option>ฝ่ายนวัตกรรม</option>
                  <option>ฝ่ายการผลิต</option>
                  <option>ฝ่ายทรัพยากรบุคคล</option>
                  <option>ฝ่ายบัญชี</option> 
                </select>
              </div>
            </div>
          </div>

          <!-- พื้นที่งาน -->
          <div class="group">
            <label class="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">
              <span class="flex items-center">
                พื้นที่งาน
              </span>
            </label>
            <input
              v-model="workArea"
              type="text"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="กรุณาระบุพื้นที่งาน"
              pattern="^[ก-ฮa-zA-Z\s]+$"
              required
              :disabled="isSubmitting"
            />
          </div>

          <!-- อายุงาน -->
          <div class="group">
            <label class="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">
              <span class="flex items-center">
                อายุงาน (ปี)
              </span>
            </label>
            <input
              v-model.number="experience"
              type="number"
              min="0"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              :disabled="isSubmitting"
            />
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center"
              :disabled="isSubmitting"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? "กำลังส่งข้อมูล..." : "ตกลง" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '../data/position.js'

const jobTitlesDm = questions.jobTitlesDM

const router = useRouter()

const prefix = ref('')
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