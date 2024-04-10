<script setup lang="ts">
import { ref, reactive } from "vue";
import { type FormNewSubscriber } from "@/types/types";

const categories = ref(["sports", "finance", "movies"]);
const channels = ref(["sms", "email", "push notification"]);

const errCategory = ref(false);
const errChannel = ref(false);

const initFormValues: FormNewSubscriber = {
  name: "",
  email: "",
  phone: "",
  categories: [],
  channels: [],
};

const form = reactive({ ...initFormValues });

const resetInputs = () => {
  console.log("Entry");
  Object.assign(form, initFormValues);
  errCategory.value = false;
  errChannel.value = false;
};

const submitForm = () => {
  // ===== GET ARRAYS OF THE OPTIONS SELECTED =====
  const selectCategories = Object.keys(form.categories).filter(
    (category) => form.categories[category]
  );
  const selectChannels = Object.keys(form.channels).filter(
    (channel) => form.channels[channel]
  );

  // ===== VALIDATE IF CHECKBOX IS SELECTED UNLESS ONE ======
  if (selectCategories.length !== 0 && selectChannels.length !== 0) {
    const data = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      categories: form.categories,
      channels: form.channels,
    };
    // console.log("Send: ", data);
    resetInputs();
  } else {
    // ==== IDENTIFY TYPE TO SHOW TEXT ALERT ====
    if (selectCategories.length == 0) {
      errCategory.value = true;
    } else {
      errChannel.value = true;
    }
  }
};
</script>

<template>
  <div class="bg-gray-100 mt-10 w-100 flex items-center justify-center">
    <div class="w-2/5 bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Form to add suscriber</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold"
            >Name</label
          >
          <input
            type="name"
            id="name"
            v-model="form.name"
            class="form-input input-style"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold"
            >Correo Electrónico</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="input-style"
            required
          />
        </div>
        <div class="mb-6">
          <label for="phone" class="block text-gray-700 font-semibold"
            >Phone number</label
          >
          <input
            type="phone"
            id="phone"
            v-model="form.phone"
            class="form-input input-style"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2"
            >Categories</label
          >
          <div class="flex flex-wrap">
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="mr-4"
            >
              <input
                :id="`option${index}${category}`"
                v-model="form.categories[category]"
                class="ml-2 form-checkbox cursor-pointer"
                :value="category"
                type="checkbox"
              />
              <label
                :for="`option${index}${category}`"
                class="ml-1 text-sm cursor-pointer"
                v-text="category.toUpperCase()"
              ></label>
            </div>
          </div>
          <p v-if="errCategory" class="mt-2 text-red-700">
            You must to select unless one option
          </p>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2">Channels</label>
          <div class="flex flex-wrap">
            <div v-for="(channel, index) in channels" :key="index" class="mr-4">
              <input
                :id="`option${index}${channel}`"
                v-model="form.channels[channel]"
                class="ml-2 form-checkbox cursor-pointer"
                :value="channel"
                type="checkbox"
              />
              <label
                :for="`option${index}${channel}`"
                class="ml-1 text-sm cursor-pointer"
                v-text="channel.toUpperCase()"
              ></label>
            </div>
          </div>
          <p v-if="errChannel" class="mt-2 text-red-700">
            You must to select unless one option
          </p>
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
  @apply mt-1 block w-full bg-slate-200 rounded-md h-8;
}
</style>
