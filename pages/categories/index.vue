<template>
  <v-row class="py-md-3 mb-sm-10 mb-lg-16" justify="end">
    <v-col cols="12">
      <h1 class="grey--text text--darken-2" v-text="$tc('CATEGORY.TITLE', 1)" />
    </v-col>
    <v-col cols="12" sm="5" md="3" class="pt-0 pt-md-3">
      <app-advanced-select solo hide-details />
    </v-col>
    <v-col cols="12" class="mt-5">
      <v-slide-y-transition leave-absolute group tag="div" class="row">
        <v-col v-for="item in items" :key="item.route" cols="12" class="pb-0">
          <v-sheet elevation="3">
            <category-level-list :item="item" />
          </v-sheet>
        </v-col>
      </v-slide-y-transition>
      <v-scale-transition leave-absolute>
        <app-empty-data v-if="!items.length" src="/images/empty.png" />
      </v-scale-transition>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
