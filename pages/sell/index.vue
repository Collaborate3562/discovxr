<template>
  <v-row justify="center" class="mb-0">
    <v-col cols="12" sm="9" lg="8" xl="6">
      <v-row class="mb-0">
        <v-col cols="12">
          <v-alert
            :color="alertLightRed"
            tile
            class="text-caption text-sm-body-2 text-md-body-1 text-lg-h6 font-weight-regular"
          >
            <p
              v-for="(text, i) in $t('SELL.HEADER_DESCRIPTION')"
              :key="i"
              class="mb-0 grey--text text--darken-2"
              v-text="text"
            />
          </v-alert>
        </v-col>
        <v-col cols="12">
          <app-field-label required>
            <template #label>
              <span
                class="font-weight-medium text-body-1 grey--text text--darken-2"
                v-text="$t('SELL.DEAL_TYPE.LABEL')"
              />
            </template>
            <v-select
              v-model="type"
              :items="items"
              outlined
              dense
              full-width
              class="mt-2"
              hide-details="auto"
              append-icon="mdi-chevron-down"
            />
          </app-field-label>
        </v-col>
        <v-col cols="12">
          <v-slide-y-transition leave-absolute hide-on-leave>
            <component
              :is="componentName"
              :key="componentName"
              translation-prefix="SELL"
              @onFill="onFillHandler"
            />
          </v-slide-y-transition>
        </v-col>
        <v-col cols="12">
          <v-row justify="center" class="my-0 my-md-3">
            <v-col cols="11" sm="9">
              <v-btn
                :color="lightRed"
                :x-large="$vuetify.breakpoint.mdAndUp"
                large
                block
                elevation="0"
                class="text-body-1 text-sm-h6 text-md-h5 font-weight-medium text-none white--text"
              >
                <v-scale-transition leave-absolute hide-on-leave>
                  <span :key="type" v-text="$t(`SELL.BUTTON.${type}`)" />
                </v-scale-transition>
              </v-btn>
            </v-col>
            <v-col cols="11" sm="9" class="pt-0 pt-sm-3">
              <v-btn
                :x-large="$vuetify.breakpoint.mdAndUp"
                large
                block
                color="grey lighten-4"
                elevation="0"
                class="text-body-1 text-sm-h6 text-md-h5 font-weight-medium text-none black--text"
              >
                {{ $t('SELL.BUTTON.DRAFT') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-footer
            color="transparent"
            class="px-sm-0 text-caption text-lg-body-2"
          >
            <p
              v-for="(text, i) in $t('SELL.FOOTER_DESCRIPTION')"
              :key="i"
              class="mb-0 grey--text text--darken-2"
              v-text="text"
            />
          </v-footer>
        </v-col>
        <v-btn
          :color="lightRed"
          :width="buttonSize"
          :height="buttonSize"
          class="white--text text-none"
          fab
          fixed
          right
          bottom
          x-large
        >
          <span class="d-flex flex-column justify-center align-center">
            <span
              class="text-caption text-sm-body-1 font-weight-medium"
              v-text="$t('SELL.ASK_LXGIC')"
            />
            <people-carry-icon :width="iconSize" :height="iconSize" />
          </span>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
