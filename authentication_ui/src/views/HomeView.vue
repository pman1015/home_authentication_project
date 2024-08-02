<script setup>
import InputForm from '@/components/InputForm.vue';
import { ref } from 'vue';
const formLabel = 'Login';
const login_form = ref([
  { label: 'username', type: 'text', error: '' },
  { label: 'password', type: 'password', error: '' },
]);
function onSubmit(form_result) {
  console.log(form_result);
}
</script>
<template>
  <div class="flex flex-col justify-center items-center w-9/12 h-full ml-auto mr-auto mt-16">
    <h1 class="text-2xl text-pop text-center">Welcome to HurdLab Authentication</h1>
    <p class="text-md mt-4 text-pop text-justify">please login below to verify your login </p>
    <InputForm class="mt-4" :formLabel="formLabel" :options="login_form" :onSubmit="onSubmit" />
  </div>
</template>
