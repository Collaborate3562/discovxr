<template>
  <v-row class="my-lg-0">
    <v-col cols="12">
      <image-carousel :images="donationProject.images">
        <v-col
          :sm="$vuetify.breakpoint.width < 700 ? 5 : 4"
          md="3"
          cols="12"
          order="1"
          order-sm="0"
          class="pb-0 pl-sm-0"
        >
          <donation-detail-block
            :left-days="25"
            amount="¥100,000"
            influencers="90,000"
            contributors="90,000"
            is-project
          />
        </v-col>
      </image-carousel>
    </v-col>
    <v-col col="12" class="pb-0">
      <h2
        class="text-body-2 text-sm-body-1 text-md-h5 font-weight-regular"
        v-text="donationProject.title"
      />
    </v-col>
    <v-col cols="12" class="pt-1 pb-0 pb-sm-3">
      <v-chip-group :column="$vuetify.breakpoint.mdAndUp">
        <v-chip
          v-for="(tag, i) in donationProject.tags"
          :key="i"
          class="grey--text text--darken-1 text-body-2"
        >
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-col>
    <v-col cols="12" class="pt-0 pt-sm-3">
      <v-row align="center" class="my-0">
        <v-col cols="auto" class="pb-0 pr-0">
          <nuxt-link :to="localePath('/donations/1')">
            <v-avatar size="40" class="mr-2">
              <v-img :src="donationProject.image" />
            </v-avatar>
          </nuxt-link>
        </v-col>
        <v-col class="text-h5 pb-0 pl-1">
          <nuxt-link
            :to="localePath('/donations/1')"
            class="text-decoration-none grey--text text--darken-4"
            v-text="donationProject.companyName"
          />
        </v-col>
        <v-col class="pb-0" cols="12" sm="auto">
          <app-admin-sns-profile :sns="donationProject.sns">
            <template #icon="{ icon }">
              <component :is="icon" width="30" />
            </template>
          </app-admin-sns-profile>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="py-1">
      <v-divider />
    </v-col>
    <v-col cols="12" class="py-0 px-md-5">
      <v-chip-group :column="$vuetify.breakpoint.smAndUp">
        <v-btn
          v-for="(tweet, i) in donationProject.tweets"
          :key="i"
          small
          depressed
          color="info"
          class="text-capitalize ma-1"
        >
          <v-icon left color="white">
            mdi-twitter
          </v-icon>
          <span v-text="tweet" />
        </v-btn>
      </v-chip-group>
    </v-col>
    <v-col cols="12" class="py-1">
      <v-divider />
    </v-col>
    <v-col cols="12" sm="auto" class="mt-sm-7 pb-0">
      <v-card tile elevation="1">
        <v-tabs
          v-model="tab"
          :slider-color="lightRed"
          grow
          color="grey"
          active-class="white"
          background-color="grey lighten-5"
        >
          <v-tab
            v-for="(item, i) in tabs"
            :key="i"
            class="elevation-1 py-sm-3 pa-2 justify-center"
          >
            <div
              :class="{ 'flex-column': $vuetify.breakpoint.width < 375 }"
              class="d-flex flex-sm-row align-center"
            >
              <span
                class="font-weight-medium text-caption text-sm-body-1 grey--text
                text--darken-2 text-none"
                v-text="item[1].value.text"
              />
            </div>
          </v-tab>
        </v-tabs>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-tabs-items v-model="tab" class="overflow-visible">
        <v-scale-transition
          v-if="isActivityReports"
          leave-absolute
          hide-on-leave
        >
          <app-empty-data
            v-if="!getItems(tab).length"
            src="/images/empty.png"
          />
        </v-scale-transition>
        <v-tab-item v-for="(tabItem, i) in tabs" :key="i">
          <donation-project-detail v-if="!isActivityReports" />
          <v-slide-y-transition v-else leave-absolute group class="row">
            <v-col
              v-for="item in getItems(tab)"
              :key="item.id"
              :cols="$vuetify.breakpoint.width < 480 ? 12 : 6"
              :sm="$vuetify.breakpoint.width < 900 ? 6 : 4"
            >
              <activity-report-card
                :image="item.image"
                :title="item.title"
                :description="item.description"
                :timestamp="item.timestamp"
              />
            </v-col>
          </v-slide-y-transition>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
