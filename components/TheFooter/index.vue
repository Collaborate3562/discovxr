<template>
  <div>
    <v-slide-x-reverse-transition leave-absolute hide-on-leave>
      <v-img :src="banner" aspect-ratio="5.5" />
    </v-slide-x-reverse-transition>
    <v-footer :color="footerBgColor" class="px-0 pt-lg-5">
      <v-container class="mx-auto container-max-width">
        <v-row class="ma-0">
          <v-col cols="12">
            <v-row>
              <v-slide-x-transition leave-absolute>
                <mobile-footer-list v-if="$vuetify.breakpoint.smAndDown" />
                <desktop-footer-list v-else />
              </v-slide-x-transition>
              <footer-region />
            </v-row>
          </v-col>
          <v-col cols="12" class="mt-5 mt-md-10">
            <div class="text-center grey--text text--darken-1">
              <span>&copy;</span>
              <span v-text="$t('FOOTER.COPYRIGHT')" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style scoped lang="scss">
.container-max-width {
  max-width: 1264px;
}
</style>
