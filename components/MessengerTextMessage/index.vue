<template>
  <v-col :class="{ 'justify-end': isMe }" cols="12" class="d-flex pb-0">
    <v-card
      :max-width="$vuetify.breakpoint.mdAndUp ? '70%' : '90%'"
      :color="color"
      flat
      rounded="lg"
    >
      <v-card-text class="pa-3 grey--text text--darken-3">
        <pre class="text-body-2 text-md-body-1 message-text" v-text="message" />
        <v-card-subtitle
          class="text-caption text-right mt-1 pa-0 grey--text text--darken-2"
          v-text="timestamp"
        />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
