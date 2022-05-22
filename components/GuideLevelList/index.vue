<template>
  <v-list :color="color" dense class="py-0">
    <v-list-item
      v-if="!item.children"
      :to="localePath(`/${item.route}`)"
      nuxt
      class="py-1 pl-md-7"
    >
      <v-list-item-content>
        <span
          class="text-truncate text-caption text-sm-body-1"
          v-text="item.text"
        />
      </v-list-item-content>
      <v-chip
        v-if="item.count"
        small
        label
        outlined
        color="red"
        class="font-weight-bold d-flex justify-center"
        v-text="item.count"
      />
      <v-list-item-icon class="ml-1">
        <v-icon color="grey darken-2">
          mdi-chevron-right
        </v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-list-group v-else color="grey darken-2">
      <template #activator>
        <v-list-item-content class="py-3 pl-md-3">
          <span
            class="text-truncate text-caption text-sm-body-1"
            v-text="item.text"
          />
        </v-list-item-content>
        <v-chip
          v-if="item.count"
          small
          label
          outlined
          color="red"
          class="font-weight-bold d-flex justify-center"
          v-text="item.count"
        />
      </template>
      <div v-for="(child, idx) in item.children" :key="child.route">
        <v-divider v-if="idx" class="grey lighten-3" />
        <guide-level-list :item="child" />
      </div>
    </v-list-group>
  </v-list>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
