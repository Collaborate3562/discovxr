<template>
  <v-row class="my-0">
    <v-col v-if="$vuetify.breakpoint.width >= 768" sm="4" md="3">
      <my-page-sidebar />
    </v-col>
    <v-col
      :class="{ 'pl-3': $vuetify.breakpoint.width < 768 }"
      class="pl-0 pl-lg-3 pr-lg-0"
    >
      <v-row>
        <v-col cols="12">
          <user-detail-card
            :id="userId"
            :avatar="avatar"
            :username="username"
            :details="details"
            class="pb-3"
          >
            <v-col cols="12" class="py-0 tooltip-box d-flex justify-center">
              <v-tooltip
                :value="false"
                :nudge-right="nudgeRight"
                :max-width="$vuetify.breakpoint.width < 435 ? '90%' : 334"
                top
                nudge-top="-25"
                attach=".tooltip-box"
                color="grey lighten-4"
                content-class="text-left"
              >
                <template #activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on">
                    <v-rating
                      v-model="rating"
                      :large="$vuetify.breakpoint.smAndUp"
                      :background-color="darkYellow"
                      :color="darkYellow"
                      readonly
                    />
                  </div>
                </template>
                <span class="text-caption text-sm-body-2 black--text">
                  {{ $t('PROFILE.TOOLTIP') }}
                </span>
              </v-tooltip>
            </v-col>
          </user-detail-card>
          <v-card tile>
            <v-card-title
              class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
              text-body-1 text-sm-h6 font-weight-medium"
              v-text="$t('PROFILE.NOTIFICATION')"
            />
            <v-card-text class="pa-0">
              <v-list class="py-0">
                <v-slide-y-transition group leave-absolute>
                  <template v-for="(item, i) in notifications">
                    <v-divider v-if="i" :key="`divider-${i}`" />
                    <notification-card
                      :key="`notification-${item.id}`"
                      :is-read="item.read"
                      :timestamp="item.timestamp"
                      :avatar="item.avatar"
                      :message="item.message"
                    />
                  </template>
                </v-slide-y-transition>
              </v-list>
              <v-scale-transition leave-absolute>
                <app-empty-data
                  v-if="!notifications.length"
                  src="/images/empty.png"
                />
              </v-scale-transition>
            </v-card-text>
          </v-card>
        </v-col>
        <v-scale-transition leave-absolute>
          <v-col
            v-if="notifications.length"
            cols="12"
            class="text-center pb-10 pb-sm-15"
          >
            <v-btn
              :x-large="$vuetify.breakpoint.mdAndUp"
              :to="localePath('/mypage/notifications')"
              nuxt
              large
              elevation="0"
              width="70%"
              colos="grey lighten-3"
              class="mx-auto text-none text-body-1 font-weight-medium
              text-sm-h6 grey--text text--darken-2"
            >
              {{ $t('PROFILE.BUTTON') }}
            </v-btn>
          </v-col>
        </v-scale-transition>
        <v-col cols="12">
          <v-card tile>
            <v-card-title
              class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2 text-body-1
              text-sm-h6 font-weight-medium"
              v-text="$t('PROFILE.VIEWED_ITEMS')"
            />
            <v-card-text class="py-3">
              <v-slide-y-transition
                group
                leave-absolute
                class="items-grid ma-sm-3"
              >
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
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
