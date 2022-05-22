<template>
  <v-row class="my-0">
    <v-col v-if="$vuetify.breakpoint.width >= 768" sm="4" md="3">
      <my-page-sidebar />
    </v-col>
    <v-col
      :class="{ 'pl-3': $vuetify.breakpoint.width < 768 }"
      class="pl-0 pl-lg-3 pr-lg-0"
    >
      <v-card tile>
        <v-card-title
          class="grey lighten-4 pl-md-7 py-3 grey--text
          text--darken-2 text-body-1 text-sm-h6 font-weight-medium"
          v-text="$t('ACCOUNT_SETTINGS.RESET.TITLE')"
        />
        <v-card-text class="py-3">
          <v-row justify="center" class="my-3 my-md-7">
            <v-col cols="12" md="9">
              <h4
                class="text-center text-body-1"
                v-text="$t('ACCOUNT_SETTINGS.RESET.SUBTITLE')"
              />
            </v-col>
            <v-col cols="12" md="8" lg="7" class="pt-0">
              <v-text-field dense outlined hide-details="auto" role="button" />
            </v-col>
            <v-col cols="12" class="d-flex justify-center pt-7">
              <v-btn
                :color="lightBlack"
                large
                width="200"
                elevation="0"
                class="white--text text-h6"
              >
                {{ $t('ACCOUNT_SETTINGS.BUTTON.SEND') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
