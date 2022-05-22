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
          <v-card tile>
            <v-card-title
              class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
              text-body-1 text-sm-h6 font-weight-medium"
              v-text="$t('BEGINNERS.TITLE')"
            />
            <v-card-text class="pa-3 py-md-5 px-md-7 text-body-2">
              <p
                v-for="(line, i) in $t('BEGINNERS.GUIDE')"
                :key="i"
                :class="{ 'mt-3': i }"
                class="mb-0"
                v-text="line"
              />
            </v-card-text>
          </v-card>
        </v-col>
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
                  class="elevation-1 pa-3 justify-center"
                >
                  <span
                    class="font-weight-medium text-caption text-sm-body-1 text-md-h6
                    grey--text text--darken-2 text-none"
                    v-text="item[1].value.text"
                  />
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
                    <template v-for="(item, idx) in getItems(tab)">
                      <v-divider v-if="idx" :key="`divider-${idx}`" />
                      <v-list-item
                        :key="`item-${idx}`"
                        :to="localePath(item.route)"
                        :ripple="false"
                        nuxt
                        light
                        class="py-2"
                      >
                        <v-list-item-avatar
                          tile
                          :size="$vuetify.breakpoint.mdAndUp ? 60 : 30"
                          :width="$vuetify.breakpoint.mdAndUp ? 100 : 60"
                          color="grey lighten-1"
                        >
                          <!-- TODO: add image -->
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            class="text-caption text-sm-body-1 black--text"
                            v-text="item.title"
                          />
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-list>
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-btn
            :x-large="$vuetify.breakpoint.mdAndUp"
            :color="lightRed"
            large
            tile
            block
            elevation="0"
            class="text-none text-caption text-sm-body-1 text-md-h5 white--text d-inline"
          >
            {{ $t('BEGINNERS.BUTTON') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
