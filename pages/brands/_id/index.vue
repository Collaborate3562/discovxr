<template>
  <v-row>
    <v-col cols="12">
      <popular-list-block :prefix="`/brands/${$route.params.id}/`">
        <template #title>
          {{ $tc('BRAND.TITLE', 0) }}
        </template>
      </popular-list-block>
    </v-col>
    <v-col cols="12">
      <h1 class="grey--text text--darken-2" v-text="$tc('BRAND.TITLE', 1)" />
    </v-col>
    <v-col cols="12">
      Brands / {{ $route.params.id }}
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
