<script setup>
import { useShoppingStore } from '../stores'
const data = useShoppingStore();

import OthersView from './OthersView.vue';
</script>

<template>
  <main>
    <div class="title-section">
      <div class="pt-8 m-auto">
        <h1 class="t-h1">The Industry Leading Service, Support, Prices.</h1>
        <h2 class="title">Find A Better Deal? We Will Match It!</h2>
      </div>
      <div class="mt-8">
        <img class="img" src="../images/iphone.png" alt="phone image">
      </div>
    </div>
    <div class="laptop-flex mb-12">
      <div class="mt-8" v-for="service in data.services">
        <img class="img-2" :src="service.imgLink" alt="">
        <h1 class="text-3xl mt-2 mb-2">{{service.title}}</h1>
        <p class="service-p">{{service.message}}</p>
      </div>
    </div>
    <OthersView></OthersView>
    <div class="laptop-flex pb-16">
      <div class="mt-8" v-for="service in data.services2">
        <img class="img-2" :src="service.imgLink" alt="">
        <h1 class="text-3xl mt-2 mb-2">{{service.title}}</h1>
        <p class="service-p">{{service.message}}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.title-section {
  height: 28rem;
  color: #000;
  border-bottom-left-radius: 30% 30%;
  border-bottom-right-radius: 30% 30%;
  padding: 0;
  margin-bottom: 16rem;
  background-color: rgb(125 211 252);
  padding-top: 4rem;
}
.t-h1 {
  font-size: 32px;
  width: 90%;
  margin: 2rem auto;
}
.title {
  width: 90%;
  margin: 2rem auto;
  font-size: 28px;
}
.service-p {
  font-size: 20px;
  width: 90%;
  margin: 0 auto;
}

div {
  text-align: center;
}

.img {
  width: 240px;
  margin-top: 2rem;
}
.img-2 {
  width: 100px;
  margin: 1rem 0;
}

.title-h1 {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.title-img {
  border-radius: 24px;
  width: 60%;
  height: 240px;
  transform: rotate(0deg);
}

.service-p {
  width: 80%;
  margin: 0 auto 4rem;
  margin-top: 10px;
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.service-img {
  width: 30%;
  height: 80px;
}

.service-h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  
  margin: 4px 0;
}

/* Small iPad screens (iPad Mini) */
@media screen and (min-width:760px) {  
  .title-section {
    height: 24rem;
  }
  .service-p {
    width: 60%;
  }
  .service-img {
    width: 20%;
    height: 20%;
    max-width: 160px;
    max-height: 180px;
  }
}

/* Large iPad screens (iPad Pro) */
@media screen and (min-width:960px) {  
  .title-section {
    height: 24rem;
    margin-bottom: 16rem;
  }
  .service-p {
    width: 60%;
  }
}

/* Small Laptop View */
@media screen and (min-width: 1200px){
  .laptop-flex {
    display: flex;
  } 
  .title-section {
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 50% 100%;
    height: 24rem;
    margin-bottom: 8rem;
    display: flex;
  }
  .title-section div {
    width: 50%;
  }
  .t-h1 {
    width: 60%;
    font-size: 36px;
  }
  .img {
    width: 280px;
    height: 260px;
  }
  .service-p {
    width: 80%;
  }  
}

</style>