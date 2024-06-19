<template>
  <q-layout view="lHh Lpr lFf">
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
  </q-layout>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainLayout'
});
</script>
