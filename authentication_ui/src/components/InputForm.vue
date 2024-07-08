<script setup>
import { defineProps } from 'vue';
defineProps({
  formLabel: String,
  options: Array,
  onSubmit: Function,
});
//console.log(onSubmit);
const user = {};
</script>
<template>
  <div class="bg-outline w-fit p-1 align-middle rounded-xl w-1/5">
    <h1 class="text-3xl text-center text-white">{{ formLabel }}</h1>
    <ul>
      <li class="p-2 h-16 mb-1" v-for="option in options" :key="option.id">
        <h3 class="text-black text-lg">{{ option.label }}</h3>
        <input
          class="text-sm p-1 w-full rounded-xl border-1 border-primary"
          :type="option.type || 'text'"
          v-model="user[option.label]"
          :placeholder="option.label" />
        <p class="ml-2 text-xs text-red-600">{{ option.error }}</p>
      </li>
    </ul>
    <h2
      class="text-center text-pop text-xl p-1 mt-4 rounded-xl bg-primary cursor-pointer w-full text-center"
      @click="
        console.log(options);
        onSubmit(user);
      ">
      submit
    </h2>
  </div>
</template>
<style scoped></style>
