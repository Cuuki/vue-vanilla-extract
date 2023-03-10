<template>
  <a :href="href" :class="[linkClasses]">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { linkClasses } from './BaseLink.css';

interface Props extends Partial<HTMLLinkElement> {
  href: string;
}

defineProps<Props>();
</script>
