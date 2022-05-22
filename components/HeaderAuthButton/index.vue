<template>
  <v-col cols="12" sm="auto" class="pt-0">
    <v-row justify="end">
      <v-col cols="6" sm="auto" class="pr-1">
        <v-btn
          :to="localePath('login')"
          nuxt
          block
          width="112"
          elevation="0"
          class="text-none"
        >
          {{ $tc('HEADER.AUTH_BUTTON', 1) }}
        </v-btn>
      </v-col>
      <v-col cols="6" sm="auto" class="pl-1">
        <v-btn
          :to="localePath('signup')"
          :color="lightRed"
          nuxt
          block
          width="112"
          elevation="0"
          class="white--text text-none"
        >
          {{ $tc('HEADER.AUTH_BUTTON', 0) }}
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts" src="./index.script.ts"></script>
