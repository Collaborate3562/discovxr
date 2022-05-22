<template>
  <v-card
    width="200"
    height="409"
    max-height="409"
    elevation="10"
    tile
    class="dropdown-tree-menu"
  >
    <v-card-text class="pa-0 fill-height">
      <v-list class="py-0 overflow-y-auto fill-height">
        <div
          v-for="(item, i) in items"
          :key="item.route"
          @mouseover="onMouseOverHandler(i)"
          @mouseleave="onMouseLeaveHandler(i)"
        >
          <v-list-item
            :class="{ 'pr-2': item.children }"
            :to="localePath(`/${item.route}`)"
            nuxt
            dense
            ripple
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.text" />
            </v-list-item-content>
            <v-list-item-icon v-if="item.children">
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider />
          <v-slide-x-transition leave-absolute>
            <header-dropdown-tree-menu-level
              v-if="visibilityMap.get(i).value && item.children"
              :items="item.children"
              class="level"
            />
          </v-slide-x-transition>
        </div>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
