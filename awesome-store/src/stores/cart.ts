import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { Product } from 'src/types/Product'
/*
    ref()s become state properties
    computed()s become getters
    function()s become actions
*/
export const useCartStore = defineStore('cart', () => {

  const cartItems = ref<Array<Product>>([])
  const totalPrice = ref(0)

  const getTotalPrice = computed(() => {
    return cartItems.value.reduce((accumulator, item) => {
      return accumulator += item.price;
    }, 0)
  })

  function addToCart(product : Product){
      cartItems.value.push(product);
  }

  function itemsCount() : number{
    return cartItems.value.length
  }

  return { addToCart, itemsCount, cartItems, totalPrice, getTotalPrice }
})
