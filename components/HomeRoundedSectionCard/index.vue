<template>
  <v-card flat min-width="100%">
    <v-img :src="img" alt="product image" class="rounded-circle" />
    <v-card-title
      class="text-center d-block pb-0 text-truncate font-weight-medium text-body-1"
      v-text="title"
    />
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
