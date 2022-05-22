<template>
  <v-row class="py-2 py-sm-3">
    <v-col cols="12">
      <p
        v-for="text in $t('SIGNUP.COMPLETED.SUBTITLE')"
        :key="text"
        class="mb-0 text-md-body-2 text-caption font-weight-medium"
        v-text="text"
      />
    </v-col>
    <v-col cols="12" class="text-center">
      <v-icon size="70" color="success">
        mdi-account-check
      </v-icon>
    </v-col>
    <v-col cols="12">
      <v-btn
        :color="lightRed"
        :x-large="$vuetify.breakpoint.mdAndUp"
        :to="localePath('login')"
        nuxt
        large
        block
        elevation="0"
        class="text-none white--text text-body-2"
      >
        {{ $tc('SIGNUP.BUTTON', 1) }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
