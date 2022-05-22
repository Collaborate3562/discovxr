<template>
  <v-col cols="12" sm="auto" class="pt-0">
    <v-sheet :width="width" color="transparent">
      <v-chip-group active-class="grey--text" center-active>
        <v-chip
          v-for="item in list"
          :key="item.route"
          :to="localePath(`/${item.route}`)"
          nuxt
          color="grey lighten-4"
          v-text="$t(item.text)"
        />
      </v-chip-group>
    </v-sheet>
  </v-col>
</template>

<script lang="ts" src="./index.script.ts"></script>
