<template>
  <div>
    <v-card :class="`scroll-hesh-${title}`" class="mb-5" elevation="3" tile>
      <v-card-title
        class="py-2 px-5 grey--text text--darken-2 font-weight-bold text-capitalize"
        v-text="title"
      />
    </v-card>
    <v-row
      v-for="(item, i) in items"
      :key="`row-item-${i}`"
      class="ma-0 px-2 text-body-1 black--text"
    >
      <v-col cols="5" class="py-1 text-uppercase">
        {{ item.name }}
      </v-col>
      <v-col cols="5" class="py-1 text-uppercase">
        {{ item.description }}
      </v-col>
      <v-col class="py-1 text-lovercase">
        {{ item.detail }}
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
