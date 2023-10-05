<script setup lang="ts">
import { useStorage } from '@vueuse/core';
const storedValue = useStorage('storedValue', 'Change me to update localStorage');
</script>

<template>
  <div style="width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
    <input type="text" v-model="storedValue" style="width: 60%; padding: 20px; text-align: center; font-size: 20px; border: solid 2px #eee; border-radius: 20px; cursor: pointer;" />
  </div>
</template>
