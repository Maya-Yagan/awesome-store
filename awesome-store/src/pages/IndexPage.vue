<template>
  <q-page>
    <div>
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
      >
<!--1st home card-->
        <q-carousel-slide
          :name="1"
          img-src="../assets/home1.jpg"
        >
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
            class="bg-amber-1 text-grey-9 text-capitalize q-ml-lg"
            >Shop now</q-btn
          >
        </q-carousel-slide>
<!--2nd home card-->
        <q-carousel-slide :name="2" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-card class="col-7 q-my-sm">
              <q-img src="../assets/home2.jpg" class="fit" />
            </q-card>

            <q-card class="col-5 bg-grey-6 q-py-md">
              <div class="row items-center justify-center">
                <q-card-section class="text-h6 q-mt-lg text-grey-12"
                  >Check our awesome products!</q-card-section
                >
                <q-card-section class="text-body1 q-ma-lg text-grey-9">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  culpa, eius voluptates, reprehenderit totam, excepturi sit
                  impedit ipsam quis blanditiis cum est quam! Distinctio error
                  animi aliquid fuga! Excepturi, quod. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </q-card-section>
                <q-btn
                  push
                  rounded
                  size="lg"
                  class="bg-amber-1 text-grey-9 text-capitalize"
                  >Shop now</q-btn
                >
              </div>
            </q-card>
          </div>
        </q-carousel-slide>
<!--3rd home card-->
        <q-carousel-slide :name="3" class="column no-wrap">
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-card class="col-6 q-py-sm bg-grey-6">
              <div class="row items-center justify-center">
                <q-card-section class="text-h6 q-mt-lg text-grey-12"
                  >Check our awesome products!</q-card-section
                >
                <q-card-section class="text-body1 q-ma-lg text-grey-9">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  culpa, eius voluptates, reprehenderit totam, excepturi sit
                  impedit ipsam quis blanditiis cum est quam! Distinctio error
                  animi aliquid fuga! Excepturi, quod. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </q-card-section>
                <q-btn
                  push
                  rounded
                  size="lg"
                  class="bg-amber-1 text-grey-9 text-capitalize"
                  >Shop now</q-btn
                >
              </div>
            </q-card>

            <q-card class="col-6">
              <q-img src="../assets/home3.jpg" class="fit" />
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div>
      <products-carousel></products-carousel>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ProductsCarousel from 'src/components/ProductsCarousel.vue';
import { ref } from 'vue';
const slide = ref(1);
const autoplay = ref(true);
</script>
