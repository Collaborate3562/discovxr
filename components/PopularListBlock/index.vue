<template>
  <div>
    <h3 class="grey--text text--darken-2">
      <slot name="title" />
    </h3>
    <v-sheet :max-width="$vuetify.breakpoint.smAndDown ? null : '70%'">
      <v-chip-group :column="$vuetify.breakpoint.smAndUp" center-active>
        <v-chip
          v-for="v in 15"
          :key="v"
          :to="localePath(prefix + v)"
          exact
          label
          nuxt
          class="ma-2 ml-0"
        >
          Category {{ v }}
        </v-chip>
      </v-chip-group>
    </v-sheet>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
