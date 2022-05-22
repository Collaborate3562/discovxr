<template>
  <v-row>
    <!-- TODO: will be change (only for design) -->
    <v-col cols="12" md="8">
      <v-row
        v-for="(item, i) in 3"
        :key="item"
        :class="i ? 'mt-3' : 'mt-0'"
        class="mr-lg-0"
      >
        <v-col
          cols="12"
          class="pb-0 text-body-1 text-sm-h5 font-weight-regular"
          v-text="'水たき料亭博多華味鳥とは？'"
        />
        <v-col
          cols="12"
          class="text-body-2 text-sm-body-1 grey--text text--darken-2 font-weight-regular"
          v-text="
            '博多中洲に本店を構え、福岡。銀座・梅田など、国内外に43店舗展開している'
          "
        />
        <v-col
          cols="12"
          class="text-body-1 text-sm-h5 font-weight-regular"
          v-text="'博多の郷土料理の水たきを専門に提供しているお店です。'"
        />
        <v-col cols="12" class="pt-0">
          <v-img src="/images/donations/image.jpg" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="4">
      <v-row class="ml-lg-0">
        <v-col
          v-for="detail in donationsDetail"
          :key="detail[0]"
          cols="12"
          sm="6"
          md="12"
        >
          <span
            class="text-subtitle-2 grey--text text--darken-2"
            v-text="$t(detail[0])"
          />
          <v-card
            :ref="detail[0]"
            :height="$vuetify.breakpoint.xsOnly ? 168 : 392"
            tile
            outlined
            class="mt-1 overflow-y-auto"
            @mouseenter="detail[1].pause"
            @mouseleave="detail[1].run"
            @touchstart="detail[1].pause"
            @touchend="detail[1].run"
          >
            <v-card-text class="pt-0 pb-3">
              <v-row
                v-for="item in detail[1].items.value"
                :key="detail[0] + item.id"
                align="center"
                class="mt-3"
              >
                <v-col class="pt-0" cols="auto">
                  <v-avatar size="25">
                    <v-img :src="`${item.country}.svg`" />
                  </v-avatar>
                </v-col>
                <v-col class="pt-0">
                  {{ item.username }}
                </v-col>
                <v-col class="pt-0" cols="auto">
                  {{ item.price }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <h2
        class="grey--text text--darken-2 text-center text-md-left text-sm-h5
        text-uppercase font-weight-medium"
        v-text="$t('DONATION.POPULAR_PROJECTS')"
      />
      <v-scale-transition leave-absolute hide-on-leave>
        <app-empty-data
          v-if="!popularProjects.length"
          src="/images/empty.png"
        />
      </v-scale-transition>
      <v-slide-y-transition leave-absolute group class="row my-1">
        <v-col
          v-for="item in popularProjects"
          :key="item.id"
          :cols="$vuetify.breakpoint.width < 480 ? 12 : 6"
          :sm="$vuetify.breakpoint.width < 700 ? 6 : 4"
          :md="$vuetify.breakpoint.width < 1100 ? 4 : 3"
        >
          <donation-group-card
            :image="item.image"
            :title="item.title"
            :group-name="item.groupName"
            :amount="item.amount"
            :donated-count="item.donatedCount"
          />
        </v-col>
      </v-slide-y-transition>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
