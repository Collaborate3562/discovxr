<template>
  <div>
    <v-chip-group v-model="active" column>
      <v-avatar
        v-for="size in sizes"
        :key="size"
        :size="$vuetify.breakpoint.smAndDown ? 30 : 38"
        tile
        class="my-0"
      >
        <v-chip
          :value="size"
          :ripple="false"
          :small="$vuetify.breakpoint.smAndDown"
          :outlined="active !== size"
          :class="{ 'white--text': active === size }"
          class="rounded-sm ma-0 justify-center full-width"
          color="black"
          v-text="size"
        />
      </v-avatar>
    </v-chip-group>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
