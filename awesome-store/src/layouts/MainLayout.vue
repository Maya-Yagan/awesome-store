<template>
  <q-layout view="lHh Lpr lfSf">
    <q-header elevated class="text-white bg-black q-py-md">
      <q-toolbar >
        <q-toolbar-title to="/#" class="q-mx-sm">
          <q-btn class="text-capitalize text-h5 text-amber-1" stretch flat label="Awesome Store" to="/"/>
        </q-toolbar-title>
      <q-btn
      class="q-mx-sm text-capitalize"
      stretch flat
      label="Categories"
      to="/categories" />
      <q-btn
      class="q-mx-sm text-capitalize"
      stretch flat
      label="My Account" />
      <q-btn
      v-if="!isSignedIn"
      class="q-mx-sm text-capitalize"
      stretch flat
      label="Sign in/Sign up"
      to="/signin"/>
      <q-btn
      v-else class="q-mx-sm text-capitalize"
      stretch flat stack
      :label="userName"
      @click="signOut">
        {{ SignOut }}
      </q-btn>
      <q-btn
      class="q-mx-sm text-capitalize"
      stretch flat stack
      icon="shopping_bag"
      to="/cart">
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
import { useFirestore } from 'src/stores/firestore';
import { useUserStore } from 'src/stores/user';
import { computed, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router'
  const router = useRouter()
  const cartStore = useCartStore()
  const userStore = useUserStore()
  const firestore = useFirestore()
  const SignOut = ref('Sign Out')
  const { isSignedIn } = toRefs(userStore);
  const userName = ref(userStore.user?.firstName + ' ' + userStore.user?.lastName)
  function signOut(){
    firestore.logout().then(() => {
      console.log('logged out')
      router.push('/')
    })
  }
  const itemsCount = computed(() => cartStore.itemsCount)
  const totalPrice = computed(() => cartStore.getTotalPrice)
</script>
