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
          class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
          text-body-1 text-sm-h6 font-weight-medium"
          v-text="$t('RECENTLY_VIEWED_ITEMS.TITLE')"
        />
        <v-card-text class="py-3">
          <v-slide-y-transition group leave-absolute class="items-grid ma-sm-3">
            <product-card
              v-for="item in items"
              :id="item.id"
              :key="item.id"
              :img="item.image"
              :avatar="item.avatar"
              :username="item.username"
              :deal-type="item.dealType"
              :title="item.title"
              :price="item.price"
            >
              <template #auction-summary-first-value>
                {{ item.bids }}
              </template>
              <template #shopping-summary-first-value>
                {{ item.quantity }}
              </template>
              <template #raffle-summary-first-value>
                {{ item.prize }}
              </template>
              <template #auction-summary-last-value>
                {{ item.left }}
              </template>
              <template #shopping-summary-last-value>
                {{ item.donation }}%
              </template>
              <template #raffle-summary-last-value>
                {{ item.left }}
              </template>
            </product-card>
          </v-slide-y-transition>
          <v-scale-transition leave-absolute>
            <app-empty-data v-if="!items.length" src="/images/empty.png" />
          </v-scale-transition>
        </v-card-text>
        <v-card-actions class="pb-7">
          <v-slide-y-reverse-transition leave-absolute hide-on-leave>
            <v-btn
              v-if="items.length"
              :x-large="$vuetify.breakpoint.mdAndUp"
              large
              elevation="0"
              width="70%"
              colos="grey lighten-3"
              class="mx-auto text-none text-body-1 font-weight-medium
              text-sm-h6 grey--text text--darken-2"
            >
              {{ $t('RECENTLY_VIEWED_ITEMS.BUTTON') }}
            </v-btn>
          </v-slide-y-reverse-transition>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
