<template>
  <v-card tile>
    <v-card-title>
      <v-row justify="center" align="center" class="my-0">
        <v-col cols="auto">
          <span class="text-capitalize black--text text-h6">
            <slot name="title" />
          </span>
          <v-avatar color="grey darken-1" size="25">
            <v-icon color="white" size="15">
              mdi-help
            </v-icon>
          </v-avatar>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text class="grey lighten-4 pb-0">
      <v-row class="my-0" align="center">
        <v-col cols="12" sm class="d-flex flex-column text-center">
          <span class="text-h6" v-text="deals" />
          <span class="text-body-2 mt-1" v-text="$t('RANKINGS.TOTAL.DEALS')" />
        </v-col>
        <v-col cols="12" sm="auto" class="pa-0 align-self-stretch">
          <v-divider :vertical="$vuetify.breakpoint.smAndUp" />
        </v-col>
        <v-col cols="12" sm class="d-flex flex-column text-center">
          <span class="text-h6" v-text="donation" />
          <span
            class="text-body-2 mt-1"
            v-text="$t('RANKINGS.TOTAL.DONATION')"
          />
        </v-col>
        <v-col cols="12" sm="auto" class="pa-0 align-self-stretch">
          <v-divider :vertical="$vuetify.breakpoint.smAndUp" />
        </v-col>
        <v-col cols="12" sm class="d-flex flex-column text-center">
          <span class="text-h6" v-text="sold" />
          <span
            class="text-body-2 mt-1"
            v-text="$t('RANKINGS.MOST_SOLD_ITEM_VALUE')"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
