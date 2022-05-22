<template>
  <v-list-item
    :input-value="replied"
    active-class="grey lighten-1"
    class="pa-3 pa-md-4"
  >
    <v-list-item-avatar
      :size="$vuetify.breakpoint.smAndUp ? 50 : 35"
      tile
      color="grey lighten-4 rounded-lg align-self-start my-0"
    >
      <v-img :src="image">
        <v-list-item-content class="fill-height pa-0">
          <v-list-item-avatar size="15" class="deal-type-icon ma-0">
            <component :is="dealTypeIcon" />
          </v-list-item-avatar>
        </v-list-item-content>
      </v-img>
    </v-list-item-avatar>
    <v-list-item-content class="py-0">
      <v-list-item-subtitle
        class="black--text text-caption text-sm-body-2 mb-1 line-clamp__text"
        v-text="title"
      />
      <v-list-item-subtitle
        class="black--text text-caption text-sm-body-2 my-sm-1 line-clamp__text"
        v-text="username"
      />
      <v-list-item-subtitle
        class="text-body-2 text-sm-body-1 black--text my-1 line-clamp__message"
        v-text="message"
      />
      <v-list-item-subtitle class="text-caption my-1" v-text="timestamp" />
      <v-btn
        :block="$vuetify.breakpoint.xsOnly"
        :color="button.color"
        elevation="0"
        max-width="220"
        class="mt-1 white--text text-body-2 text-sm-body-1 font-weight-medium"
      >
        {{ button.text }}
      </v-btn>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
