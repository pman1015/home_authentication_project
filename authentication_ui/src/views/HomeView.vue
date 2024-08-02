<script setup>
import InputForm from '@/components/InputForm.vue';
import axios from 'axios';
import { ref } from 'vue';
import dotEnv from 'dotenv';


const formLabel = 'Login';
const login_form = ref([
  { label: 'username', type: 'text', error: '' },
  { label: 'password', type: 'password', error: '' },
]);
function onSubmit(form_result) {
  console.log(form_result);
  let valid = true;
  if (form_result.username === '' || form_result.username === undefined) {
    login_form.value[0].error = 'Username is required';
    valid = false;
  } else {
    login_form.value[0].error = '';
  }
  if (form_result.password === '' || form_result.password === undefined) {
    login_form.value[1].error = 'Password is required';
    valid = false;
  } else {
    login_form.value[1].error = '';
  }
  if (!valid) return;

  const destination = "https://auth.api.hurd-lab.com";
  const req = {
    username: form_result.username,
    password: form_result.password,
  };
  console.log(req)
  axios
    .post(
      `${destination}/login`,

      {
        username: form_result.username,
        password: form_result.password,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    )
    .catch((error) => {
      console.log(error);
      login_form.value[0].error = error.response.data;
    })
    .then((response) => {
      console.log(response);
    });
}

</script>
<template>
  <div class="flex flex-col justify-center items-center w-9/12 h-full ml-auto mr-auto mt-16">
    <h1 class="text-2xl text-pop text-center">Welcome to HurdLab Authentication</h1>
    <p class="text-md mt-4 text-pop text-justify">please login below to verify your login </p>
    <InputForm class="mt-4" :formLabel="formLabel" :options="login_form" :onSubmit="onSubmit" />
  </div>
</template>
