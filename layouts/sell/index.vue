<template>
  <v-app>
    <v-main>
      <v-container class="fill-height flex-column flex-nowrap align-stretch">
        <v-row align-content="center" justify="center">
          <v-col cols="12" class="mb-md-10">
            <nuxt-link :to="localePath('/')">
              <v-img
                :width="$vuetify.breakpoint.mdAndUp ? 300 : 200"
                src="/images/discovxr-logo.png"
                class="mx-auto"
              />
            </nuxt-link>
          </v-col>
          <v-col cols="12">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <app-snackbar />
  </v-app>
</template>
