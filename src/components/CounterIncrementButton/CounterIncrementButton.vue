<template>
  <BaseButton @click="updateModelValue">
    <span><slot>count is</slot> {{ modelValue }}</span>
  </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from '../BaseButton/BaseButton.vue';

const props = defineProps<{ modelValue: number }>();
const emit = defineEmits<{ (e: 'update:modelValue', value: number): void }>();

const updateModelValue = () => {
  emit('update:modelValue', props.modelValue + 1);
};
</script>
