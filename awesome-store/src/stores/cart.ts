import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { Product } from 'src/types/Product';
import { auth } from 'src/boot/firebase';
import { useFirestore } from './firestore';
/*
    ref()s become state properties
    computed()s become getters
    function()s become actions
*/
export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<Product[]>([]);
  const firestore = useFirestore()

  const itemsCount = computed(() => {
    return cartItems.value.reduce(
      (accumulator, product) => accumulator + product.quantity, 0
    )
  })

  const getTotalPrice = computed(() => {
    return cartItems.value.reduce((accumulator, item) => {
      return (accumulator += item.price * item.quantity);
    }, 0);
  });

  async function addToCart(product: Product) {
    const user = auth.currentUser
    if(user && user.email){
      const existingProduct = cartItems.value.find(
        (item) => item.id === product.id
      );
      if(existingProduct){
        existingProduct.quantity += 1;
        await firestore.saveUserCartToFirestore(cartItems.value)
      }
      else{
        const userCart = await firestore.getUserCartFromFirestore(user.email)
        product.quantity += 1;
        console.log(userCart)
        userCart.push(product);
        await firestore.saveUserCartToFirestore(userCart)
        cartItems.value = userCart
      }
    }
  }

  async function removeFromCart(product: Product) {
    const index = cartItems.value.findIndex((item) => item.id === product.id);
    cartItems.value.splice(index, 1);
    try{
      await firestore.saveUserCartToFirestore(cartItems.value)
    }
    catch(error){
      console.error('Error updating FireStore', error)
    }
  }

  async function removeOneItem(product: Product) {
    const index = cartItems.value.findIndex((item) => item.id === product.id);
    if (cartItems.value[index].quantity > 1){
      cartItems.value[index].quantity -= 1;
      await firestore.saveUserCartToFirestore(cartItems.value)
    }
    else removeFromCart(product);
  }

  return {
    addToCart,
    removeFromCart,
    itemsCount,
    removeOneItem,
    cartItems,
    getTotalPrice,
  };
});
