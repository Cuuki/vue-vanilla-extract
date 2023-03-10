<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" :class="[logoClasses]" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img
        src="./assets/vue.svg"
        :class="[logoClasses, logoVueClasses]"
        alt="Vue logo"
      />
    </a>
  </div>
  <HelloWorld title="Vite + Vue" title-mb="4" />
</template>

<script setup lang="ts">
import { logoClasses, logoVueClasses } from './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld.vue';
</script>
