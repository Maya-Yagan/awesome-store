<template>
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    control-color="amber-1"
    padding
    arrows
    class="bg-grey-9 shadow-2 rounded-borders q-pa-md q-my-md"
  >
    <q-carousel-slide :name="1" class="column no-wrap">
      <div
        class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
      >
      <product-card image="src/assets/p6.jpg"/>
      <product-card image="src/assets/p1.jpg"/>
      <product-card image="src/assets/p3.jpg"/>
      <product-card image="src/assets/p4.jpg"/>
      <product-card image="src/assets/p5.jpg"/>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" class="column no-wrap">
      <div
        class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
      >
      <product-card image="src/assets/p4.jpg"/>
      <product-card image="src/assets/p4.jpg"/>
      <product-card image="src/assets/p4.jpg"/>
      <product-card image="src/assets/p4.jpg"/>
      <product-card image="src/assets/p4.jpg"/>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from 'src/components/ProductCard.vue'
   const slide = ref(1)
</script>
