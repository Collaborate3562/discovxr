<template>
  <v-card tile>
    <nuxt-link :to="localePath('/donations/1/2')">
      <v-img :src="image" />
    </nuxt-link>
    <v-card-text class="pa-3">
      <p class="black--text text-caption title-line-clamp" v-text="title" />
      <nuxt-link
        :to="localePath('/donations/1')"
        class="text-truncate grey--text text--darken-2 text-decoration-none text-body-2"
        v-text="groupName"
      />
    </v-card-text>
    <v-card-actions class="pa-0 grey lighten-4">
      <v-row align="center" class="text-center ma-0 grey--text text--darken-3">
        <v-col class="d-flex flex-column pa-2">
          <span
            class="text-caption text-truncate"
            v-text="$t('DONATION.AMOUNT')"
          />
          <span class="text-body-1 font-weight-medium" v-text="amount" />
        </v-col>
        <v-col cols="auto" class="pa-0 align-self-stretch">
          <v-divider vertical />
        </v-col>
        <v-col class="d-flex flex-column pa-2">
          <span
            class="text-caption text-truncate"
            v-text="$t('DONATION.DONATED_COUNT')"
          />
          <span class="text-body-1 font-weight-medium" v-text="donatedCount" />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
