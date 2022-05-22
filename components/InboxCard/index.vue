<template>
  <v-list-item class="pl-md-7 py-2">
    <v-list-item-avatar
      :size="$vuetify.breakpoint.mdAndUp ? 50 : 30"
      tile
      color="grey lighten-4 rounded-lg align-self-start mt-3"
    >
      <v-img :src="image" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title
        class="text-body-1 black--text mb-1 text-line-clamp"
        v-text="username"
      />
      <v-list-item-icon class="my-0 align-center">
        <component :is="dealTypeIcon" width="20" height="20" />
        <v-list-item-subtitle
          class="text-body-2 black--text ml-1 text-line-clamp"
          v-text="title"
        />
      </v-list-item-icon>
      <v-list-item-subtitle
        class="text-body-2 black--text my-1 text-line-clamp"
        v-text="lastMessage"
      />
      <v-list-item-subtitle class="text-caption my-1" v-text="timestamp" />
      <v-btn
        :block="$vuetify.breakpoint.xsOnly"
        :color="button && button.color"
        elevation="0"
        max-width="220"
        class="text-none mt-1 white--text text-body-2 text-sm-body-1 font-weight-medium"
        @click="onClickHandler"
      >
        {{ $t(button && button.text) }}
      </v-btn>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
