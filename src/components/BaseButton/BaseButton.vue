<template>
  <button
    :class="[buttonRecipe({ color, size })]"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { BaseButtonVariants } from './types';
import {
  buttonRecipe,
  DEFAULT_VARIANT_COLOR,
  DEFAULT_VARIANT_SIZE,
} from './BaseButton.css';

interface Props extends Partial<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  color?: BaseButtonVariants['color'];
  size?: BaseButtonVariants['size'];
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  color: DEFAULT_VARIANT_COLOR,
  size: DEFAULT_VARIANT_SIZE
});
</script>
