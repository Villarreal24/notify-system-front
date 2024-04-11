<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { type FormNotification } from "@/types/types";
import { useStore } from '@/store';

const store = useStore();

const success = ref(false);
const err = ref(false);
const categories = ref([]);

// ===== GET LIST OF CATEGORIES =====
onMounted(async () => {
    const resp = await store.notifications.getCategories();
    categories.value = resp
});

const initFormValues: FormNotification = {
  category: "",
  message: "",
};

const form = reactive({ ...initFormValues });

const resetInputs = () => {
  Object.assign(form, initFormValues);
};

const sendForm =async () => {
  const object = {
    category: form.category,
    message: form.message
  }
  const resp = await store.notifications.sendNotification(object);
  // ==== VALIDATE RESPONSE FROM THE SERVER ====
  if (resp && resp.success) {
    success.value = true
    resetInputs();
    setTimeout(() => {
      success.value = false
    }, 4000);
  } else {
    err.value = true
    setTimeout(() => {
      err.value = false
    }, 4000);
    console.log("Error something failed with the server")
  }
}
</script>

<template lang="">
  <div class="bg-gray-100 mt-10 w-100 flex items-center justify-center">
    <div class="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Form to send notification</h2>

      <div class="mb-5">
        <p v-show="success" class="p-1 px-3 bg-green-300 text-green-700 rounded-md">
          Form sent successfully!
        </p>
        <p v-if="err" class="p-1 px-3 bg-red-300 text-red-700 rounded-md">
          Oh, something failed, please check your conecction 
          to internet and try again.
        </p>
      </div>

      <form @submit.prevent="sendForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold"
            >Category</label>
          <select
            id="category"
            v-model="form.category"
            required 
            class="form-input input-style"
          >
            <option disabled value="">Select one category</option>
            <option
              v-for="category in categories"
              :value="category.category_name"
              :key="category.id"
            >
              {{ category.category_name }}
            </option>
          </select>
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
