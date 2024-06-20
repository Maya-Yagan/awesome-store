<template>
  <q-layout view="lHh Lpr lfSf">
    <q-header elevated class="text-white bg-black q-py-md">
      <q-toolbar >
        <q-toolbar-title class="q-mx-sm">
          Awesome Store
        </q-toolbar-title>
      <q-btn class="q-mx-sm text-capitalize" stretch flat label="Categories" />
      <q-btn class="q-mx-sm text-capitalize" stretch flat label="My Account" />
      <q-btn class="q-mx-sm text-capitalize" stretch flat label="Shopping Cart" />
      <q-btn class="q-mx-sm text-capitalize" stretch flat label="Sign in/Sign up" />
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
defineOptions({
  name: 'MainLayout'
});
</script>
