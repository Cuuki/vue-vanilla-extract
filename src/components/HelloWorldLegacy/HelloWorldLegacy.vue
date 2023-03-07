<template>
  <div class="hello">
    <h1 :class="[messageStyle, messageSpacingStyle]">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
        :class="linkStyle"
        >vue-cli documentation</a
      >.
    </p>
    <h3 :class="headingStyle">Installed CLI Plugins</h3>
    <ul :class="listStyle">
      <li :class="listItemStyle">
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >babel</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >typescript</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >eslint</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >unit-jest</a
        >
      </li>
    </ul>
    <h3 :class="headingStyle">Essential Links</h3>
    <ul :class="listStyle">
      <li :class="listItemStyle">
        <a
          href="https://vuejs.org"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >Core Docs</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://forum.vuejs.org"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >Forum</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://chat.vuejs.org"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >Community Chat</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >Twitter</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://news.vuejs.org"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >News</a
        >
      </li>
    </ul>
    <h3 :class="headingStyle">Ecosystem</h3>
    <ul :class="listStyle">
      <li :class="listItemStyle">
        <a
          href="https://router.vuejs.org"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >vue-router</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://vuex.vuejs.org"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >vuex</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >vue-devtools</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://vue-loader.vuejs.org"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >vue-loader</a
        >
      </li>
      <li :class="listItemStyle">
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          :class="linkStyle"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import type { SpaceScaleVariant } from '../../types/theme';
import { isSpaceScaleVariant } from '../../utils/theme';
import { marginVariants } from '../../styles/variants.css';
import {
  headingStyle,
  linkStyle,
  listItemStyle,
  listStyle,
  messageStyle,
} from './HelloWorldLegacy.css';

export default defineComponent({
  name: 'HelloWorldLegacy',
  props: {
    msg: {
      type: String,
      required: true,
    },
    msgSpacing: {
      type: Number as PropType<SpaceScaleVariant>,
      default: 3,
      validator: (spacing) => isSpaceScaleVariant(spacing),
    },
  },
  setup(props: { msg: string; msgSpacing: SpaceScaleVariant }) {
    const messageSpacingStyle = computed(
      () => marginVariants[props.msgSpacing] || 3
    );

    return {
      messageStyle,
      messageSpacingStyle,
      headingStyle,
      listStyle,
      listItemStyle,
      linkStyle,
    };
  },
});
</script>
