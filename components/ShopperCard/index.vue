<template>
  <v-list-item class="pa-0">
    <v-checkbox
      v-model="checkboxState.value"
      :value="id"
      :ripple="false"
      :color="lightRed"
      dense
      hide-details
      on-icon="mdi-square"
      class="mt-0 pt-0 ml-2"
    />
    <v-divider vertical />
    <v-list-item-content>
      <v-row class="mx-0" align="center">
        <v-col
          cols="12"
          sm="6"
          class="pb-0 pb-sm-3 d-flex align-center text-body-2 text-sm-body-1"
        >
          <span class="font-weight-normal black--text" v-text="`${index}.`" />
          <span
            class="mx-2 font-weight-normal black--text flex-grow-1 flex-sm-grow-0 text-line-clamp"
            v-text="username"
          />
          <span
            class="font-weight-normal black--text"
            v-text="`(${rating}/5.0)`"
          />
        </v-col>
        <v-col
          :cols="$vuetify.breakpoint.width < 350 ? 12 : 6"
          sm="6"
          class="text-sm-right"
        >
          <v-list-item-title
            class="text-subtitle-1 text-sm-h5 black--text"
            v-text="price"
          />
        </v-col>
        <v-slide-y-reverse-transition leave-absolute>
          <v-col
            v-if="bidders"
            cols="12"
            sm="6"
            class="pt-0 d-flex align-center"
            order="1"
            order-sm="0"
          >
            <v-btn
              :color="lightRed"
              :block="$vuetify.breakpoint.xsOnly"
              elevation="0"
              width="125"
              class="white--text font-weight-bold"
              @click="open"
            >
              {{ $t('BIDDERS.REJECT') }}
            </v-btn>
          </v-col>
        </v-slide-y-reverse-transition>
        <v-col
          :cols="$vuetify.breakpoint.width < 350 ? 12 : 6"
          :class="{ 'text-right pt-3': $vuetify.breakpoint.width >= 350 }"
          :sm="bidders ? 6 : 12"
          class="pt-0 pt-sm-0"
        >
          <v-list-item-title
            class="text-caption text-sm-body-2 grey--text text--darken-2"
            v-text="timestamp"
          />
        </v-col>
      </v-row>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
