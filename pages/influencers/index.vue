<template>
  <v-row class="my-lg-0">
    <v-col cols="12" class="pb-0">
      <h1
        class="text-h6 text-sm-h5 text-lg-h4 grey--text text--darken-2 font-weight-medium"
        v-text="$t('INFLUENCERS.TITLE')"
      />
    </v-col>
    <v-col cols="12" class="py-0 py-lg-3">
      <influencer-page-filter />
    </v-col>
    <v-col cols="12">
      <v-card tile>
        <v-card-title
          class="grey lighten-4 py-3 grey--text text--darken-2 text-body-2
          text-lg-body-1 font-weight-bold"
        >
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="8"
              class="pl-sm-4"
              v-text="$t('INFLUENCERS.POSITION')"
            />

            <v-scale-transition leave-absolute hide-on-leave>
              <v-col
                v-if="!$vuetify.breakpoint.xsOnly"
                sm
                class="text-center"
                v-text="$t('INFLUENCERS.ITEMS_SOLD')"
              />
            </v-scale-transition>
            <v-scale-transition leave-absolute hide-on-leave>
              <v-col
                v-if="!$vuetify.breakpoint.xsOnly"
                sm
                class="text-center"
                v-text="$t('INFLUENCERS.DONATION_AMOUNT')"
              />
            </v-scale-transition>
          </v-row>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-list class="py-0">
            <v-slide-y-transition leave-absolute group>
              <template v-for="(item, i) in items">
                <v-divider v-if="i" :key="`divider-${item.id}`" />
                <influencer-card
                  :key="item.id"
                  :avatar="item.avatar"
                  :username="item.username"
                  :sns-details="item.snsDetails"
                  :sold="item.sold"
                  :amount="item.amount"
                />
              </template>
            </v-slide-y-transition>
            <v-scale-transition leave-absolute>
              <app-empty-data v-if="!items.length" src="/images/empty.png" />
            </v-scale-transition>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <div class="d-flex mt-3">
        <app-pagination v-model="page" class="shadow-none" />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
