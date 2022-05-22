<template>
  <v-menu
    v-model="menu"
    eager
    offset-y
    nudge-bottom="7"
    transition="slide-x-transition"
  >
    <template #activator="{ attrs, on }">
      <v-btn
        :color="myPageAction"
        v-bind="attrs"
        elevation="0"
        class="white--text"
        block
        v-on="on"
      >
        <slot />
        <v-icon right :class="{ 'mdi-rotate-180': menu }">
          mdi-chevron-down
        </v-icon>
      </v-btn>
    </template>
    <v-list class="py-0">
      <v-list-item-group v-model="selected" :color="lightRed">
        <template v-for="(item, i) in list">
          <v-divider v-if="i" :key="`divider-${i}`" />
          <v-list-item :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.text" />
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-scale-transition leave-absolute>
          <app-empty-data
            v-if="!list.length"
            max-width="100"
            src="/images/empty.png"
          />
        </v-scale-transition>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
