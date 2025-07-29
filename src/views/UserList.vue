<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

const users = ref([])
const loading = ref(true)

const search = ref('')
const statusFilter = ref('all') // all | active | inactive
const agencyFilter = ref('all')
const currentPage = ref(1)
const perPage = 5
const editingUser = ref(null)

async function deleteUser(id) {
  if (confirm('คุณต้องการลบผู้ใช้นี้หรือไม่?')) {
    try {
      await axios.delete(`/api/userlist/${id}`)
      users.value = users.value.filter(u => u.id !== id)
    } catch (err) {
      console.error('ลบไม่สำเร็จ:', err)
      alert('เกิดข้อผิดพลาดในการลบผู้ใช้')
    }
  }
}

function editUser(user) {
  router.push(`/users/edit/${user.id}`)
}

onMounted(async () => {
  try {
    const res = await axios.get('/api/userlist')
    users.value = res.data
  } catch (err) {
    console.error('Error fetching users:', err)
  } finally {
    loading.value = false
  }
})

const stats = computed(() => {
  const active = users.value.filter(u => u.isActive).length
  return {
    total: users.value.length,
    active,
    inactive: users.value.length - active
  }
})

// สร้างรายการ agencyEVP แบบไม่ซ้ำ
const uniqueAgencies = computed(() => {
  const agencies = users.value.map(u => u.agencyEVP).filter(Boolean)
  return ['all', ...new Set(agencies)]
})

const filteredUsers = computed(() => {
  const keyword = search.value.toLowerCase()

  return users.value.filter(user => {
    const matchSearch = [user.name, user.email, user.area, user.role].some(field =>
      String(field || '').toLowerCase().includes(keyword)
    )

    const matchStatus =
      statusFilter.value === 'all' ||
      (statusFilter.value === 'active' && user.isActive) ||
      (statusFilter.value === 'inactive' && !user.isActive)

    const matchAgency =
      agencyFilter.value === 'all' || user.agencyEVP === agencyFilter.value

    return matchSearch && matchStatus && matchAgency
  })
})

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredUsers.value.slice(start, start + perPage)
})

const totalPages = computed(() =>
  Math.ceil(filteredUsers.value.length / perPage)
)

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<template>
  <div class="bg-gray-50 p-6">
    <div class="max-w-6xl mx-auto space-y-6">
      <!-- Header -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 class="text-xl font-semibold text-gray-800">รายชื่อผู้ใช้</h1>
            <div class="text-sm text-gray-600 mt-2 flex gap-4">
              <span>ทั้งหมด: {{ stats.total }}</span>
              <span>ทำแล้ว: {{ stats.active }}</span>
              <span>ยังไม่ได้ทำ: {{ stats.inactive }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters section -->
      <div class="bg-white rounded-lg shadow-sm border p-4">
        <div class="flex flex-col md:flex-row gap-3">
          <input
            v-model="search"
            type="text"
            placeholder="ค้นหา ชื่อ/อีเมล/พื้นที่..."
            class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          
          <select v-model="statusFilter" class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500">
            <option value="all">ทั้งหมด</option>
            <option value="active">ทำแล้ว</option>
            <option value="inactive">ยังไม่ได้ทำ</option>
          </select>

          <select v-model="agencyFilter" class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500">
            <option value="all">หน่วยงานทั้งหมด</option>
            <option v-for="agency in uniqueAgencies" :key="agency" :value="agency">
              {{ agency }}
            </option>
          </select>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="bg-white rounded-lg shadow-sm border p-6 text-center">
        <span class="text-gray-500">กำลังโหลดข้อมูล...</span>
      </div>

      <!-- Table -->
      <div v-else class="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ชื่อ</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">อีเมล</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">พื้นที่</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">หน่วยงาน</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">สถานะ</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">การจัดการ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="(user, index) in paginatedUsers"
                :key="index"
                class="hover:bg-gray-50"
              >
                <td class="px-6 py-4 font-medium text-gray-900">{{ user.name }}</td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ user.email }}</td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ user.area }}</td>
                <td class="px-6 py-4 text-sm text-gray-600">
                  {{ user.agencyEVP || '-' }} /
                  {{ user.agencySVP || '-' }} /
                  {{ user.agencyDM || '-' }}
                </td>
                <td class="px-6 py-4">
                  <span
                    class="px-2 py-1 text-xs font-medium rounded-full"
                    :class="{
                      'bg-green-100 text-green-800': user.isActive,
                      'bg-red-100 text-red-800': !user.isActive
                    }"
                  >
                    {{ user.isActive ? 'ดำเนินงานเสร็จแล้ว': 'ยังดำเนินงานไม่เสร็จ' }}
                  </span>
                </td>
                <td class="px-6 py-4 space-x-2">
                  <button
                    @click="editUser(user)"
                    class="px-3 py-1 text-sm text-blue-600 border border-blue-300 rounded hover:bg-blue-50"
                  >
                    แก้ไข
                  </button>
                  <button
                    @click="deleteUser(user.id)"
                    class="px-3 py-1 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50"
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="bg-gray-50 px-6 py-3 border-t">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-700">
              หน้า {{ currentPage }} จาก {{ totalPages }}
            </span>
            <div class="flex space-x-2">
              <button
                @click="goToPage(currentPage - 1)"
                :disabled="currentPage === 1"
                class="px-3 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-50"
              >
                ย้อนกลับ
              </button>
              <button
                @click="goToPage(currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="px-3 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-50"
              >
                ถัดไป
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>