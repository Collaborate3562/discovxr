<template>
  <v-navigation-drawer v-model="isOpen" app temporary>
    <v-list v-for="listItem in list" :key="listItem[0]" dense class="py-0">
      <template v-if="listItem[1].value.title">
        <v-list-item class="grey lighten-4 grey--text text--darken-2">
          <v-list-item-content>
            <v-list-item-title
              class="text-body-1 font-weight-bold overflow-visible"
              v-text="listItem[1].value.title"
            />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
      <template v-for="(item, i) in listItem[1].value.items">
        <v-list-item
          :key="i"
          class="pl-5"
          nuxt
          exact
          :to="localePath(item.route)"
        >
          <v-list-item-content>
            <v-list-item-subtitle
              class="text-body-2 grey--text text--darken-2 font-weight-normal"
              v-text="item.text"
            />
          </v-list-item-content>
          <v-list-item-icon class="my-0 align-self-center">
            <app-badge
              :content="item.state.content"
              :color="lightRed"
              position-none
              class="ml-2"
            />
          </v-list-item-icon>
        </v-list-item>
        <v-divider :key="`divider-${i}`" />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
