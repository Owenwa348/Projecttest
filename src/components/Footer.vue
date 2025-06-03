<template>
  <footer class="text-white py-3 fixed bottom-0 left-0 w-full z-50 bg-[#06202B] backdrop-blur-md shadow-md">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      
      <!-- Column 1: Address -->
      <div class="flex flex-col items-start">
        <h4 class="font-bold">บริษัท เวอร์เท่ สมาร์ท โซลูชั่น จำกัด</h4>
        <p class="mt-1">เลขที่ 18/76 หมู่ที่ 1 ตำบลเนินพระ อำเภอเมืองระยอง</p>
        <p>จังหวัดระยอง 21000</p>
      </div>

      <!-- Column 2: Contact (Centered horizontally but left-aligned text) -->
      <div class="flex flex-col items-start text-left space-y-2 mx-auto">
        <div class="flex items-center space-x-2">
          <img src="/phone.png" alt="Logo" class="h-5 mr-2" />
          <span>087-074-1477</span>
  
        </div>
        <div class="flex items-center space-x-2">
          <img src="/envelope.png" alt="Logo" class="h-5 mr-2" />
          <span>info@vertesmartsolution.com</span> 
        </div>
      </div>

      <!-- Column 3: Social + Copyright -->
      <div class="flex flex-col items-end space-y-2">
        <div class="flex space-x-4">
          <i class="fab fa-linkedin text-xl">
            
          </i>
          <i class="fab fa-line text-xl"></i>
          <i class="fab fa-facebook text-xl"></i>
          <i class="fab fa-youtube text-xl">
            <img src="/phone.png" alt="Logo" class="h-5 mr-2" />
          </i>
        </div>
        <p class="text-sm mt-2">© Copyright 2025 | Verte Smart Solution</p>
      </div>

    </div>
  </footer>
</template>
