<template>
  <div class="w-full">
    <Header />
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script setup>
  import Header from './components/Header.vue'
  import FooterView from './components/FooterView.vue'
</script>


<style>
</style>