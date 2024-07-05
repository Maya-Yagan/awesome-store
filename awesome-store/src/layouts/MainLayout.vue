<template>
  <q-layout view="lHh Lpr lfSf">
    <q-header elevated class="text-white bg-black q-py-md">
      <q-toolbar >
        <q-toolbar-title to="/#" class="q-mx-sm">
          <q-btn class="text-capitalize text-h5 text-amber-1" stretch flat label="Awesome Store" to="/"/>
        </q-toolbar-title>
      <q-btn class="q-mx-sm text-capitalize" stretch flat label="Categories" to="/categories" />
      <q-btn class="q-mx-sm text-capitalize" stretch flat label="My Account" />
      <q-btn class="q-mx-sm text-capitalize" stretch flat label="Sign in/Sign up" to="/signin"/>
      <q-btn class="q-mx-sm text-capitalize" stretch flat stack icon="shopping_bag" to="/cart">
        <q-badge color="amber-6" floating class="text-grey-9 text-bold">{{ itemsCount }}</q-badge>
        ${{ totalPrice }}
      </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-grey-8 text-white" style="height: 70px;">
        <q-item class="items-center justify-center">Designed by&nbsp;©<a href="https://github.com/Maya-Yagan" class="text-white">Maya Yagan</a></q-item>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
  import { useCartStore } from 'src/stores/cart';
  import { computed } from 'vue';
  const store = useCartStore()
  const itemsCount = computed(() => store.itemsCount())
  const totalPrice = computed(() => store.getTotalPrice)
</script>
