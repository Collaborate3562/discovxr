<template>
  <v-list-item class="pa-3 pa-md-4">
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
      <v-list-item-title
        class="text-body-2 text-sm-body-1 black--text mb-1 text-line-clamp"
        v-text="title"
      />
      <v-list-item-subtitle class="text-caption my-1" v-text="timestamp" />
      <v-row class="my-0">
        <v-col cols="12" sm="auto" class="pt-2 pb-0 pr-sm-1">
          <v-btn
            :block="$vuetify.breakpoint.xsOnly"
            :color="button && button.color"
            elevation="0"
            width="180"
            class="text-capitalize white--text text-body-2 text-sm-body-1 font-weight-bold"
            @click="clickHandler"
          >
            {{ $t(button && button.text) }}
          </v-btn>
        </v-col>
        <v-col cols="12" sm="auto" class="pt-2 pb-0 pl-sm-1">
          <v-btn
            :block="$vuetify.breakpoint.xsOnly"
            elevation="0"
            width="180"
            class="text-none grey--text text--darken-1 text-body-2 text-sm-body-1 font-weight-bold"
          >
            {{ $t(sendMessageButton) }}
          </v-btn>
        </v-col>
      </v-row>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
