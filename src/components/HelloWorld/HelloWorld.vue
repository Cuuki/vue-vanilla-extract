<template>
  <BaseHeading :class="[messageSpacingStyle]" level="1"
    >{{ title }}
  </BaseHeading>

  <div :class="[cardClasses]">
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
  <p :class="[readDocsTextClasses]">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<script setup lang="ts">
import type { SpaceScaleVariant } from '../../types/theme';
import { computed, ref } from 'vue';
import { cardClasses, readDocsTextClasses } from './HelloWorld.css';
import { mbVariantClasses } from '../../styles/variants.css';
import CounterIncrementButton from '../CounterIncrementButton/CounterIncrementButton.vue';
import BaseHeading from '../BaseHeading/BaseHeading.vue';
import BaseLink from '../BaseLink/BaseLink.vue';

const props = defineProps<{
  title: string;
  titleMb: SpaceScaleVariant;
}>();

const messageSpacingStyle = computed(
  () => mbVariantClasses[props.titleMb || '3']
);

const count = ref(0);
</script>
