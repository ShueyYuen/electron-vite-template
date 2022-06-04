<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import AppTitle from './components/AppTitle.vue';

const isElectron = !!window.electronAPI;
const platform = window.electronAPI?.platform;
</script>

<template>
  <AppTitle v-if="isElectron" title="ElectronVite"></AppTitle>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="`Hello Vue 3 + TypeScript + Vite in ${platform}`" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
