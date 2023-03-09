<template>
  <button :type="type || 'button'">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import './BaseButton.css';

interface Props extends Partial<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
}

defineProps<Props>();
</script>
