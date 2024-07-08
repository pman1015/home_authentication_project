<script setup>
import { ref } from 'vue';
import InputForm from './../components/InputForm.vue';
const userForm = ref([
  {
    id: 1,
    label: 'Email',
    error: '',
  },
  {
    id: 2,
    label: 'Password',
    error: '',
    type: 'password',
  },
  {
    id: 3,
    label: 'ConfirmPassword',
    error: '',
  },
]);

function addUser(user) {
  console.log(user);
  if (user.Email === '' || user.Email === undefined) {
    userForm.value[0].error = 'Email is required';
  } else {
    userForm.value[0].error = '';
  }
  if (user.Password === '' || user.Password === undefined) {
    userForm.value[1].error = 'Password is required';
  } else {
    userForm.value[1].error = '';
  }
  if (user.ConfirmPassword === '' || user.ConfirmPassword === undefined) {
    userForm.value[2].error = 'Confirm Password is required';
  } else if (user.Password !== user.ConfirmPassword) {
    userForm.value[2].error = 'Passwords do not match';
  } else {
    userForm.value[2].error = '';
  }
}
</script>
<template>
  <div class="flex w-full align-middle flex-col justify-center items-center">
    <h1 class="text-4xl text-pop">Add a New User</h1>
    <p class="text-sm text-white w-1/6 text-justify pb-8">
      Add a new user to the authentication service by adding an email and
      setting a password
    </p>
    <InputForm formLabel="Add User" :options="userForm" :onSubmit="addUser" />
  </div>
</template>
