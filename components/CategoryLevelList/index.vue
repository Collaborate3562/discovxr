<template>
  <v-list :color="color" class="py-0">
    <v-list-item v-if="!item.children" :to="localePath(`/${item.route}`)" nuxt>
      <v-list-item-content class="pa-4">
        <v-list-item-title :class="titleClass" v-text="item.text" />
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon color="grey darken-2">
          mdi-chevron-right
        </v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-list-group v-else color="grey darken-2">
      <template #activator>
        <v-list-item-content class="pa-4">
          <v-list-item-title :class="titleClass" v-text="item.text" />
        </v-list-item-content>
      </template>
      <div v-for="(child, idx) in item.children" :key="child.route">
        <v-divider v-if="idx" class="grey lighten-3" />
        <category-level-list :item="child" />
      </div>
    </v-list-group>
  </v-list>
</template>

<script lang="ts" src="./index.script.ts"></script>
