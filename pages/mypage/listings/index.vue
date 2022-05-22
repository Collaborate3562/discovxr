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
                    <v-divider :key="`divider-${idx}`" />
                    <in-progress-card
                      v-if="isInProgress(tabItem[0])"
                      :id="item.id"
                      :key="`item-${item.id}`"
                      :image="item.image"
                      :title="item.title"
                      :timestamp="item.timestamp"
                      :deal-type="item.dealType"
                      sold
                    />
                    <comment-card
                      v-else-if="isComments(tabItem[0])"
                      :key="`item-${item.id}`"
                      :image="item.image"
                      :title="item.title"
                      :username="item.username"
                      :message="item.message"
                      :timestamp="item.timestamp"
                      :deal-type="item.dealType"
                      :replied="item.replied"
                      sold
                    />
                    <completed-card
                      v-else
                      :key="`item-${item.id}`"
                      :image="item.image"
                      :title="item.title"
                      :timestamp="item.timestamp"
                      :deal-type="item.dealType"
                      :status="item.status"
                      sold
                    />
                  </template>
                </v-slide-y-transition>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
      <send-item-modal :key="isOpen" :modal="isOpen" />
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
