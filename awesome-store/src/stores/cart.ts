import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { Product } from 'src/types/Product';
/*
    ref()s become state properties
    computed()s become getters
    function()s become actions
*/
export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<Array<Product>>([]);
  const totalPrice = ref(0);

  const getTotalPrice = computed(() => {
    return cartItems.value.reduce((accumulator, item) => {
      return (accumulator += item.price * item.quantity);
    }, 0);
  });

  function addToCart(product: Product) {
    const existingProduct = cartItems.value.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity += 1;
      cartItems.value.push(product);
    }
  }

  function removeFromCart(product: Product) {
    const index = cartItems.value.findIndex((item) => item.id === product.id);
    cartItems.value.splice(index, 1);
  }

  function removeOneItem(product: Product) {
    const index = cartItems.value.findIndex((item) => item.id === product.id);
    if (cartItems.value[index].quantity > 1)
      cartItems.value[index].quantity -= 1;
    else removeFromCart(product);
  }

  function itemsCount(): number {
    return cartItems.value.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0
    );
  }

  return {
    addToCart,
    removeFromCart,
    itemsCount,
    removeOneItem,
    cartItems,
    totalPrice,
    getTotalPrice,
  };
});
