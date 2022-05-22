<template>
  <v-slide-x-transition leave-absolute>
    <v-container v-if="isVisible" fluid>
      <v-row>
        <v-img :src="src" />
      </v-row>
    </v-container>
  </v-slide-x-transition>
</template>

<script lang="ts" src="./index.script.ts"></script>
