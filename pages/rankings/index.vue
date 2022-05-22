<template>
  <v-row class="my-lg-0" justify="center">
    <v-col cols="12">
      <ranking-detail-header
        deals="30,000,000"
        donation="¥ 30,000,000"
        sold="¥ 30,000,000"
      >
        <template #title>
          {{ $t('RANKINGS.TITLE.SUMMARY') }}
        </template>
      </ranking-detail-header>
    </v-col>
    <v-col cols="12" class="mt-3 mt-sm-12 text-body-2 text-sm-h6">
      <h2 class="text-center" v-text="$tc('RANKINGS.TITLE.RANKING', 1)" />
    </v-col>
    <v-col cols="12">
      <v-slide-x-reverse-transition
        leave-absolute
        group
        class="row justify-center"
      >
        <v-col
          v-for="item in influencers.slice(0, 3)"
          :key="item.id"
          :cols="$vuetify.breakpoint.width < 474 ? 12 : 6"
          :sm="$vuetify.breakpoint.width < 750 ? 6 : 4"
        >
          <ranking-block-card
            :rank-level="item.rankLevel"
            :avatar="item.avatar"
            :username="item.username"
            :sns-details="item.snsDetails"
            :deals="item.deals"
            :donation="item.donation"
          />
        </v-col>
      </v-slide-x-reverse-transition>
      <v-scale-transition leave-absolute>
        <app-empty-data v-if="!influencers.length" src="/images/empty.png" />
      </v-scale-transition>
    </v-col>
    <v-slide-y-transition leave-absolute>
      <v-col v-if="influencers.length > 3" cols="12">
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
                v-text="$tc('RANKINGS.TITLE.RANKING', 0)"
              />

              <v-scale-transition leave-absolute hide-on-leave>
                <v-col
                  v-if="!$vuetify.breakpoint.xsOnly"
                  sm
                  class="text-center"
                  v-text="$tc('RANKINGS.NUMBER', 1)"
                />
              </v-scale-transition>
              <v-scale-transition leave-absolute hide-on-leave>
                <v-col
                  v-if="!$vuetify.breakpoint.xsOnly"
                  sm
                  class="text-center"
                  v-text="$t('RANKINGS.TOTAL.DONATION')"
                />
              </v-scale-transition>
            </v-row>
          </v-card-title>
          <v-card-text class="pa-0">
            <v-list class="py-0">
              <v-slide-y-transition leave-absolute group>
                <template v-for="(item, i) in influencers.slice(3)">
                  <v-divider v-if="i" :key="`divider-${item.id}`" />
                  <ranking-list-card
                    :key="item.id"
                    :rank-level="item.rankLevel"
                    :avatar="item.avatar"
                    :username="item.username"
                    :sns-details="item.snsDetails"
                    :deals="item.deals"
                    :donation="item.donation"
                  />
                </template>
              </v-slide-y-transition>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-slide-y-transition>
    <v-slide-y-reverse-transition leave-abolute>
      <v-col v-if="influencers.length" cols="7" md="5">
        <v-btn
          :x-large="$vuetify.breakpoint.smAndUp"
          :to="localePath('/rankings/influencers')"
          nuxt
          block
          outlined
          color="grey"
          class="text-none text-body-1 text-sm-h6 font-weight-regular"
        >
          <span
            class="grey--text text--darken-3"
            v-text="$t('RANKINGS.BUTTON.MORE')"
          />
        </v-btn>
      </v-col>
    </v-slide-y-reverse-transition>
    <v-col cols="12" class="mt-3 mt-sm-12 text-body-2 text-sm-h6">
      <h2 class="text-center" v-text="$tc('RANKINGS.TITLE.CONTRIBUTOR', 1)" />
    </v-col>
    <v-col cols="12">
      <v-slide-x-reverse-transition
        leave-absolute
        group
        class="row justify-center"
      >
        <v-col
          v-for="item in contributors.slice(0, 3)"
          :key="item.id"
          :cols="$vuetify.breakpoint.width < 474 ? 12 : 6"
          :sm="$vuetify.breakpoint.width < 750 ? 6 : 4"
        >
          <ranking-block-card
            :rank-level="item.rankLevel"
            :username="item.username"
            :purchase="item.purchase"
            :contribution="item.contribution"
            :donation="item.donation"
          />
        </v-col>
      </v-slide-x-reverse-transition>
      <v-scale-transition leave-absolute>
        <app-empty-data v-if="!contributors.length" src="/images/empty.png" />
      </v-scale-transition>
    </v-col>
    <v-slide-y-transition leave-absolute>
      <v-col v-if="contributors.length > 3" cols="12">
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
                <template v-for="(item, i) in contributors.slice(3)">
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
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-slide-y-transition>
    <v-slide-y-reverse-transition leave-abolute>
      <v-col v-if="contributors.length" cols="7" md="5">
        <v-btn
          :x-large="$vuetify.breakpoint.smAndUp"
          :to="localePath('/rankings/contributors')"
          nuxt
          block
          outlined
          color="grey"
          class="text-none text-body-1 text-sm-h6 font-weight-regular"
        >
          <span
            class="grey--text text--darken-3"
            v-text="$t('RANKINGS.BUTTON.MORE')"
          />
        </v-btn>
      </v-col>
    </v-slide-y-reverse-transition>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
