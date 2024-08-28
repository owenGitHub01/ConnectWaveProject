<template>
    <div class="-size">
        <div class="col-md-12">
            <div class="-card">
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in data.getCartItems" :key="item.id">
                                <td class="text-size">
                                    {{item.name}}
                                </td>
                                <td>                    
                                    <i 
                                        @click="data.incrementQ(item)"
                                        class="bi bi-caret-up"></i>                
                                    <span class="mx-2">
                                        {{item.quantity}}
                                    </span>                                    
                                    <i 
                                        @click="data.decrementQ(item)"
                                        class="bi bi-caret-down"></i>                              
                                </td>
                                <td class="text-size">
                                    £{{item.price}}
                                </td>
                                <td class="text-size">
                                    £{{item.price * item.quantity}} 
                                </td>
                                <td>
                                    <i 
                                        @click="data.removeFromCart(item)"
                                        class="bi bi-cart-x text-danger"></i>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td colSpan="6" class="text-center">
                                    <span class="btn-size">
                                        Total £{{ data.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script setup>
    import { useShoppingStore } from "../stores"
    const data = useShoppingStore();
</script>

<style scoped>
*{
    margin: 0 auto;
    width: 100%;
}
.-size {
    height: 70vh;
    margin: 3rem auto 0;
    width: 95%;
}
.-size th {
    margin: 0;
    padding: 0;
    width: 10px;
}
.-size td {
    margin: 0;
    padding: 0;
    width: 10px;
}
i{
    cursor: pointer;
}
.text-size {
    font-size: 18px;
}
.btn-size {
    justify-content: center;
    margin: auto;
    font-size: 20px;
    color: #000;
}
</style> 