<template>
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    control-color="grey-9"
    padding
    arrows
    class="bg-amber-1 shadow-2 rounded-borders q-pa-md"
  >
    <q-carousel-slide :name="1" class="column no-wrap">
      <div
        class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
      >
      <product-card
      v-for="product in props.products"
      :key="product.id"
      @response="(id) => emit('response', id)"
      :product="product"/>
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" class="column no-wrap">
      <div
        class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
      >
      <product-card
      v-for="product in props.products"
      :key="product.id"
      @response="(id) => emit('response', id)"
      :product="product"/>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from 'src/components/ProductCard.vue'
import { Product } from 'src/types/Product';
const slide = ref(1)
const emit = defineEmits(['response'])
const props = defineProps<{
  products : Array<Product>
}>()
</script>
