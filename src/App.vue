<script setup lang="ts">

import NavBar from "./core/components/NavBar.vue";
import AuthorAttribution from "./core/components/AuthorAttribution.vue";
</script>

<template>
  <div class="app-shell">
    <nav-bar />
    <main>
      <router-view></router-view>
    </main>
    <footer class="app-footer"><AuthorAttribution /></footer>
  </div>
</template>

<style scoped>
.app-shell { min-height: 100dvh; display: flex; flex-direction: column; }
main {
  flex: 1;
  padding: 5rem 1rem 1rem; /* 4 (navbar) + 1 rem */
}
</style>
