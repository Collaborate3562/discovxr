<template>
  <v-card tile flat>
    <v-img :src="image" alt="product image" width="100%" class="grey lighten-5">
      <v-sheet
        :color="lightRed"
        :class="{ active: sold }"
        height="100%"
        class="sold-flag d-flex align-end justify-center pb-1"
      >
        <span
          class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5
          text-uppercase font-weight-medium white--text"
          v-text="$t('USER_DETAIL.SOLD')"
        />
      </v-sheet>
    </v-img>
    <v-card-title
      class="title-line-clamp pt-2 px-0 pb-0 black--text text-caption text-sm-body-1"
      v-text="title"
    />
    <v-card-subtitle
      class="pa-0 mt-1 black--text text-caption text-sm-body-1 font-weight-bold"
      v-text="price"
    />
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
