<script setup>
import { useRoute } from 'vue-router';

import { useShoppingStore } from '../stores'
const data = useShoppingStore();

const route = useRoute()
const position = route.params.name
const activeData = data.bundles.filter(n => n.name == position)

let name = activeData[0].name
let bio = activeData[0].bio
let price = activeData[0].price
let type = activeData[0].devices


let type11 = "bundle"

</script>

<template>
  <div class="main">
    <h1>{{name}}</h1>
    <p class="bio">{{bio}} {{type[0].type}} and {{type[1].type}} together!</p>
  <div class="flex">
    <div v-for="item in type" :key="item.type">
      <img class="img" :src="item.image" alt="">
        <h2>{{item.type}}</h2>
        <p>Size: {{item.size}}" inch</p>
        <p>Storage: {{item.storage}}</p>
        <p>Price: £{{item.ogPrice}}</p>
    </div>
  </div>
  
  <h3 class="-price2">£{{ price }}</h3>
  <button 
  @click="data.addToCart(activeData[0].id - 1, name, price, type)"
  class="-btn">
  <i class="bi bi-cart-check"></i> Add To Cart
  </button>
</div>
  
</template>


<style scoped>

* {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  width: 90%;
  text-align: center;
  margin: .8rem auto;
}
h1 {
  font-size: 36px;
}
.main {
  margin: 4rem auto;
}
.img {
  width: 180px;
  height: 220px;
}
.flex {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
p {
  font-size: 20px;
}
.-price2 {
  font-size: 32px;
  font-weight: bold;
  margin: 2rem 0;
}

.center {
  text-align: center;
}

.-btn {
  background-color: rgb(59 130 246);
  color: white;
  border: none;
  width: 100%;
  height: 44px;
  font-size: 24px;
  border-radius: 24px;
}
 
/* Small iPad Views */
@media screen and (min-width: 760px){

  * {
    width: 70%;
  }
  .img {
    width: 240px;
    height: 300px;
  }
  p {
    font-size: 22px;
  }
  .-price2 {
    font-size: 36px;
    width: 100%;
  }
  .-btn {
    width: 80%;
    height: 48px;
    font-size: 28px;
  }
}

/* Large iPad Views */
@media screen and (min-width: 960px){
  * {
    width: 65%;
  }
  .main {
    margin: 6rem auto;
  }
  .img {
    width: 280px;
    height: 340px;
  }
  p {
    font-size: 24px;
  }
}

/* Laptop Screens */
@media screen and (min-width: 1200px){
  * {
    width: 55%;
  }
  .img {
    width: 220px;
    height: 300px;
  }
}

</style>