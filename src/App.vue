<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

import useVersionKey from '@/composables/use-version-key'
import useCounterKey from '@/composables/use-counter-key'
import useIdentifer from '@/models/version'
import useCounter from '@/models/counter'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    provide(useVersionKey, useIdentifer())
    provide(useCounterKey, useCounter())
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
