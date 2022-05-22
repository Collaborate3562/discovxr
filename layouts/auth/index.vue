<template>
  <v-app>
    <v-main>
      <v-container class="fill-height flex-column flex-nowrap align-stretch">
        <v-row align-content="center" justify="center">
          <v-col cols="10" sm="4" md="3" lg="2">
            <v-img src="/images/discovxr-logo.png" />
          </v-col>
          <v-col cols="12">
            <nuxt v-if="!loading" />
            <v-scale-transition>
              <!-- TODO: add height -->
              <app-page-loading v-if="loading" />
            </v-scale-transition>
          </v-col>
        </v-row>
        <auth-footer />
      </v-container>
    </v-main>
    <app-snackbar />
  </v-app>
</template>

<script lang="ts" src="./index.script.ts"></script>
