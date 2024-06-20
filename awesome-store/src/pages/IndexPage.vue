<template>
  <q-page>
    <div class="row q-ma-md">
      <q-card class="col-4 q-mx-lg q-my-sm bg-grey-6">
        <div class="row items-center justify-center">
          <q-card-section class="text-h6 q-mt-lg text-grey-12">Check our awesome products!</q-card-section>
          <q-card-section class="text-body1 q-ma-lg text-grey-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A culpa,
            eius voluptates, reprehenderit totam, excepturi sit impedit ipsam
            quis blanditiis cum est quam! Distinctio error animi aliquid fuga!
            Excepturi, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-card-section>
          <q-btn push rounded size="lg" class="bg-amber-1 text-grey-9 text-capitalize">Shop now</q-btn>
        </div>
      </q-card>

      <q-card class="col-7 q-mx-lg q-my-sm">
        <q-img src="../assets/home1.jpg" style="height: 450px" />
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
});
</script>
