<script setup>
import ProductListItem from './ProductListItem.vue'
import { useShoppingStore } from '../stores'

const data = useShoppingStore();
</script>

<template>
<div className='product-div'>
    <h1 class="-title">Pick a device, Style it to suit your needs</h1>
    <div>
        <div class="laptop-display">            
            <ProductListItem class="laptop-d" v-for="product in data.products" 
            :key="product.id" :product="product" />
        </div>
    </div>
</div>
</template>

<style scoped>
.product-div {
    text-align: left;
}
.-title {
    font-size: 32px;
    width: 80%;
    margin: 6rem auto 0;
    text-align: center
}

/* Laptop screens */
@media screen and (min-width:1200px){ 
    * {
    width: 95%;
    margin: 0 auto;
    }
    .laptop-display {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .laptop-d {
        width: 85%;
    }
}

/* Monitor screens */
@media screen and (min-width:1600px){
    * {
        width: 100%;
        margin: 0 auto;
    }
    .laptop-display {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

</style>