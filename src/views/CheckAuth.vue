<template>
  <div class="flex flex-col items-center justify-center h-screen text-center space-y-6">
    <h2 class="text-2xl font-bold">คุณยังไม่ได้เข้าสู่ระบบ</h2>
    <div class="flex gap-4">
      <router-link to="/login">
        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">เข้าสู่ระบบ</button>
      </router-link>
      <router-link to="/register">
        <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">สมัครสมาชิก</button>
      </router-link>
    </div>
  </div>
</template>
