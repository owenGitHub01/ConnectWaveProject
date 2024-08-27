<script setup>
import { useShoppingStore } from '../stores'
import BundleListItem from './BundleListItem.vue';

const data = useShoppingStore();
</script>

<template>
    <div className='product-div'>
        <h1 class="-title">Save A Bundle, On A Bundle!</h1>
        <div class="laptop-display">
            <BundleListItem class="laptop-d" v-for="bundle in data.bundles" 
            :key="bundle.name" :bundle="bundle" />
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
    .laptop-display {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .laptop-d {
        width: 85%;
    }
}

</style>