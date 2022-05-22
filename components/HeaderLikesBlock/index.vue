<template>
  <v-list class="py-0" flat dense color="transparent">
    <app-badge :content="content" :color="lightRed">
      <v-list-item
        :ripple="false"
        :to="localePath('/mypage/likes')"
        nuxt
        class="pa-0"
      >
        <v-slide-y-transition leave-absolute>
          <v-list-item-content v-if="$vuetify.breakpoint.lgAndUp">
            <v-list-item-title
              class="overflow-visible font-weight-medium text-h6
              text-center grey--text text--darken-3"
              v-text="$t('HEADER.LIKES')"
            />
          </v-list-item-content>
        </v-slide-y-transition>
        <v-slide-y-reverse-transition leave-absolute>
          <v-list-item-icon v-if="$vuetify.breakpoint.mdAndDown" class="mx-0">
            <v-icon>mdi-cards-heart-outline</v-icon>
          </v-list-item-icon>
        </v-slide-y-reverse-transition>
      </v-list-item>
    </app-badge>
  </v-list>
</template>

<script lang="ts" src="./index.script.ts"></script>
