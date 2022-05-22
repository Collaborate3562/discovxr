<template>
  <div>
    <v-chip-group v-model="active" column>
      <v-avatar
        v-for="color in colors"
        :key="color"
        :size="$vuetify.breakpoint.smAndDown ? 30 : 40"
      >
        <v-chip
          :ripple="false"
          :color="color"
          :value="color"
          :small="$vuetify.breakpoint.smAndDown"
          :class="{ 'pa-4 pa-md-5': active === color }"
          class="pa-md-4 rounded-circle mr-0"
        />
      </v-avatar>
    </v-chip-group>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
