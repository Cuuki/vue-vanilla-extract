<template>
  <component :is="`h${level && level <= 6 ? level : 2}`">
    <slot />
  </component>
</template>

<script setup lang="ts">
import './BaseHeading.css';

interface Props extends Partial<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

defineProps<Props>();
</script>
