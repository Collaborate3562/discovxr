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
        class="text-body-1 black--text mb-1 text-line-clamp"
        v-text="title"
      />
      <v-list-item-subtitle class="text-caption my-1" v-text="timestamp" />
      <v-btn
        :block="$vuetify.breakpoint.xsOnly"
        :color="lightBlack"
        elevation="0"
        max-width="220"
        class="text-capitalize mt-1 white--text text-body-2 text-sm-body-1 font-weight-medium"
        @click="clickHandler"
      >
        {{ buttonText }}
      </v-btn>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
