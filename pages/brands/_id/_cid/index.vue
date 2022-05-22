<template>
  <v-row>
    <v-col cols="12">
      <h1 class="grey--text text--darken-2" v-text="$tc('BRAND.TITLE', 1)" />
    </v-col>
    <v-col cols="12">
      Brands / {{ $route.params.id }}
      <br>
      Category / {{ $route.params.cid }}
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
