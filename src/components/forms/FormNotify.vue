<script setup>
import { ref, reactive } from "vue";
const categories = ["sports", "finance", "movies"];
const channels = ["sms", "email", "push notification"];

const form = reactive({
  category: "",
  message: "",
});
</script>

<template lang="">
  <div class="bg-gray-100 mt-10 w-100 flex items-center justify-center">
    <div class="w-2/5 bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Form to send notification</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold"
            >Category</label
          >
          <input
            type="category"
            id="category"
            v-model="form.category"
            class="form-input input-style"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold"
            >Message</label
          >
          <textarea
            id="message"
            v-model="form.message"
            class="input-style"
            placeholder="You can add multiple lines"
            required
            style="height: 100px"
          />
        </div>

        <div class="mt-10 flex justify-center">
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Send form
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.input-style {
  @apply px-2 py-1 mt-1 block w-full bg-slate-200 rounded-md h-8;
}
</style>
