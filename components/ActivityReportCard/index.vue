<template>
  <v-card tile>
    <v-card-text class="pa-3">
      <v-row>
        <v-col cols="auto" class="pb-0">
          <v-avatar rounded="sm" size="60">
            <v-img :src="image" />
          </v-avatar>
        </v-col>
        <v-col class="pl-0 pb-0">
          <p
            class="font-weight-medium text-body-2 black--text mb-1 line-clamp__title"
            v-text="title"
          />
          <span class="text-caption" v-text="timestamp" />
        </v-col>
        <v-col cols="12" class="pt-2">
          <span
            class="text-caption text-md-body-2 text-justify black--text line-clamp__report"
            v-text="description"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
