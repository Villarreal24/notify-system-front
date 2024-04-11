<script setup>
import FormNotify from "@/components/forms/FormNotify.vue";
import { ref } from "vue";

let isNotify = ref(true);
</script>

<template>
  <main>
    <FormNotify />
  </main>
</template>
