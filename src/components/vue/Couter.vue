<script setup>
import { ref } from 'vue';
const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
const resetCounter = () => count.value = 0;
</script>

<template>
    <p>I'm a VueJS component 💚</p>
  <p>Result: {{ count }}</p>
  <button type="button" @click="decrement" class="inline-block rounded bg-green-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white">-</button>
  <button type="button" @click="increment" class="inline-block rounded bg-green-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white">+</button>
  <button type="button" @click="resetCounter" class="inline-block rounded bg-green-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white">Reset</button>
</template>