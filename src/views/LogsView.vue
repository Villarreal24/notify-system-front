<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { useStore } from '@/store';
import { type FormatDate } from '@/types/types';

const store = useStore();
const headers = ['Id', 'User name', 'Email', 'Phone number', 'Message', 'Category', 'channels', 'Created'];
const dataLogs = ref([]);

// ===== GET DATA OF TABLE "LOGS" =====
onMounted(async () => {
    const resp = await store.notifications.getLogs();
    dataLogs.value = resp
});

const formatDateTime = (dateTimeString: string | number | Date) => {
  const options: FormatDate = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };
  const date = new Date(dateTimeString);
  return date.toLocaleString('es-ES', options);
};
</script>

<template lang="">
    <div>
        <h1 className="mb-5 text-3xl font-bold">
            Logs
        </h1>
        <table class="table-auto">
            <thead>
                <tr class="mr-5">
                    <th class="mr-5" v-for="header in headers" :key="header">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dataLog in dataLogs" :key="dataLog.id">
                    <td v-for="header in headers" :key="header">
                        <template v-if="header.toLowerCase() === 'created'">
                            {{ formatDateTime(dataLog[header.toLowerCase().replace(/\s/g, '_')]) }}
                            </template>
                        <template v-else>
                            {{ dataLog[header.toLowerCase().replace(/\s/g, '_')] }}
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="">
    
</style>