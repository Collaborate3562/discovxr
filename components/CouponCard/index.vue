<template>
  <v-card
    :class="[
      $vuetify.breakpoint.mdAndUp ? 'rounded-xl' : 'rounded-lg',
      couponType,
    ]"
  >
    <v-card-text class="py-0 pl-6 pl-md-11 pl-lg-10">
      <v-row class="my-0">
        <v-col
          :class="{ 'px-2': $vuetify.breakpoint.width < 320 }"
          class="content py-md-5 pl-md-7 pr-md-5"
        >
          <v-sheet
            :class="$vuetify.breakpoint.mdAndUp ? 'rounded-xl' : 'rounded-lg'"
            class="fill-height pa-2 pa-md-5"
            elevation="2"
          >
            <h2
              class="text-uppercase text-center text-caption
              text-md-h4 mb-2 mb-md-5 font-weight-bold"
              v-text="title"
            />
            <p
              class="mb-0 line-clamb small-text text-md-body-1"
              v-text="description"
            />
          </v-sheet>
        </v-col>
        <v-col
          :class="{ 'px-2': $vuetify.breakpoint.width < 320 }"
          :cols="$vuetify.breakpoint.width < 375 ? 2 : 3"
          :md="$vuetify.breakpoint.width > 1210 ? 3 : 4"
          class="pa-md-5"
        >
          <v-sheet
            :class="$vuetify.breakpoint.mdAndUp ? 'rounded-xl' : 'rounded-lg'"
            elevation="2"
            class="fill-height pa-3 pa-md-5 d-flex align-center justify-center"
          >
            <h3
              :class="{
                'vertical-text': $vuetify.breakpoint.width < 375,
                'text-body-1': $vuetify.breakpoint.width > 491,
              }"
              class="text-center small-text text-sm-h text-md-h4 font-weight-bold text-uppercase"
              v-html="couponValue"
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
