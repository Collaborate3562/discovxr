<template>
  <div>
    <v-menu
      v-if="menu"
      tile
      eager
      offset-y
      open-on-hover
      nudge-left="-5"
      max-width="180"
      min-width="180"
      transition="slide-x-transition"
    >
      <template #activator="{ attrs, on }">
        <v-list class="py-0" flat dense>
          <v-list-item
            v-bind="attrs"
            :ripple="false"
            :to="localePath(`/${route}`)"
            :nuxt="!!route"
            class="pa-3"
            v-on="on"
          >
            <v-list-item-content>
              <v-list-item-title
                class="text-center text-h6 overflow-visible font-weight-medium
                text-capitalize grey--text text--darken-3"
                v-text="title"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
      <v-list class="py-0">
        <div v-for="(item, i) in items" :key="item.route">
          <v-divider v-if="i" />
          <v-list-item :to="localePath(`/${item.route}`)" nuxt dense ripple>
            <v-list-item-content>
              <v-list-item-title v-text="item.text" />
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-menu>
    <v-list v-else class="py-0" flat dense>
      <v-list-item
        :ripple="false"
        :to="route ? localePath(`/${route}`) : null"
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
    </v-list>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
