<script setup>
import FormNotify from "@/components/forms/FormNotify.vue";
import FormSuscriber from "@/components/forms/FormSuscriber.vue";
import { ref } from "vue";

let isNotify = ref(true);
</script>

<template>
  <main>
    <div class="flex justify-center">
      <div>
        <p class="text-2xl font-semibold">Select the correct form</p>
        <div class="mt-5 flex justify-center items-center">
          <button
            :class="{
              'bg-blue-500 hover:bg-blue-600': isNotify,
              'bg-gray-500 hover:bg-gray-600': !isNotify,
            }"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l transition-colors duration-300"
            @click="isNotify = true"
          >
            New notification
          </button>
          <button
            :class="{
              'bg-blue-500 hover:bg-blue-600': !isNotify,
              'bg-gray-500 hover:bg-gray-600': isNotify,
            }"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r transition-colors duration-300"
            @click="isNotify = false"
          >
            New subscriber
          </button>
        </div>
      </div>
    </div>

    <div>
      <FormNotify v-if="isNotify" />
      <FormSuscriber v-else />
    </div>
  </main>
</template>
