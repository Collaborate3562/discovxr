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
          <v-card tile elevation="3">
            <v-card-title class="pa-0">
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
                  class="elevation-2 py-sm-3 pa-2 justify-center"
                >
                  <div
                    :class="{ 'flex-column': $vuetify.breakpoint.width < 375 }"
                    class="d-flex flex-sm-row align-center"
                  >
                    <span
                      :class="{ 'pr-sm-5': !item[1].value.state.content }"
                      class="font-weight-medium text-caption text-sm-body-1 text-md-h6
                      grey--text text--darken-2 text-none"
                      v-text="item[1].value.text"
                    />
                    <app-badge
                      :content="item[1].value.state.content"
                      :color="lightRed"
                      :class="{ 'ml-2': $vuetify.breakpoint.width >= 375 }"
                      position-none
                    />
                  </div>
                </v-tab>
              </v-tabs>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-tabs-items v-model="tab" class="elevation-2">
                <v-scale-transition leave-absolute hide-on-leave>
                  <app-empty-data
                    v-if="!getItems(tab).length"
                    src="/images/empty.png"
                  />
                </v-scale-transition>
                <v-tab-item v-for="(tabItem, i) in tabs" :key="i">
                  <v-list class="py-0">
                    <v-slide-y-transition leave-absolute group>
                      <template v-for="(item, idx) in getItems(tab)">
                        <v-divider v-if="idx" :key="`divider-${idx}`" />
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
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="text-center mt-md-7">
          <v-btn
            :x-large="$vuetify.breakpoint.mdAndUp"
            large
            elevation="0"
            width="70%"
            colos="grey lighten-3"
            class="mx-auto text-none text-body-1 font-weight-medium
            text-sm-h6 grey--text text--darken-2"
          >
            {{ $t('NOTIFICATION.BUTTON') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
