<template>
  <q-page>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      infinite
      :autoplay="autoplay"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      control-color="grey-9"
      navigation
      arrows
      class="bg-amber-1"
    >
<!--1st home card-->
      <q-carousel-slide :name="1" img-src="../assets/home1.jpg">
        <h2 class="text-amber-1 q-ma-sm">Check our awesome products!</h2>
        <h5 class="text-amber-1 q-ma-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Tempore ea molestias nam nobis dicta. Maiores, ex quibusdam!<br />
          Culpa corporis libero inventore enim.
        </h5>
        <q-btn
          push
          rounded
          size="lg"
          class="bg-amber-1 text-grey-9 text-capitalize q-ml-lg">Shop now</q-btn>
      </q-carousel-slide>
<!--2nd home card-->
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="col-7">
            <q-img src="../assets/home2.jpg" class="fit" />
          </q-card>

          <q-card class="col-5 bg-grey-6 q-py-md">
            <div class="row items-center justify-center">
              <q-card-section class="text-h6 q-mt-md text-grey-12">Check our awesome products!</q-card-section>
              <q-card-section class="text-body1 q-ma-lg text-grey-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                culpa, eius voluptates, reprehenderit totam, excepturi sit
                impedit ipsam quis blanditiis cum est quam! Distinctio error
                animi aliquid fuga! Excepturi, quod. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </q-card-section>
              <q-btn
                push
                rounded
                size="lg"
                class="bg-amber-1 text-grey-9 text-capitalize q-mb-sm">Shop now</q-btn>
            </div>
          </q-card>
        </div>
      </q-carousel-slide>
<!--3rd home card-->
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-card class="col-6 q-py-sm bg-grey-6">
            <div class="row items-center justify-center">
              <q-card-section class="text-h6 q-mt-lg text-grey-12">Check our awesome products!</q-card-section>
              <q-card-section class="text-body1 q-ma-lg text-grey-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                culpa, eius voluptates, reprehenderit totam, excepturi sit
                impedit ipsam quis blanditiis cum est quam! Distinctio error
                animi aliquid fuga! Excepturi, quod. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </q-card-section>
              <q-btn
                push
                rounded
                size="lg"
                class="bg-amber-1 text-grey-9 text-capitalize q-mb-sm">Shop now</q-btn>
            </div>
          </q-card>

          <q-card class="col-6">
            <q-img src="../assets/home3.jpg" class="fit" />
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <products-carousel @response="(id) => addToCart(products[id-1])" :products="products"/>
  </q-page>
</template>

<script setup lang="ts">
import ProductsCarousel from 'src/components/ProductsCarousel.vue';
import { ref } from 'vue';
import { Product } from 'src/types/Product';
import { useCartStore } from 'src/stores/cart';
const slide = ref(1);
const autoplay = ref(true);
const store = useCartStore()
function addToCart(product: Product){
  store.addToCart(product)
  console.log(product)
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
