<template>
  <v-row>
    <v-col>
      <slot>
        <v-btn
          :loading="loading"
          :color="color"
          :x-large="$vuetify.breakpoint.mdAndUp"
          :min-height="isConnectedDefined ? '100%' : 'auto'"
          large
          block
          max-width="100%"
          elevation="0"
          class="white--text text-none"
          @click="$emit('click:sns', type)"
        >
          <slot name="icon">
            <v-icon left size="20" v-text="icon" />
          </slot>
          <v-spacer />
          <slot name="text">
            <span class="text-body-2" v-text="text" />
          </slot>
          <v-spacer />
        </v-btn>
      </slot>
    </v-col>
    <client-only>
      <v-scale-transition leave-absolute>
        <v-col
          v-if="isConnectedDefined && $vuetify.breakpoint.smAndUp"
          cols="auto"
          class="pl-sm-0 pt-0 pt-sm-3"
        >
          <v-card
            :width="$vuetify.breakpoint.xsOnly ? 'auto' : 102"
            :color="connected ? 'green' : lightRed"
            outlined
          >
            <v-sheet>
              <v-card-text class="pa-1 px-2 text-center">
                <v-card-subtitle
                  v-if="$vuetify.breakpoint.smAndUp"
                  :class="connected ? 'green--text' : 'red--text'"
                  class="pa-0 font-weight-medium text-caption"
                  v-text="'Not connected'"
                />
                <v-icon :color="connected ? 'green' : lightRed" size="20">
                  mdi-check-circle
                </v-icon>
              </v-card-text>
            </v-sheet>
          </v-card>
        </v-col>
      </v-scale-transition>
    </client-only>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
