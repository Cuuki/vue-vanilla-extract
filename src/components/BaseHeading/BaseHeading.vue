<template>
  <component :is="`h${level}`" :class="[headingRecipe({ level })]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { BaseHeadingVariants } from './types';
import { DEFAULT_VARIANT_LEVEL, headingRecipe } from './BaseHeading.css';

interface Props extends Partial<HTMLHeadingElement> {
  level?: BaseHeadingVariants['level'];
}

withDefaults(defineProps<Props>(), { level: DEFAULT_VARIANT_LEVEL });
</script>
