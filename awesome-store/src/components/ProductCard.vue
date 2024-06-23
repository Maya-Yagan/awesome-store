<template>
  <q-card flat bordered >
    <div class=" row items-center justify-center">
      <q-img width="150px" height="190px" fit="contain"  :src="props.image" />
    </div>
      <q-card-section>
        <div class="row no-wrap items-center q-my-sm">
          Awesome Casual Premium
        </div>
        <div class="text-subtitle1 text-green-6">
          <q-btn push class="text-capitalize fit bg-amber-1 text-grey-9">Add to cart: $ 59.99</q-btn>
        </div>
      </q-card-section>
    </q-card>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
});
console.log(props.image + 'hello')
</script>
