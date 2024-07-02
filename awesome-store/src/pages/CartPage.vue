<template>
  <q-page>
    <h5 class="q-mx-lg">Your shopping cart</h5>
    <div class="row q-px-lg q-pb-lg">
      <q-card class="col-7 bg-amber-1">
        <q-card-section class="text-h5">
          Cart Items
          <span class="text-grey-7">
            ({{ store.itemsCount() }})
          </span>
        </q-card-section>
        <q-scroll-area
        style="height: 28rem; width:100%">
          <div
          v-for="product in cartItems"
          :key="product.id"
          class="row bg-white no-wrap q-ma-md q-pa-sm shadow-5">
            <q-img
            :src="product.image"
            fit="contain"
            width="10rem"
            height="15rem"
            style="object-position: 50% 50%;"/>
            <q-responsive class="col">
              <q-card-section class="class-ma-md">
                <div class="text-h6 row">
                  {{ product.name }}
                  <q-space/>
                  <div class="text-green-6 text-bold">
                    ${{ product.price }}
                  </div>
                </div>
                <div class="row">
                  {{ product.short_description }}
                </div>
                <div class="row absolute-bottom-right q-ma-sm">
                  <q-btn
                  text-color="black"
                  color="grey-4"
                  class="text-capitalize q-mx-sm"
                  rounded push
                  icon="delete_forever"
                  @click="removeItem(product)"/>
                  <q-btn-group rounded outline>
                    <q-btn @click="addToCart(product)" text-color="black" color="grey-4" rounded push icon="add" />
                      <div class="q-pa-sm bg-grey-3 text-bold">{{ product.quantity }}</div>
                    <q-btn @click="removeOneItem(product)" text-color="black" color="grey-4" rounded push icon="remove" />
                    </q-btn-group>
                </div>
                </q-card-section>
          </q-responsive>

          </div>
        </q-scroll-area>
      </q-card>
      <q-card class="col-5 bg-grey-4">
        will be added soon
      </q-card>
    </div>
    <div class="q-mx-md">
      <h5>Check these products:</h5>
      <products-carousel @response="(id) => addToCart(products[id-1])" :products="products"/>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useCartStore } from 'src/stores/cart';
import { Product } from 'src/types/Product';
import ProductsCarousel from 'src/components/ProductsCarousel.vue';

const store = useCartStore()
const cartItems = store.cartItems
function addToCart(product: Product){
  store.addToCart(product)
  console.log(product)
}

function removeItem(product: Product){
    store.removeFromCart(product)
}

function removeOneItem(product: Product){
  store.removeOneItem(product)
}

const products: Array<Product>= [
  {
    id: 1, name: 'product1', price: 290, image: 'src/assets/p1.jpg', short_description: 'Some awesome clothing', full_description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON', quantity: 0
  },
  {
    id: 2, name: 'product2', price: 154, image: 'src/assets/p2.jpg', short_description: 'Some awesome clothing', full_description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON', quantity: 0
  },
  {
    id: 3, name: 'product3', price: 240, image: 'src/assets/p3.jpg', short_description: 'Some awesome clothing', full_description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON', quantity: 0
  },
  {
    id: 4, name: 'product4', price: 100, image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg', short_description: 'Some awesome clothing', full_description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON', quantity: 0
  },
  {
    id: 5, name: 'product5', price: 190, image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg', short_description: 'Some awesome clothing', full_description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON', quantity: 0
  },
  {
    id: 6, name: 'product6', price: 240, image: 'src/assets/p6.jpg', short_description: 'Some awesome clothing', full_description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON', quantity: 0
  },
  {
    id: 7, name: 'product7', price: 240, image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg', short_description: 'Some awesome clothing', full_description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON', quantity: 0
  },
]
</script>

