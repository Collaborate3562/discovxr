<template>
  <v-row
    :class="{ 'my-sm-0 mt-sm-5 mt-lg-10': $vuetify.breakpoint.width >= 768 }"
  >
    <v-col cols="12">
      <h1
        class="text-h6 text-sm-h5 text-lg-h4 font-weight-medium"
        v-text="$t('DEALS.SHOPPING')"
      />
    </v-col>
    <v-col cols="12">
      <v-slide-y-transition group leave-absolute class="items-grid">
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
    </v-col>
    <v-col cols="12">
      <div class="d-flex mt-3">
        <app-pagination v-model="page" class="shadow-none" />
      </div>
    </v-col>
    <client-only>
      <v-bottom-sheet
        v-if="$vuetify.breakpoint.width < 768"
        v-model="isOpen"
        scrollable
      >
        <deal-page-filter />
      </v-bottom-sheet>
    </client-only>
    <v-scale-transition leave-absolute>
      <v-btn
        v-if="$vuetify.breakpoint.width < 768"
        :color="lightRed"
        :class="{ 'button-position': $vuetify.breakpoint.xsOnly }"
        fab
        fixed
        right
        bottom
        @click="open"
      >
        <v-icon color="white">
          mdi-filter
        </v-icon>
      </v-btn>
    </v-scale-transition>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
