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
          v-text="$t('COUPONS.TITLE')"
        />
        <v-card-text class="py-3">
          <v-slide-y-transition
            v-if="items.length"
            group
            class="row my-0 px-lg-3"
          >
            <v-col v-for="item in items" :key="item.id" cols="12" class="pb-0">
              <coupon-card
                :type="item.type"
                :title="item.title"
                :description="item.description"
                :percentage="item.percentage"
                :currency="item.currency"
              />
            </v-col>
          </v-slide-y-transition>
          <v-scale-transition leave-absolute>
            <app-empty-data v-if="!items.length" src="/images/empty.png" />
          </v-scale-transition>
        </v-card-text>
        <v-card-actions v-if="items.length">
          <v-btn
            :x-large="$vuetify.breakpoint.mdAndUp"
            large
            elevation="0"
            width="70%"
            colos="grey lighten-3"
            class="mx-auto text-none text-body-1 font-weight-medium
            text-sm-h6 grey--text text--darken-2 my-3 my-md-7"
          >
            {{ $t('COUPONS.BUTTON') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
