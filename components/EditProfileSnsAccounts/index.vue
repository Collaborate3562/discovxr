<template>
  <v-card tile>
    <v-card-title
      class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
      text-body-1 text-sm-h6 font-weight-medium"
      v-text="$tc('EDIT_PROFILE.TITLE', 1)"
    />
    <v-card-text class="pa-0">
      <v-row justify="center" class="ma-0">
        <v-col cols="11" md="8">
          <v-row
            v-for="(button, i) in buttons"
            :key="i"
            align="center"
            justify="center"
            class="my-0"
          >
            <v-col
              cols="12"
              md="2"
              class="d-flex align-center pb-1 pb-md-3 text-body-1 font-weight-bold label-direction"
            >
              <span v-text="$t(`EDIT_PROFILE.${button.value.type}`)" />
              <v-scale-transition leave-absolute>
                <v-icon
                  v-if="$vuetify.breakpoint.xsOnly"
                  :color="button.value.connected ? 'green' : lightRed"
                  size="20"
                  class="ml-1"
                >
                  mdi-check-circle
                </v-icon>
              </v-scale-transition>
            </v-col>
            <v-col cols="12" sm class="pt-0 pt-md-3 pr-sm-0">
              <sns-button
                :type="button.value.type"
                :icon="button.value.icon"
                :text="button.value.text"
                :color="button.value.color"
                :loading="button.value.loading"
                :connected="button.value.connected"
                class="mr-sm-0"
              >
                <v-text-field
                  v-if="!i"
                  :height="$vuetify.breakpoint.xsOnly ? 'auto' : 52.3"
                  dense
                  outlined
                  hide-details="auto"
                  role="button"
                />
              </sns-button>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
