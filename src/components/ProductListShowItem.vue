
<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';


import { useShoppingStore } from '../stores'
const data = useShoppingStore();

const route = useRoute()
const position = route.params.id

const activeData = data.products[position]

let name = activeData.name
let price = activeData.price
let prices = activeData.prices
let battery = activeData.battery
let size = activeData.size
let sizes = activeData.sizes
let storage = activeData.storage

let realPrice = ref(activeData.prices[0])
let activeStorage = ref(activeData.storage[0].cost)
let realSize = ref(size)
let realStorage = ref(activeData.storage[0].stores)

let activeSizeBtn = ref(size)
let activeStorageBtn = ref(activeData.storage[0].stores)

const sizeCheck = () => {
  if(sizes !== null){
    return 'Choose between 6.1", or 6.7" screen'
  }
  else {
    return 'Only 1 size is available for this product'
  }
}

const changeStorage = (number) => {  
  realPrice.value = realPrice.value - activeStorage.value
  activeStorage.value = 0
  activeStorage.value = storage[number - 1].cost
  realStorage.value = storage[number - 1].stores
  realPrice.value = realPrice.value + activeStorage.value

  activeStorageBtn.value = storage[number - 1].stores

  }
const updateStorage = () => {
  return activeStorage.value
}

const updateSize = (size) => {

  let index = sizes.indexOf(size)
  realPrice.value = prices[index]

  realPrice.value += updateStorage()

  activeSizeBtn.value = sizes[index]
  realSize.value = sizes[index]
}

let sizePar = sizeCheck()

</script>

<template>
   <div class="main">
    <div class="laptop-flex">
      <img :src="data.products[position].image" alt="">
      <div class="laptop-space">
        <h3 class="sub-head">{{name}}</h3>
        <p>The {{name}} has a great battery lasting up to {{battery}} hours! {{sizePar}}. With {{storage.length}} size SSD storage options!</p>
      </div>
    </div>
    <h1 class="custom-h1">Customise Your {{name}}!</h1>
    <div v-if="sizes !== null">
      <h3>Select Size</h3>
      <div class="flex">
        <div v-for="s in sizes">
          <button @click="() => updateSize(s)" :class="{active: activeSizeBtn == s}" class="size-btn">{{s}}" inch</button>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>Size</h3>
      <button class="size-btn active">{{size}}" inch</button>
    </div>
    <h3 class="storage-h3">Select Storage Plan</h3>
    <button v-for="item in storage" :class="{active: activeStorageBtn == item.stores}" class="btn" @click="() => changeStorage(item.num)">
      {{item.stores}}
    </button>
    
    <div class="order-border">
      <h2 class="order-h2">Order</h2>
      <p>{{ name }}</p>
      <p>{{ realSize }}" size</p>
      <p>{{ realStorage }} storage</p>
      <p>Up to {{battery}} hours of battery life</p>
    </div>
    <h2 class="order-h2">Price = £{{realPrice}}</h2>
    <h2 class="order-h2">£{{ (realPrice / 12).toFixed(2) }}/mo based on 12mo</h2>
    
    <button 
    @click="data.addToCart(activeData)"
    class="-btn">
    <i class="bi bi-cart-check"></i> Add To Cart
    </button>
  </div>
</template>

<style scoped>
* {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.main {
  width: 90%;
  margin: 4rem auto;
}

.flex {
  display: flex;
}

.flex div {
  width: 50%;
}

p {
  font-size: 20px;
}

.size-btn {
  width: 100%;
  height: 40px;
  font-size: 20px;
  border: none
}

.custom-h1 {
  text-align: center;
  margin: 3rem 0 2rem;
}

.storage-h3 {
  margin-top: 1.5rem;
}

.btn {
  display: block;
  width: 100%;
  margin: 1rem auto;
  border-radius: 6px;
  border: none;
  font-size: 24px;
  height: 54px;
  background-color: #ddd;
}

.active {
  background: linear-gradient(180deg, #4B91F7 0%, #4284ff 100%);
  color: #fff;
  border: none;
}

img {
  width: 300px;
  height: 360px;
  margin-bottom: 2rem;
}

.order-h2 {
  margin-left: 0;
  margin-top: 0;
}

h2 {
  margin-top: 3rem;
  font-size: 28px;
  margin-left: 9px;
}
h3 {
  font-size: 24px;
  margin-bottom: 12px;
}

.order-border {
  border-radius: 12px;
  margin: 3rem 0;
  padding: 1rem 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.order-border * {
  margin-left: 16px;
}
.-btn {
  background-color: rgb(59 130 246);
  color: white;
  margin: 1rem 0;
  border: none;
  width: 100%;
  height: 44px;
  font-size: 24px;
  border-radius: 24px;
}

/* Small iPad View */
@media screen and (min-width: 600px){
  * {
    justify-content: center;
  }  
  .main {
    width: 70%;
    margin: 6rem auto 6rem;
  }
  img {
    width: 280px;
    margin: 1rem 0;
    height: 400px;
  }
  .sub-head {
    font-size: 36px;
  }
  .order-h2 {
    font-size: 32px;
  }
  p {
    font-size: 24px
  }
  .-btn {
    width: 100%;
    height: 48px;
    font-size: 28px;
  }
}

/* Large iPad Screens (iPad Pro) */
@media screen and (min-width:960px) {
.main {
  width: 60%;
  margin: 6rem auto 6rem;
}

.laptop-flex {
  display: flex;
}
.laptop-space {
  padding-left: 16px;
  margin: 4rem 0 0;
  width: 100%;
}
.sub-head {
  font-size: 40px;
}
.laptop-space p {
  font-size: 26px;
}
}
</style>