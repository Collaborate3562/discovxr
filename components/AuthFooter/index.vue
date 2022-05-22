<template>
  <v-footer min-width="100%" class="justify-center pb-md-7" color="transparent">
    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn
          v-for="item in buttons"
          :key="item.value"
          text
          tile
          small
          class="text-none"
          @click="onButtonHandler(item.value)"
        >
          {{ $t(item.text) }}
        </v-btn>
      </v-col>
      <v-col cols="12" class="d-flex justify-center pb-0">
        <v-img src="/images/auth-footer-logo.png" max-width="60" />
      </v-col>
      <v-col
        cols="12"
        class="text-center grey--text text--darken-1 text-caption"
      >
        <span>&copy;</span>
        <span v-text="$t('AUTH_FOOTER.COPYRIGHT')" />
      </v-col>
    </v-row>
  </v-footer>
</template>
<script lang="ts" src="./index.script.ts"></script>
