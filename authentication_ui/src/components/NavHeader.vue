<script setup>
import router from "@/router/index.js";
import useWindowResize from "@/util/useWindowResize.js";
import { ref } from "vue";
const { width, height } = useWindowResize();

const extended = ref(false);
const toggleExtended = () => {
  extended.value = !extended.value;
};


</script>

<template>
  <div class="flex justify-between items-center pt-1 pr-4 nav-bar">
    <div class="flex items-center justify-center" @click="router.push({ path: '/' })">
      <img src="@/assets/img/auth0.ico" class="max-w-xs w-16" />
      <h1 class="pl-2 text-pop text-3xl">HurdLab Authentication</h1>
    </div>
    <div>
      <div v-if="width > 830" class="gap-3 flex">
        <!-- nav links -->
        <router-link to="/add-user" class="router-link-text">Add
          User</router-link>
        <router-link to="/update" class="router-link-text">Update
          User</router-link>
        <router-link to="/recover" class="router-link-text">Recover</router-link>
      </div>
      <div v-else>
        <img v-bind:src="`src/assets/icons/${extended ? 'close' : 'menu'}.svg`" class="w-14 h-full hover:contrast-75"
          @click="toggleExtended" />
        <div v-if="extended" class="absolute mobile-menu flex flex-col gap-3 bg-base_accent w-1/3 right-0 mt-3 p-4">
          <router-link @click="toggleExtended" to="/add-user" class="router-link-mobile">Add
            User</router-link>
          <router-link @click="toggleExtended" to="/update" class="router-link-mobile">Update
            User</router-link>
          <router-link @click="toggleExtended" to="/recover" class="router-link-mobile">Recover</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.router-link-active {
  @apply bg-primary;
}

.router-link-text {
  @apply rounded-xl p-1.5 text-pop text-2xl h-2/3 hover:contrast-75
}

.router-link-mobile {
  @apply rounded-xl p-1.5 text-pop text-lg h-2/3 hover:contrast-75
}

.mobile-menu {
  border-radius: 0 0 10px 10px;
}

.nav-bar {
  background: rgb(54, 65, 62);
  background: -moz-linear-gradient(45deg,
      rgba(54, 65, 62, 1) 0%,
      rgba(102, 122, 117, 1) 100%);
  background: -webkit-linear-gradient(45deg,
      rgba(54, 65, 62, 1) 0%,
      rgba(102, 122, 117, 1) 100%);
  background: linear-gradient(45deg,
      rgba(54, 65, 62, 1) 0%,
      rgba(102, 122, 117, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#36413e", endColorstr="#667a75", GradientType=1);
}
</style>
