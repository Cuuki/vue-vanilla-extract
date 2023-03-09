<template>
  <a :href="href">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import './BaseLink.css';

interface Props extends Partial<HTMLLinkElement> {
  href: string;
}

defineProps<Props>();
</script>
