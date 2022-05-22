<template>
  <v-list-item class="px-md-7 py-1">
    <v-list-item-content>
      <v-list-item-title
        class="text-body-2 text-sm-body-1 black--text title-line-clamp"
        v-text="title"
      />
      <v-row align="center" class="mt-0 mb-md-0">
        <v-col class="py-2 pb-md-0">
          <v-list-item-subtitle class="text-sm-body-2" v-text="timestamp" />
        </v-col>
        <v-slide-x-reverse-transition leave-absolute>
          <v-col v-if="$vuetify.breakpoint.smAndDown" class="py-2 text-right">
            <v-list-item-icon class="ma-0 align-self-center">
              <v-chip
                :color="pointData && pointData.bg"
                :text-color="pointData && pointData.text"
                small
                class="d-flex justify-center font-weight-medium"
              >
                <span v-html="pointData && pointData.icon" />
                <span class="mr-1" v-text="point" />
                <span>P</span>
              </v-chip>
            </v-list-item-icon>
          </v-col>
        </v-slide-x-reverse-transition>
      </v-row>
    </v-list-item-content>
    <v-slide-x-reverse-transition leave-absolute>
      <v-list-item-icon
        v-if="$vuetify.breakpoint.mdAndUp"
        class="align-self-center"
      >
        <v-sheet width="90" color="transparent">
          <v-chip
            :color="pointData && pointData.bg"
            :text-color="pointData && pointData.text"
            class="d-flex justify-center font-weight-bold"
          >
            <span v-html="pointData && pointData.icon" />
            <span class="mr-1" v-text="point" />
            <span>P</span>
          </v-chip>
        </v-sheet>
      </v-list-item-icon>
    </v-slide-x-reverse-transition>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
