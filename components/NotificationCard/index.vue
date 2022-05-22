<template>
  <v-list-item :class="{ 'grey lighten-4': !isRead }" light class="py-md-1">
    <v-list-item-avatar
      :size="$vuetify.breakpoint.mdAndUp ? 50 : 30"
      tile
      color="grey lighten-1 rounded-lg align-self-start mt-3"
    >
      <v-img :src="avatar" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title
        :class="{ 'grey--text text--darken-3': isRead }"
        class="text-caption text-md-body-1 message-line-clamp"
        v-text="message"
      />
      <v-list-item-subtitle class="text-caption mt-1" v-text="timestamp" />
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
