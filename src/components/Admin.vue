<script setup>
import { ref, computed } from 'vue';

const admins = ref([
  { name: 'นาย A', email: 'a@example.com', role: 'SuperAdmin', active: true },
  { name: 'นางสาว B', email: 'b@example.com', role: 'Admin', active: true },
  { name: 'นาย C', email: 'c@example.com', role: 'SuperAdmin', active: false },
  { name: 'นาย D', email: 'd@example.com', role: 'Admin', active: true }
]);

const search = ref('');
const showModal = ref(false);
const newAdmin = ref({ name: '', email: '', role: 'Admin', active: true });
// ค้นหาแอดมิน
const filteredAdmins = computed(() => {
  const keyword = search.value.toLowerCase();
  return admins.value.filter(a =>
    a.name.toLowerCase().includes(keyword) ||
    a.email.toLowerCase().includes(keyword)
  );
});
// เปิดปิดบัญชี
function toggleActive(admin) {
  admin.active = !admin.active;
}
// รีรหัสผ่าน
function resetPassword(admin) {
  alert(`ส่งลิงก์รีเซ็ตรหัสผ่านไปที่ ${admin.email}`);
}
// เปลี่ยนสิทธิ์
function changeRole(admin, newRole) {
  admin.role = newRole;
}
// แอดมิน
function removeAdmin(admin) {
  if (confirm(`คุณต้องการลบ ${admin.name} หรือไม่?`)) {
    admins.value = admins.value.filter(a => a !== admin);
  }
}
// กดแล้วไปห้าเพิ่มแอดมิน
function openAddModal() {
  newAdmin.value = { name: '', email: '', role: 'Admin', active: true };
  showModal.value = true;
}
// ชื่อกรอกแอดมินคนใหม่
function addAdmin() {
  if (!newAdmin.value.name || !newAdmin.value.email) {
    alert('กรุณากรอกชื่อและอีเมล');
    return;
  }
  admins.value.push({ ...newAdmin.value });
  showModal.value = false;
}
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-semibold text-gray-800">จัดการผู้ดูแลระบบ</h2>
      <div class="flex space-x-2">
        <input
          v-model="search"
          type="text"
          placeholder="ค้นหา..."
          class="px-4 py-2 border rounded-lg shadow-sm focus:ring w-64"
        />
        <button @click="openAddModal" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          เพิ่มผู้ดูแลใหม่
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto rounded-xl shadow">
      <table class="min-w-full bg-white divide-y divide-gray-200">
        <thead class="bg-gray-100 text-sm font-semibold text-gray-700">
          <tr>
            <th class="px-6 py-3 text-left">ชื่อ</th>
            <th class="px-6 py-3 text-left">อีเมล</th>
            <th class="px-6 py-3 text-left">สิทธิ์</th>
            <th class="px-6 py-3 text-left">สถานะ</th>
            <th class="px-6 py-3 text-left">การจัดการ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 text-sm text-gray-700">
          <tr v-for="admin in filteredAdmins" :key="admin.email" class="hover:bg-gray-50">
            <td class="px-6 py-3">{{ admin.name }}</td>
            <td class="px-6 py-3">{{ admin.email }}</td>
            <td class="px-6 py-3">
              <select v-model="admin.role" @change="changeRole(admin, admin.role)" class="border rounded px-2 py-1 text-sm">
                <option>SuperAdmin</option>
                <option>Admin</option>
              </select>
            </td>
            <td class="px-6 py-3">
              <span :class="admin.active ? 'text-green-600' : 'text-red-600'" class="font-medium">
                {{ admin.active ? 'เปิดใช้งาน' : 'ปิดใช้งาน' }}
              </span>
            </td>
            <td class="px-6 py-3 space-x-2">
              <button @click="toggleActive(admin)" class="text-sm text-blue-600 hover:underline">
                {{ admin.active ? 'ปิดบัญชี' : 'เปิดบัญชี' }}
              </button>
              <button @click="resetPassword(admin)" class="text-sm text-purple-600 hover:underline">
                Reset รหัสผ่าน
              </button>
              <button @click="removeAdmin(admin)" class="text-sm text-red-600 hover:underline">
                ลบ
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg w-[90%] max-w-md space-y-4">
        <h3 class="text-lg font-semibold">เพิ่มผู้ดูแลใหม่</h3>
        <div class="space-y-2">
          <input v-model="newAdmin.name" placeholder="ชื่อ" class="w-full px-3 py-2 border rounded" />
          <input v-model="newAdmin.email" placeholder="อีเมล" class="w-full px-3 py-2 border rounded" />
          <select v-model="newAdmin.role" class="w-full px-3 py-2 border rounded">
            <option>Admin</option>
            <option>SuperAdmin</option>
          </select>
        </div>
        <div class="flex justify-end space-x-2 pt-4">
          <button @click="showModal = false" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">ยกเลิก</button>
          <button @click="addAdmin" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">บันทึก</button>
        </div>
      </div>
    </div>
  </div>
</template>
