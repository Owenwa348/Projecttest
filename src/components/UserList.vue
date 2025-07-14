<script setup>
import { ref, computed } from 'vue'

const users = ref([
  { name: 'สมชาย ใจดี', email: 'somchai@example.com', group: 'SVP', unit: 'BFS', status: 'done' },
  { name: 'อรทัย สายใจ', email: 'aor@example.com', group: 'SVP', unit: 'BOS', status: 'pending' },
  { name: 'จิตรลดา ใจสุข', email: 'jit@example.com', group: 'DM', unit: 'CMV', status: 'done' },
  { name: 'อนันต์ หนักแน่น', email: 'anan@example.com', group: 'EVP', unit: 'ECS', status: 'pending' },
  { name: 'นพดล ทองดี', email: 'nop@example.com', group: 'SVP', unit: 'BTS', status: 'done' },
  { name: 'ดวงใจ รักดี', email: 'duang@example.com', group: 'DM', unit: 'EFM', status: 'pending' },
  { name: 'บุญช่วย ช่วยเหลือ', email: 'boon@example.com', group: 'EVP', unit: 'OCT', status: 'done' },
  { name: 'สายใจ มั่นคง', email: 'sai@example.com', group: 'SVP', unit: 'EFM', status: 'pending' },
  { name: 'วราภรณ์ จริงใจ', email: 'wara@example.com', group: 'EVP', unit: 'JCS', status: 'done' },
  { name: 'ก้องเกียรติ กล้าหาญ', email: 'kong@example.com', group: 'DM', unit: 'EFM', status: 'pending' },
])

const search = ref('')
const statusFilter = ref('all') // all | done | pending
const currentPage = ref(1)
const perPage = 5

const stats = computed(() => {
  const done = users.value.filter(u => u.status === 'done').length
  return {
    total: users.value.length,
    done,
    pending: users.value.length - done
  }
})

const filteredUsers = computed(() => {
  const keyword = search.value.toLowerCase()
  return users.value.filter(user => {
    const matchSearch = [user.name, user.email, user.group, user.unit].some(field =>
      field.toLowerCase().includes(keyword)
    )
    const matchStatus = statusFilter.value === 'all' || user.status === statusFilter.value
    return matchSearch && matchStatus
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
  <div class="space-y-6">
    <!-- Header & Filter -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <div>
        <h2 class="text-xl font-semibold text-gray-800">รายชื่อผู้ใช้</h2>
        <div class="text-sm text-gray-600 mt-1 space-x-2">
          <span>ทั้งหมด: {{ stats.total }}</span>
          <span>ทำแล้ว: {{ stats.done }}</span>
          <span>ยังไม่ทำ: {{ stats.pending }}</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <select v-model="statusFilter" class="px-3 py-2 border rounded-lg text-sm shadow-sm">
          <option value="all">ทั้งหมด</option>
          <option value="done">ทำแล้ว</option>
          <option value="pending">ยังไม่ทำ</option>
        </select>
        <input
          v-model="search"
          type="text"
          placeholder="ค้นหา..."
          class="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 w-64"
        />
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto rounded-xl shadow">
      <table class="min-w-full bg-white divide-y divide-gray-200">
        <thead class="bg-gray-100 text-gray-700 text-sm font-semibold">
          <tr>
            <th class="px-6 py-3 text-left">ชื่อ</th>
            <th class="px-6 py-3 text-left">อีเมล</th>
            <th class="px-6 py-3 text-left">หน่วยงาน</th>
            <th class="px-6 py-3 text-left">ตำแหน่ง</th>
            <th class="px-6 py-3 text-left">สถานะ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 text-sm text-gray-700">
          <tr
            v-for="(user, index) in paginatedUsers"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="px-6 py-3 font-medium">{{ user.name }}</td>
            <td class="px-6 py-3">{{ user.email }}</td>
            <td class="px-6 py-3">{{ user.group }}</td>
            <td class="px-6 py-3">{{ user.unit }}</td>
            <td class="px-6 py-3">
              <span
                class="px-2 py-1 text-xs font-medium rounded-full"
                :class="{
                  'bg-green-100 text-green-700': user.status === 'done',
                  'bg-yellow-100 text-yellow-700': user.status === 'pending'
                }"
              >
                {{ user.status === 'done' ? 'ทำแล้ว' : 'ยังไม่ทำ' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex justify-end space-x-2 pt-4">
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        ย้อนกลับ
      </button>
      <span class="text-gray-700 px-2 pt-1">
        หน้า {{ currentPage }} จาก {{ totalPages }}
      </span>
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        ถัดไป
      </button>
    </div>
  </div>
</template>
