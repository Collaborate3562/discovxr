<template>
  <v-app>
    <the-header />
    <banner-block />
    <breadcrumbs-block />
    <item-detail-header-block />
    <v-slide-y-transition leave-abolute>
      <deal-page-filter
        v-if="$vuetify.breakpoint.width >= 768 && isDealFilterVisible"
      />
    </v-slide-y-transition>
    <v-main class="pb-0">
      <v-container class="mx-auto container-max-width">
        <nuxt />
      </v-container>
    </v-main>
    <breadcrumbs-block />
    <the-footer />
    <mobile-navigation-drawer />
    <app-snackbar />
  </v-app>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style scoped lang="scss">
.container-max-width {
  max-width: 1264px;
}
</style>
