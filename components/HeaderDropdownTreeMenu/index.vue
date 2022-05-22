<template>
  <div @mouseover="onMouseOverHandler" @mouseleave="onMouseLeaveHandler">
    <v-list class="py-0" flat dense>
      <v-list-item
        :ripple="false"
        :to="localePath(`/${route}`)"
        :nuxt="!!route"
        class="pa-3"
      >
        <v-list-item-content>
          <v-list-item-title
            class="text-center text-h6 overflow-visible font-weight-medium
            text-capitalize grey--text text--darken-3"
            v-text="title"
          />
        </v-list-item-content>
      </v-list-item>
      <v-slide-x-transition leave-absolute>
        <header-dropdown-tree-menu-level v-if="isVisible" :items="items" />
      </v-slide-x-transition>
    </v-list>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
