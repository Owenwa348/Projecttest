<script setup>
import { ref, computed } from "vue";
import StackedBar from "../components/StackedBar.vue";

const selectedGroup = ref("DM");
const selectedType = ref("ทั้งหมด");
const selectedTimeframe = ref("current");

const baseData = {
DM: {
    labels: ["DMO", "DMF", "DMA", "DMT", "DMP", "DMS", "DMM", "DME", "DMD", "DMQ",],
    v1: {
      current: [
        [2, 5, 1, 4, 3, 5, 1, 2, 4, 4, 1, 5, 3, 2, 1, 4, 5, 3],
        [1, 4, 2, 5, 3, 3, 4, 1, 5, 2, 4, 3, 1, 5, 2, 4, 3, 4],
        [3, 1, 4, 2, 5, 1, 3, 4, 2, 5, 1, 4, 3, 2, 5, 1, 4, 2],
        [5, 2, 3, 1, 4, 5, 2, 3, 1, 4, 5, 2, 3, 1, 4, 5, 2, 3],
        [4, 3, 1, 5, 2, 4, 3, 1, 5, 2, 4, 3, 1, 5, 2, 4, 3, 1],
        [2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3],
        [1, 3, 5, 2, 4, 1, 3, 5, 2, 4, 1, 3, 5, 2, 4, 1, 3, 5],
        [3, 4, 2, 1, 5, 3, 4, 2, 1, 5, 3, 4, 2, 1, 5, 3, 4, 2],
        [4, 1, 5, 3, 2, 4, 1, 5, 3, 2, 4, 1, 5, 3, 2, 4, 1, 5],
        [5, 2, 4, 1, 3, 5, 2, 4, 1, 3, 5, 2, 4, 1, 3, 5, 2, 4],
      ],
      future: [
        [5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1, 3],
        [3, 2, 5, 1, 4, 3, 2, 5, 1, 4, 3, 2, 5, 1, 4, 3, 2, 5],
        [2, 4, 1, 5, 3, 2, 4, 1, 5, 3, 2, 4, 1, 5, 3, 2, 4, 1],
        [4, 5, 2, 3, 1, 4, 5, 2, 3, 1, 4, 5, 2, 3, 1, 4, 5, 2],
        [1, 3, 4, 2, 5, 1, 3, 4, 2, 5, 1, 3, 4, 2, 5, 1, 3, 4],
        [3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5],
        [5, 4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1],
        [2, 1, 4, 3, 5, 2, 1, 4, 3, 5, 2, 1, 4, 3, 5, 2, 1, 4],
        [4, 3, 2, 5, 1, 4, 3, 2, 5, 1, 4, 3, 2, 5, 1, 4, 3, 2],
        [1, 5, 3, 4, 2, 1, 5, 3, 4, 2, 1, 5, 3, 4, 2, 1, 5, 3],
      ]
    },
    v2: {
      current: [
        [4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5],
        [2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4],
        [1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2],
        [5, 2, 1, 4, 3, 5, 2, 1, 4, 3, 5, 2, 1, 4, 3, 5, 2, 1],
        [3, 4, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5],
        [4, 1, 2, 5, 3, 4, 1, 2, 5, 3, 4, 1, 2, 5, 3, 4, 1, 2],
        [2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3],
        [1, 3, 4, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4],
        [5, 4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1],
        [3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 2, 3, 1, 5],
      ],
      future: [
        [1, 4, 2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2],
        [4, 2, 1, 3, 5, 4, 2, 1, 3, 5, 4, 2, 1, 3, 5, 4, 2, 1],
        [3, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 4],
        [2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5],
        [5, 3, 1, 2, 4, 5, 3, 1, 2, 4, 5, 3, 1, 2, 4, 5, 3, 1],
        [1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3],
        [4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2],
        [3, 5, 1, 4, 2, 3, 5, 1, 4, 2, 3, 5, 1, 4, 2, 3, 5, 1],
        [2, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5],
        [5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1, 3],
      ]
    }
  },
  SVP: {
    labels: ["VPO", "VPF", "VPA", "VPT", "VPP", "VPS", "VPM", "VPE", "VPD", "VPQ"],
    v1: {
      current: [
        [3, 1, 4, 5, 2, 3, 1, 4, 5, 2, 3, 1, 4, 5, 2, 3, 1, 4],
        [1, 5, 2, 4, 3, 1, 5, 2, 4, 3, 1, 5, 2, 4, 3, 1, 5, 2],
        [4, 2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5],
        [2, 3, 1, 4, 5, 2, 3, 1, 4, 5, 2, 3, 1, 4, 5, 2, 3, 1],
        [5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3],
        [3, 1, 2, 5, 4, 3, 1, 2, 5, 4, 3, 1, 2, 5, 4, 3, 1, 2],
        [1, 4, 5, 2, 3, 1, 4, 5, 2, 3, 1, 4, 5, 2, 3, 1, 4, 5],
        [4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1],
        [2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4],
        [5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2]
      ],
      future: [
        [5, 2, 1, 4, 3, 5, 2, 1, 4, 3, 5, 2, 1, 4, 3, 5, 2, 1],
        [1, 3, 4, 2, 5, 1, 3, 4, 2, 5, 1, 3, 4, 2, 5, 1, 3, 4],
        [3, 4, 2, 5, 1, 3, 4, 2, 5, 1, 3, 4, 2, 5, 1, 3, 4, 2],
        [4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5],
        [2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3],
        [5, 1, 4, 3, 2, 5, 1, 4, 3, 2, 5, 1, 4, 3, 2, 5, 1, 4],
        [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3],
        [3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
        [4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1],
        [2, 1, 3, 5, 4, 2, 1, 3, 5, 4, 2, 1, 3, 5, 4, 2, 1, 3]
      ]
    },
    v2: {
      current: [
        [4, 2, 1, 5, 3, 4, 2, 1, 5, 3, 4, 2, 1, 5, 3, 4, 2, 1],
        [2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3, 1, 4, 2, 5, 3],
        [5, 1, 4, 3, 2, 5, 1, 4, 3, 2, 5, 1, 4, 3, 2, 5, 1, 4],
        [1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2, 4, 5, 1, 3, 2],
        [3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
        [4, 1, 2, 5, 3, 4, 1, 2, 5, 3, 4, 1, 2, 5, 3, 4, 1, 2],
        [2, 5, 1, 3, 4, 2, 5, 1, 3, 4, 2, 5, 1, 3, 4, 2, 5, 1],
        [5, 3, 4, 2, 1, 5, 3, 4, 2, 1, 5, 3, 4, 2, 1, 5, 3, 4],
        [1, 2, 5, 4, 3, 1, 2, 5, 4, 3, 1, 2, 5, 4, 3, 1, 2, 5],
        [3, 4, 1, 2, 5, 3, 4, 1, 2, 5, 3, 4, 1, 2, 5, 3, 4, 1]
      ],
      future: [
        [4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5],
        [1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2],
        [5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3],
        [2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4],
        [3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1],
        [4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5],
        [1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2],
        [5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3],
        [2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4],
        [3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1]
      ]
    }
  },
  EVP: {
    labels: ["COO", "CFO", "CTO", "CMO", "CCO"],
    v1: {
      current: [
        [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3],
        [5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3],
        [3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1],
        [4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1],
        [2, 1, 4, 3, 5, 2, 1, 4, 3, 5, 2, 1, 4, 3, 5, 2, 1, 4]
      ],
      future: [
        [5, 1, 4, 2, 3, 5, 1, 4, 2, 3, 5, 1, 4, 2, 3, 5, 1, 4],
        [1, 4, 2, 3, 5, 1, 4, 2, 3, 5, 1, 4, 2, 3, 5, 1, 4, 2],
        [4, 2, 3, 5, 1, 4, 2, 3, 5, 1, 4, 2, 3, 5, 1, 4, 2, 3],
        [2, 3, 5, 1, 4, 2, 3, 5, 1, 4, 2, 3, 5, 1, 4, 2, 3, 5],
        [3, 5, 1, 4, 2, 3, 5, 1, 4, 2, 3, 5, 1, 4, 2, 3, 5, 1]
      ]
    },
    v2: {
      current: [
        [3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1, 5, 2, 3, 4, 1],
        [1, 2, 5, 4, 3, 1, 2, 5, 4, 3, 1, 2, 5, 4, 3, 1, 2, 5],
        [4, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5, 2],
        [2, 1, 3, 5, 4, 2, 1, 3, 5, 4, 2, 1, 3, 5, 4, 2, 1, 3],
        [5, 3, 4, 2, 1, 5, 3, 4, 2, 1, 5, 3, 4, 2, 1, 5, 3, 4]
      ],
      future: [
        [5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2],
        [4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2],
        [1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3, 5, 4, 1, 2, 3],
        [3, 4, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5],
        [2, 5, 1, 4, 3, 2, 5, 1, 4, 3, 2, 5, 1, 4, 3, 2, 5, 1]
      ]
    }
  },
};
const fullLabels = [
  "A: Comms with workforce",
  "B: Commitment level of w/f",
  "C: Rewards of good HSE",
  "D: Who causes accidents",
  "E: Profit & HSE",
  "F: Contractor management",
  "G: Competency & training",
  "H: Size of HSE Dept.",
  "I: Work planning",
  "J: Worksite safety management",
  "K: Purpose of procedures",
  "L: Incident reporting",
  "M: Hazard reporting",
  "N: What after accident",
  "O: Who checks HSE day-day",
  "P: How HSE meetings feel",
  "Q: Audits & reviews",
  "R: Benchmarking"
];


// -- แยกข้อมูลเฉพาะ V1 --
const stackedBarV1Data = computed(() => {
  const group = baseData[selectedGroup.value];
  if (!group) return { labels: [], datasets: [] };

  const raw = group.v1?.[selectedTimeframe.value] || [];
  const truncated = raw.map(row => row.slice(0, fullLabels.length));

  return {
    labels: fullLabels,
    datasets: [{
      label: `V1 (${selectedTimeframe.value === 'current' ? 'ปัจจุบัน' : 'คาดในอนาคต'})`,
      data: truncated
    }]
  };
});

const stackedBarV2Data = computed(() => {
  const group = baseData[selectedGroup.value];
  if (!group) return { labels: [], datasets: [] };

  const raw = group.v2?.[selectedTimeframe.value] || [];
  const truncated = raw.map(row => row.slice(0, fullLabels.length));

  return {
    labels: fullLabels,
    datasets: [{
      label: `V2 (${selectedTimeframe.value === 'current' ? 'ปัจจุบัน' : 'คาดในอนาคต'})`,
      data: truncated
    }]
  };
});


const groupOptions = [
  { value: "DM", label: "Direct Manager (DM)" },
  { value: "SVP", label: "Senior Vice President (SVP)" },
  { value: "EVP", label: "Executive Vice President (EVP)" }
];

const timeframeOptions = [
  { value: "current", label: "ปัจจุบัน" },
  { value: "future", label: "คาดในอนาคต" }
];
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-10">
      ผลประเมินตามข้อคำถาม
    </h1>

    <!-- Filters -->
    <div class="flex flex-wrap justify-center gap-4 mb-10">
      <select v-model="selectedGroup" class="px-4 py-2 rounded-lg border shadow-sm bg-white text-gray-700">
        <option v-for="g in groupOptions" :key="g.value" :value="g.value">{{ g.label }}</option>
      </select>

      <select v-model="selectedTimeframe" class="px-4 py-2 rounded-lg border shadow-sm bg-white text-gray-700">
        <option v-for="t in timeframeOptions" :key="t.value" :value="t.value">{{ t.label }}</option>
      </select>
    </div>

    <!-- V1 Chart -->
    <div class="bg-white rounded-2xl shadow-lg border p-6 mb-10">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">กราฟ verte smart solution</h2>
      <div style="height: 600px">
        <StackedBar :chart-data="stackedBarV1Data" />
      </div>
    </div>

    <!-- V2 Chart -->
    <div class="bg-white rounded-2xl shadow-lg border p-6">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">กราฟ verte security</h2>
      <div style="height: 600px">
        <StackedBar :chart-data="stackedBarV2Data" />
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
  min-width: 180px;
  transition: all 0.3s ease;
}
select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}
</style>
