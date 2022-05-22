<template>
  <v-row class="my-0">
    <v-col v-if="$vuetify.breakpoint.width >= 768" sm="4" md="3">
      <my-page-sidebar />
    </v-col>
    <v-col
      :class="{ 'pl-3': $vuetify.breakpoint.width < 768 }"
      class="pl-0 pl-lg-3 pr-lg-0"
    >
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
              v-for="item in tabs"
              :key="item[0]"
              class="elevation-1 py-sm-3 pa-2 justify-center"
            >
              <v-row class="my-sm-n1">
                <v-col cols="12" class="pb-0 pb-sm-1">
                  <span
                    class="font-weight-medium text-caption text-sm-body-1 text-md-h6
                    grey--text text--darken-2 text-none"
                    v-text="item[1].value.text"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="pt-0 text-caption text-sm-body-1 grey--text text--darken-2"
                >
                  <span class="text-none" v-text="$t('BIDDERS.TOTAL')" />
                  <v-slide-y-transition leave-absolute hide-on-leave>
                    <span
                      :key="item[1].value.total"
                      class="font-weight-medium"
                      v-text="item[1].value.total"
                    />
                  </v-slide-y-transition>
                </v-col>
              </v-row>
            </v-tab>
          </v-tabs>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-tabs-items v-model="tab" class="elevation-2">
            <v-scale-transition leave-absolute hide-on-leave>
              <app-empty-data v-if="!items.length" src="/images/empty.png" />
            </v-scale-transition>
            <v-tab-item v-for="(tabItem, i) in tabs" :key="i">
              <v-list v-if="items.length" class="py-0">
                <v-slide-y-transition leave-absolute group>
                  <v-list-item key="list-header" class="pa-0">
                    <v-checkbox
                      v-model="checkboxState.isAll"
                      :ripple="false"
                      :color="lightRed"
                      dense
                      hide-details
                      on-icon="mdi-square"
                      class="mt-0 pt-0 ml-2"
                      @change="setToggle"
                    />
                    <v-divider vertical />
                    <v-list-item-content class="px-3 d-block">
                      <v-row>
                        <v-col cols="12" sm="2">
                          <my-page-action-dropdown>
                            {{ $t('BUYERS.ACTIONS.NAME') }}
                          </my-page-action-dropdown>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider key="divider" />
                  <template v-for="(item, idx) in items">
                    <v-divider v-if="idx" :key="`divider-${idx}`" />
                    <shopper-card
                      :id="item.id"
                      :key="`item-${idx}`"
                      :index="idx + 1"
                      :checkbox-state="checkboxState"
                      :username="item.username"
                      :timestamp="item.timestamp"
                      :rating="item.rating"
                      :price="item.price"
                      :bidders="!tab"
                    />
                  </template>
                </v-slide-y-transition>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
      <reject-modal :key="isOpen" :modal="isOpen" />
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
