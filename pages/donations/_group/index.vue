<template>
  <v-row class="my-lg-0">
    <v-col
      :cols="$vuetify.breakpoint.width < 500 ? 12 : 7"
      :sm="$vuetify.breakpoint.width < 700 ? 7 : 8"
      md="9"
      class="pr-lg-6"
    >
      <v-row class="mr-md-0">
        <v-col cols="12">
          <v-list-item class="px-0">
            <v-list-item-avatar
              :size="$vuetify.breakpoint.xsOnly ? 60 : 100"
              class="my-1 my-sm-0 mr-3 align-self-start"
            >
              <v-img :src="donationGroup.image" />
            </v-list-item-avatar>
            <v-list-item-content class="py-0">
              <v-row class="my-0">
                <v-col cols="12" class="py-0">
                  <h2
                    class="text-body-1 text-sm-h6 text-md-h5 font-weight-bold"
                    v-text="donationGroup.groupName"
                  />
                </v-col>
                <v-col cols="12" class="pt-1 pb-2">
                  <app-admin-sns-profile :sns="donationGroup.sns">
                    <template #icon="{ icon }">
                      <component :is="icon" width="30" />
                    </template>
                  </app-admin-sns-profile>
                </v-col>
                <v-col cols="12" class="py-0">
                  <a
                    :href="donationGroup.url"
                    target="_blank"
                    class="text-body-2 black--text text-decoration-none"
                    v-text="donationGroup.url"
                  />
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="12" class="py-0 pb-md-3">
          <v-chip-group :column="$vuetify.breakpoint.mdAndUp">
            <v-chip
              v-for="(tag, i) in donationGroup.tags"
              :key="i"
              class="grey--text text--darken-1 text-body-2"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-col>
        <v-col
          cols="12"
          :class="{ 'text-sm-body-2': $vuetify.breakpoint.width >= 700 }"
          class="pb-0 font-weight-regular text-caption text-md-body-1 text-lg-h6
          black--text text-justify"
          v-text="donationGroup.description"
        />
      </v-row>
    </v-col>
    <v-col
      :cols="$vuetify.breakpoint.width < 500 ? 12 : 5"
      :sm="$vuetify.breakpoint.width < 700 ? 5 : 4"
      :class="{ 'pl-0': $vuetify.breakpoint.width >= 500 }"
      md
    >
      <donation-detail-block
        amount="¥100,000"
        influencers="90,000"
        contributors="90,000"
      />
    </v-col>
    <v-col cols="12" class="py-1">
      <v-divider />
    </v-col>
    <v-col cols="12" class="py-0 px-md-5">
      <v-chip-group :column="$vuetify.breakpoint.smAndUp">
        <v-btn
          v-for="(tweet, i) in donationGroup.tweets"
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
        <v-scale-transition leave-absolute hide-on-leave>
          <app-empty-data
            v-if="!getItems(tab || 2).length"
            src="/images/empty.png"
          />
        </v-scale-transition>
        <v-tab-item v-for="(tabItem, i) in tabs" :key="i">
          <v-slide-y-transition leave-absolute group class="row">
            <v-col
              v-for="item in getItems(tab || 2)"
              :key="item.id"
              :cols="$vuetify.breakpoint.width < 480 ? 12 : 6"
              :sm="
                $vuetify.breakpoint.width < (isActivityReports ? 900 : 700)
                  ? 6
                  : 4
              "
              :md="
                isActivityReports || $vuetify.breakpoint.width < 1100 ? 4 : 3
              "
            >
              <activity-report-card
                v-if="isActivityReports"
                :image="item.image"
                :title="item.title"
                :description="item.description"
                :timestamp="item.timestamp"
              />
              <donation-group-card
                v-else
                :image="item.image"
                :title="item.title"
                :group-name="item.groupName"
                :amount="item.amount"
                :donated-count="item.donatedCount"
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
