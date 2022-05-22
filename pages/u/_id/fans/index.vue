<template>
  <v-row class="my-0">
    <v-col cols="12">
      <user-detail-card
        :id="userId"
        :avatar="avatar"
        :username="username"
        :details="details"
        class="pb-3"
      />
    </v-col>
    <v-col cols="12" class="pt-0">
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
                    <user-fan-card
                      :key="`fan-${item.id}`"
                      :is-follow="item.isFollow"
                      :avatar="item.avatar"
                      :username="item.username"
                      :introduction="item.introduction"
                      :deals="item.deals"
                      :donations="item.donations"
                      :sns-details="item.snsDetails"
                      :rating="item.rating"
                    />
                  </template>
                </v-slide-y-transition>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
