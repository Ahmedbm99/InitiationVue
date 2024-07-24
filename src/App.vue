<template>
  <div id="app">
    <Header />
    <AnimalList />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AnimalList from './components/AnimalList.vue';
import {  onMounted } from 'vue';

onMounted(() => {
    console.log("Header component mounted");
  });
</script>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
