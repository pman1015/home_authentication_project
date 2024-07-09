<script setup></script>

<template>
  <div class="flex justify-between items-center pt-1 pr-4 nav-bar">
    <div class="flex items-center justify-center">
      <img src="@/assets/img/auth0.ico" class="max-w-xs w-16" />
      <h1 class="pl-2 text-pop text-3xl">HurdLab Authentication</h1>
    </div>
    <div class="gap-3 flex">
      <!-- nav links -->
      <router-link
        to="/"
        class="rounded-xl p-1.5 text-pop text-2xl h-2/3 hover:contrast-75"
        >Add User</router-link
      >
      <router-link
        to="/update"
        class="rounded-xl p-1.5 text-pop text-2xl h-2/3 hover:contrast-75"
        >Update User</router-link
      >
      <router-link
        to="/recover"
        class="rounded-xl p-1.5 text-pop text-2xl h-2/3 hover:contrast-75"
        >Recover</router-link
      >
    </div>
  </div>
</template>
<style scoped>
.router-link-active {
  @apply bg-primary;
}
.nav-bar {
  background: rgb(54, 65, 62);
  background: -moz-linear-gradient(
    45deg,
    rgba(54, 65, 62, 1) 0%,
    rgba(102, 122, 117, 1) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(54, 65, 62, 1) 0%,
    rgba(102, 122, 117, 1) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(54, 65, 62, 1) 0%,
    rgba(102, 122, 117, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#36413e",endColorstr="#667a75",GradientType=1);
}
</style>
