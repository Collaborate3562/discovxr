<template>
  <v-row class="my-0">
    <v-col v-if="$vuetify.breakpoint.width >= 768" sm="4" md="3">
      <search-filter />
    </v-col>
    <v-col
      :class="{ 'pl-3': $vuetify.breakpoint.width < 768 }"
      class="pl-0 pl-lg-3 pr-lg-0"
    >
      <v-row
        align="center"
        :class="{ 'fill-height': loading && $vuetify.breakpoint.width >= 768 }"
      >
        <v-col class="grey--text text--darken-2 py-0 py-sm-3">
          <div class="text-h5 text-truncate">
            <span v-text="$t('SEARCH.RESULT_TITLE')" />
            <span class="font-weight-medium" v-text="keyword" />
          </div>
          <div class="text-body-2 mt-1">
            <span v-text="$t('SEARCH.SHOWING')" />
            <!-- TODO: change with pagination data -->
            <span v-html="`1 &mdash; 120`" />
          </div>
        </v-col>
        <v-col class="pt-1 py-sm-3" cols="12" sm="auto">
          <v-checkbox
            :color="lightRed"
            :ripple="false"
            hide-details
            class="mt-0"
          >
            <template #label>
              <span class="text-body-2 ml-n1" v-text="$t('SEARCH.CHECKBOX')" />
            </template>
          </v-checkbox>
        </v-col>
        <v-col class="pt-0 pt-sm-3" cols="12" sm="auto">
          <v-select
            solo
            dense
            append-icon="mdi-chevron-down"
            hide-details
            full-width
          />
        </v-col>
        <v-slide-y-transition leave-absolute>
          <v-col v-if="!loading" cols="12" class="pt-0">
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
        </v-slide-y-transition>
        <v-scale-transition leave-absolute>
          <v-col
            v-if="loading"
            :class="{ 'fill-height': $vuetify.breakpoint.width >= 768 }"
            cols="12"
            class="py-16"
          >
            <app-page-loading
              :class="{ 'fill-height': $vuetify.breakpoint.width >= 768 }"
            />
          </v-col>
        </v-scale-transition>
      </v-row>
    </v-col>
    <v-bottom-sheet
      v-if="$vuetify.breakpoint.width < 768"
      v-model="isOpen"
      scrollable
    >
      <search-filter />
    </v-bottom-sheet>
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
