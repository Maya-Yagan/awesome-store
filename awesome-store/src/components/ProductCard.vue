<template>
  <q-card flat bordered >
    <div class=" row items-center justify-center">
      <q-img width="150px" height="190px" fit="contain"  :src="props.product.image" />
    </div>
      <q-card-section>
        <div class="row no-wrap items-center q-my-sm">
          {{ props.product.name }}
        </div>
        <div class="text-subtitle1 text-green-6">
          <q-btn @click="emit('response', props.product.id)" push class="text-capitalize fit bg-amber-1 text-grey-9">Add to cart: $ {{ props.product.price }}</q-btn>
        </div>
      </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import { Product } from 'src/types/Product';
const props = defineProps<{
  product: Product
}>();
const emit = defineEmits(['response'])
</script>
