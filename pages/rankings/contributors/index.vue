<template>
  <v-row class="my-lg-0" justify="center">
    <v-col cols="12">
      <ranking-detail-header
        deals="30,000,000"
        donation="¥ 30,000,000"
        sold="¥ 30,000,000"
      >
        <template #title>
          {{ $tc('RANKINGS.TITLE.CONTRIBUTOR', 1) }}
        </template>
      </ranking-detail-header>
    </v-col>
    <v-col cols="12" class="py-0 py-lg-3">
      <ranking-page-filter />
    </v-col>
    <v-col cols="12" class="pt-0">
      <v-card tile>
        <v-card-title
          class="grey lighten-4 py-3 grey--text text--darken-2 text-body-2
          text-lg-body-1 font-weight-bold"
        >
          <v-row align="center">
            <v-col
              cols="12"
              sm="5"
              class="pl-sm-4"
              v-text="$tc('RANKINGS.TITLE.CONTRIBUTOR', 0)"
            />
            <v-scale-transition leave-absolute hide-on-leave>
              <v-col
                v-if="!$vuetify.breakpoint.xsOnly"
                sm
                class="text-center word-wrap"
                v-text="$tc('RANKINGS.NUMBER', 0)"
              />
            </v-scale-transition>
            <v-scale-transition leave-absolute hide-on-leave>
              <v-col
                v-if="!$vuetify.breakpoint.xsOnly"
                sm
                class="text-center word-wrap"
                v-text="$t('RANKINGS.TOTAL.CONTRIBUTION')"
              />
            </v-scale-transition>
            <v-scale-transition leave-absolute hide-on-leave>
              <v-col
                v-if="!$vuetify.breakpoint.xsOnly"
                sm
                class="text-center word-wrap"
                v-text="$t('RANKINGS.TOTAL.DONATION')"
              />
            </v-scale-transition>
          </v-row>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-list class="py-0">
            <v-slide-y-transition leave-absolute group>
              <template v-for="(item, i) in items">
                <v-divider v-if="i" :key="`divider-${item.id}`" />
                <ranking-list-card
                  :key="item.id"
                  :rank-level="item.rankLevel"
                  :avatar="item.avatar"
                  :username="item.username"
                  :purchase="item.purchase"
                  :contribution="item.contribution"
                  :donation="item.donation"
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
