<template>
  <v-slide-y-reverse-transition leave-absolute>
    <v-col v-if="$vuetify.breakpoint.smAndUp" cols="12" sm="auto" class="pt-0">
      <v-row justify="end" align="center">
        <v-col cols="auto">
          <header-likes-block />
        </v-col>
        <v-col cols="auto" class="py-0">
          <header-notification-menu />
        </v-col>
        <v-col cols="auto" class="pr-xl-0 py-0">
          <header-profile-menu />
        </v-col>
      </v-row>
    </v-col>
    <v-bottom-navigation v-else app grow>
      <v-btn :to="localePath('/mypage/likes')" nuxt>
        <header-likes-block />
      </v-btn>
      <v-btn :to="localePath('/mypage/notifications')" nuxt>
        <header-notification-menu />
      </v-btn>
      <v-btn :to="localePath('/mypage')" nuxt>
        <header-profile-menu />
      </v-btn>
    </v-bottom-navigation>
  </v-slide-y-reverse-transition>
</template>

<script lang="ts" src="./index.script.ts"></script>
