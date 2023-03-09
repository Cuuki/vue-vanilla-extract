<template>
  <BaseHeading :level="1">{{ msg }}</BaseHeading>

  <div class="card">
    <CounterIncrementButton v-model="count" />
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <BaseLink
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
      >create-vue
    </BaseLink>
    , the official Vue + Vite starter
  </p>
  <p>
    Install
    <BaseLink href="https://github.com/johnsoncodehk/volar" target="_blank"
      >Volar
    </BaseLink>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
import './HelloWorld.css';
import { ref } from 'vue';
import CounterIncrementButton from '../CounterIncrementButton/CounterIncrementButton.vue';
import BaseHeading from '../BaseHeading/BaseHeading.vue';
import BaseLink from '../BaseLink/BaseLink.vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
