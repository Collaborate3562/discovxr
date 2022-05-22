<template>
  <v-card tile outlined>
    <v-card-title>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="9">
          <slot name="title" />
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="9">
          <slot />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
