<template>
  <v-row class="my-0">
    <v-col v-for="item in list" :key="item[0]" cols="12" md="6" lg>
      <h2
        class="mb-3 text-h6 white--text text-uppercase font-weight-medium pl-4"
        v-text="$t(item[1].title)"
      />
      <v-list dense color="transparent" subheader min-width="200">
        <v-list-item
          v-for="(child, i) in item[1].items"
          :key="child.route + item[0] + i"
          :to="localePath(child.route)"
          nuxt
          ripple
          class="grey--text text--darken-1"
        >
          <v-list-item-content>
            <v-list-item-title
              class="text-body-1 text-truncate"
              v-text="$t(child.text)"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
