<template>
  <v-card tile>
    <v-card-title
      class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
      text-body-1 text-sm-h6 font-weight-medium"
    >
      <slot name="title" />
    </v-card-title>
    <v-card-text class="pa-0">
      <v-list v-if="items.length" class="py-0" dense>
        <div v-for="(item, i) in items" :key="i">
          <v-divider v-if="i" />
          <guide-level-list :item="item" />
        </div>
      </v-list>
      <v-scale-transition leave-absolute hide-on-scale>
        <app-empty-data v-if="!items.length" src="/images/empty.png" />
      </v-scale-transition>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
