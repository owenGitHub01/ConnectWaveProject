<script setup>
    import { useShoppingStore } from '../stores'
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    });
    const data = useShoppingStore();
    console.log(name)
</script>

<template>
    <div class="card-div">
        <div class="item-flex">
            <img :src="product.image" class="target-img" alt="..." />
            <div class="card-body item-space">
                <img src="../Images/full-battery.png" alt="" class="-img">
                <p>{{ product.battery }} Hour Battery Life</p>
                <img :src="product.image2" alt="" class="-img">
                <p>{{product.service}}</p>
                <p>6.1 inch screen</p>
            </div>
        </div>
        <h3 class="-title">{{product.name}}</h3>
        <h3 class="-bold">Prices start from £{{product.price}}</h3>
        <button 
            @click="data.addToCart(product)"
            class="-btn">
            <i class="bi bi-cart-check"></i> Add To Cart
        </button>
        <button class="-btn">
        <router-link name="top" class="-btn2" :to="{name: 'ProductDetails', params: {id: product.id - 1} }">View</router-link>
        </button>
    </div>
</template>

<style scoped>
.card-div {
    width: 90%;
    border-radius: 12px;
    margin: 6rem auto;
}
h3 {
    margin: .5rem;
}
.-title {
    font-size: 32px;
}
.-bold {
    font-weight: bold
}

.target-img{
    width: 55%;
    height: 300px;
    margin: 0 auto;
}
.-btn {
    background-color: rgb(59 130 246);
    color: white;
    margin: 1rem 8px;
    border: none;
    width: 45%;
    height: 44px;
    font-size: 20px;
    border-radius: 24px;
}
.item-flex {
    display: flex;
    text-align: left;
}
.-img {
    width: 40px;
    display: inline-block;
    margin: .5rem 0 0;
}
.item-space {
    margin-top: 2rem;
    margin-left: 1rem;
}

p {
    margin-bottom: 1.5rem;
}
.-btn2 {
    color: white;
    text-decoration: none;
    display: inline-block;
    width: 100%;
}

/* Small iPad screens (iPad Mini) */
@media screen and (min-width:760px) {
    .card-div {
        width: 80%;
    }
    h3 {
        margin: 1rem;
    }    
    .target-img{
        width: 55%;
        height: 360px
    }
    .-btn {
        font-size: 24px;
    }
    .-img {
        width: 48px;
        margin: .5rem 0 0;
    }    
    p {
        font-size: 20px;
    }
}

/* Large iPad screens (iPad Pro) */
@media screen and (min-width:960px){
    .card-div {
        width: 70%;
    }

    .target-img{
        width: 55%;
        height: 320px;
        margin: 0 auto;
    }
}
</style>