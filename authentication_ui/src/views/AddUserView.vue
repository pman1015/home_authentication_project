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

<script setup>
import axios from 'axios';
import dotenv from 'dotenv';
import { ref } from 'vue';
import InputForm from '../components/InputForm.vue';
const userForm = ref([
  {
    id: 1,
    label: 'Email',
    error: '',
  },
  { id: 2, label: 'Username', error: '' },
  {
    id: 3,
    label: 'Password',
    error: '',
    type: 'password',
  },
  {
    id: 4,
    label: 'ConfirmPassword',
    error: '',
    type: 'password',
  },
]);

function addUser(user) {
  console.log(user);
  let valid = true;
  if (user.Email === '' || user.Email === undefined) {
    userForm.value[0].error = 'Email is required';
    valid = false;
  } else if (!user.Email.includes('@')) {
    userForm.value[0].error = 'Email is invalid';
    valid = false;
  } else {
    userForm.value[0].error = '';
  }
  if (user.Username === '' || user.Username === undefined) {
    userForm.value[1].error = 'Username is required';
    valid = false;
  } else {
    userForm.value[1].error = '';
  }
  if (user.Password === '' || user.Password === undefined) {
    userForm.value[2].error = 'Password is required';
    valid = false;
  } else {
    userForm.value[2].error = '';
  }
  if (user.ConfirmPassword === '' || user.ConfirmPassword === undefined) {
    userForm.value[3].error = 'Confirm Password is required';
    valid = false;
  } else if (user.Password !== user.ConfirmPassword) {
    userForm.value[3].error = 'Passwords do not match';
    valid = false;
  } else {
    userForm.value[3].error = '';
  }

  if (valid) {
    const destination = process.env.API_HOST || ""
    console.log('User is valid');
    axios
      .post(
        `${destination}/createUser`,

        {
          email: user.Email,
          username: user.Username,
          password: user.Password,
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
        userForm.value[0].error = error.response.data;
      })
      .then((response) => {
        console.log(response);
      });
  }
}
</script>
