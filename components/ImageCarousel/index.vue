<template>
  <v-row>
    <v-col class="pb-0">
      <v-carousel
        v-model="active"
        cycle
        height="auto"
        hide-delimiters
        show-arrows-on-hover
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(img, i) in images"
          :key="i"
          :src="img"
          class="grey lighten-4"
        >
          <div class="fill-height d-flex align-end justify-end pa-3">
            <component
              :is="dealTypeIcon"
              v-if="dealTypeIcon"
              :width="$vuetify.breakpoint.xsOnly ? 30 : 40"
              :height="$vuetify.breakpoint.xsOnly ? 30 : 40"
            />
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <slot />
    <v-col cols="12" class="carousel-items">
      <v-img
        v-for="(img, i) in images"
        :key="`detail-${i}`"
        :src="img"
        @click="setImage(i)"
      >
        <v-overlay v-if="active !== i" role="button" absolute opacity="0.4" />
      </v-img>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
