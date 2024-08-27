<script setup>
    import { useShoppingStore } from '../stores'
    const data = useShoppingStore();
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light nav-color">
        <div class="container-fluid">
            <router-link class="navbar-brand nav-title text-black" to="/">ConnextWave</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link text-black" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/about">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/devices">Devices</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/bundles">Bundles</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/cart"><i class="bi bi-cart-check"></i> ({{data.countCartItems}})</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-color {
    background-color: rgb(125 211 252);
}
.nav-item {
    font-size: 20px;
}
.nav-title {
    font-size: 32px;
    padding-right: 40px;
}

</style>