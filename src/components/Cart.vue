<template>
    <div class="row my-4 w-full">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
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
                                <td>
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
                                <td>
                                    ${{item.price}}
                                </td>
                                <td>
                                    ${{item.price * item.quantity}} 
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
                                    <span class="badge bg-danger rounded-pill">
                                        ${{ data.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }}
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

<style>
*{
    max-width: 100%;
}
    i{
        cursor: pointer;
    }
</style> 