<template>
  <v-list-item class="py-1 px-3 px-sm-4 py-sm-2">
    <v-list-item-avatar
      :size="$vuetify.breakpoint.xsOnly ? 30 : 50"
      class="align-self-start mr-2 mt-3"
    >
      <v-img :src="avatar" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-row class="my-0">
        <v-col cols="12" class="py-0">
          <component
            :is="emotionTypeIcon"
            :width="$vuetify.breakpoint.xsOnly ? 20 : 25"
            :height="$vuetify.breakpoint.xsOnly ? 20 : 25"
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-list-item-title
            class="grey--text text--darken-2 text-body-2 text-sm-body-1 font-weight-bold"
          >
            <span v-text="username" />
            <span v-text="`(${$t(`USER_TYPE.${accountType}`)})`" />
          </v-list-item-title>
        </v-col>
        <v-col cols="12" class="py-2">
          <v-list-item-subtitle
            class="grey--text text--darken-2 text-caption text-sm-body-2
            font-weight-medium d-flex align-center"
          >
            <span class="mr-1" v-text="dealName" />
            <component
              :is="dealTypeIcon"
              :width="$vuetify.breakpoint.xsOnly ? 15 : 20"
              :height="$vuetify.breakpoint.xsOnly ? 15 : 20"
            />
          </v-list-item-subtitle>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-list-item-title
            class="grey--text text--darken-2 text-caption text-sm-body-1 comment-line-clamp"
            v-text="comment"
          />
        </v-col>
      </v-row>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
