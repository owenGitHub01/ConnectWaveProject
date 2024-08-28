<script setup>
import { ref } from 'vue';
import { useShoppingStore } from '../stores'
const data = useShoppingStore();

const numbers = ref([])
let num = ref()

for(let i = 0; i < 8; i++){
  do {
    num.value = Math.round(Math.random() * data.products.length)
  }
  while(numbers.value.includes(num.value))

  numbers.value.push(num.value)
}
</script>

<template>
  <div class="colour">
    <h1>You May Like</h1>
    <div class="plans">
      <div class="plan-border" v-for="n in numbers">
        <h1 class="plan-h1">{{data.products[n].name}}</h1>
        <img :src="data.products[n].image" class="img" alt="">
        <p class="plan-p">Price starts from: £{{data.products[n].price}}</p>
        <button class="plan-btn">
          <router-link name="top" class="-btn2" :to="{name: 'ProductDetails', params: {id: data.products[n].id - 1} }">View</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.colour {
  background-color: #eee;
  padding: 2rem 0;
  margin-bottom: 4rem
}

.plans {
  max-height: 580px;
  display: flex;
  overflow-x: auto;
  padding: 2rem 1rem;
  margin-bottom: 1rem;
}

h1 {
  text-align: center;
  margin-top: 2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.plan-border {
  border-radius: 12px;
  margin: 0 4px;
  min-width: 300px;
  height: auto;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
}

.plan-h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 28px;
}

.plan-p {
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.plan-btn {
  width: 80%;
  height: 44px;
  border-radius: 6px;
  border: none;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
}

.a {
  color: #fff;
  text-decoration: none;
  font-size: 22px;
}

img {
  width: 70%;
  margin: 0;
  height: 280px;
}

.-btn2 {
  color: white;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  font-size: 28px;
  padding: 0 0 8px;
}

@media screen and (min-width: 1200px){
  .plans {
    max-width: 100vw;
    overflow-x: 0;
    padding: 2rem 4rem;
    background-color: #eee;
    margin-bottom: 4rem;
  }
  .plan-border {
    border-radius: 12px;
    margin: 0 4px;
    min-width: 350px;
    max-width: 360px;
    height: auto;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
  }
  
}
</style>