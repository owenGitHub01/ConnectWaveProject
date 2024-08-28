<script setup>
import { useShoppingStore } from '../stores'
const props = defineProps({
    bundle: {
        type: Object,
        required: true
    }
});
const data = useShoppingStore();

let type = "bundle"
</script>

<template>
    <div class="-card">
        <h2 class="-title">{{bundle.name}}</h2>
        <div class="-flex">
            <img class="-img" :src="bundle.images[0]" alt="">
            <img class="-img" :src="bundle.images[1]" alt="">
        </div>
        <h2 class="-price">{{bundle.devices[0].type}} + {{bundle.devices[1].type}}</h2>
        <div class="-flex">
            <h3 class="-price2">£{{ bundle.price }}</h3>
            <h3 class="-og-price">£{{bundle.original}}</h3>
        </div>
        <div class="-btn-div">
            <button 
            @click="data.addToCart(bundle.id - 1, bundle.name, bundle.price, type)"
            class="-btn">
            <i class="bi bi-cart-check"></i> Add To Cart
        </button>
            <button class="-btn">
                <router-link class="-btn2" :to="`/bundle/${bundle.name}`">View</router-link>
            </button>

        </div>
    </div>
</template> 

<style scoped>

* {
    text-align: center;
}

.-card {
    width: 100%;
    border-radius: 12px;
    margin: 3rem auto;
}

.-title {
    font-size: 32px;
    margin: 2rem 0;
}

.-img {
    width: 160px;
    height: 200px;
    margin: 0 auto;
}

.-flex {
    display: flex;
    width: 100%;
    margin: 1rem auto;
}

.-price2 {
    padding-left: 32px;
    padding-top: 8px;
}
.-og-price {
    text-decoration:line-through;
    color: crimson;
    padding-left: 24px;
    padding-top: 8px;
}

.btn-div {
    width: 100%;
    justify-content: space-between;
}

.-btn {
    width: 45%;
    border-radius: 12px;
    margin: 0 8px 2rem;
    color: #fff;
    height: 36px;
    border: none;
    font-size: 24px;
    background-color: rgb(59 130 246);
}
.-btn2 {
    color: white;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    font-size: 24px;
    padding: 0 0 8px;
}

/* Small iPad screens (iPad Mini) */
@media screen and (min-width:760px){
    .-card {
        width: 70%;
    }
    .-title {
        font-size: 36px;
        margin: 2rem 0 1rem;
    }    
    .-img {
        width: 240px;
        height: 280px;
    }
    .-price2 {
        font-size: 28px;
    }
    .-og-price {
        font-size: 28px;
    }
    .-btn {
        height: 40px;
        font-size: 24px;
    }
    .-btn2 {
        font-size: 24px;
      }
}

/* Large iPad screens (iPad Pro) */
@media screen and (min-width:960px){
    .-card {
        width: 60%;
    }
    .-title {
        font-size: 36px;
    }    
    .-img {
        width: 240px;
        height: 300px;
    }
}

</style>