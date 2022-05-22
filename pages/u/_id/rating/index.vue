<template>
  <v-row class="my-0">
    <v-col v-if="$vuetify.breakpoint.width >= 768" sm="4" md="3">
      <my-page-sidebar />
    </v-col>
    <v-col
      :class="{ 'pl-3': $vuetify.breakpoint.width < 768 }"
      class="pl-0 pl-lg-3 pr-lg-0"
    >
      <v-card tile>
        <v-card-title
          class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
          text-body-1 text-sm-h6 font-weight-medium"
          v-text="$t('USER_RATING.TITLE')"
        />
        <v-card-text class="py-3 pb-sm-7">
          <v-row justify="center">
            <v-col cols="12">
              <v-alert
                :color="alertLightRed"
                tile
                class="grey--text text--darken-2 mb-0"
              >
                <h3
                  class="mb-1 text-h6 font-weight-bold"
                  v-text="$t('USER_RATING.ALERT.TITLE')"
                />
                <span
                  class="text-body-1"
                  v-text="$t('USER_RATING.ALERT.SUBTITLE')"
                />
              </v-alert>
            </v-col>
            <!-- TODO: add condition for buyer/seller -->
            <v-col cols="12" class="py-sm-7 d-flex justify-center">
              <v-checkbox
                :ripple="false"
                :label="$t('USER_RATING.CONFIRM_LABEL')"
                hide-details
                color="success"
                class="mt-0"
              />
            </v-col>
            <v-col cols="auto" class="pb-7">
              <v-radio-group row dense hide-details class="mt-0 pt-0">
                <v-row justify="center" align="center">
                  <v-col
                    v-for="item in emotionItems"
                    :key="item.value"
                    cols="auto"
                    class="d-flex justify-center"
                  >
                    <label
                      role="button"
                      class="d-flex flex-column align-center"
                    >
                      <v-scale-transition leave-absolute>
                        <component
                          :is="item.icon.value"
                          :key="$vuetify.breakpoint.xsOnly"
                          :width="$vuetify.breakpoint.xsOnly ? 30 : 50"
                          :height="$vuetify.breakpoint.xsOnly ? 30 : 50"
                          class="mx-auto"
                        />
                      </v-scale-transition>
                      <span
                        class="text-caption text-sm-body-1 grey--text text--darken-2 my-1 my-sm-2"
                        v-text="$t(item.text)"
                      />
                      <v-radio
                        :value="item.value"
                        :color="lightRed"
                        :ripple="false"
                        class="justify-center mr-0"
                      />
                    </label>
                  </v-col>
                </v-row>
              </v-radio-group>
            </v-col>
            <v-col cols="12">
              <v-textarea
                :placeholder="$t('USER_RATING.PLACEHOLDER')"
                dense
                rows="5"
                outlined
                no-resize
                hide-details
                role="button"
                class="mt-1 rounded-0 text-caption text-sm-body-2 text-md-body-1"
                color="grey lighten-3"
                background-color="grey lighten-5"
              />
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-btn
                :x-large="$vuetify.breakpoint.smAndUp"
                :color="lightBlack"
                tile
                block
                depressed
                class="white--text text-none text-body-2 text-sm-h6 font-weight-medium"
              >
                {{ $t('USER_RATING.BUTTON') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-title
          class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
          text-body-1 text-sm-h6 font-weight-medium"
          v-text="$t('USER_RATING.ITEM_DESCRIPTION')"
        />
        <v-card-text class="py-3">
          <v-list class="py-0">
            <v-list-item class="px-0 px-sm-3">
              <v-list-item-avatar
                rounded="lg"
                size="50"
                class="align-self-start mt-3"
              >
                <v-img :src="item.image" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  class="title-line-clamp text-body-1 text-md-h6 font-weight-medium"
                  v-text="item.title"
                />
              </v-list-item-content>
            </v-list-item>
            <div class="px-sm-4 display-grid">
              <span class="d-none d-sm-block" />
              <v-list-item-content
                :class="
                  $vuetify.breakpoint.width < 490
                    ? 'text-caption'
                    : 'text-body-1'
                "
                class="grey--text text--darken-2"
              >
                <v-row class="my-0" align="center">
                  <v-col
                    :cols="$vuetify.breakpoint.width < 390 ? 5 : 4"
                    md="3"
                    lg="2"
                    class="font-weight-medium pb-0 pb-sm-2"
                    v-text="$t('USER_RATING.PRICE')"
                  />
                  <v-col
                    cols="7"
                    sm="8"
                    md="9"
                    lg="10"
                    class="pb-0 pb-sm-2"
                    v-text="item.price"
                  />
                  <v-col
                    :cols="$vuetify.breakpoint.width < 390 ? 5 : 4"
                    md="3"
                    lg="2"
                    class="font-weight-medium pb-0 pb-sm-2"
                    v-text="$t('USER_RATING.COUPONS')"
                  />
                  <v-col
                    cols="7"
                    sm="8"
                    md="9"
                    lg="10"
                    class="pb-0 pb-sm-2"
                    v-text="item.coupons"
                  />
                  <v-col
                    :cols="$vuetify.breakpoint.width < 390 ? 5 : 4"
                    md="3"
                    lg="2"
                    class="font-weight-medium pb-0 pb-sm-2"
                    v-text="$t('USER_RATING.POINT_USAGE')"
                  />
                  <v-col
                    cols="7"
                    sm="8"
                    md="9"
                    lg="10"
                    class="pb-0 pb-sm-2"
                    v-text="item.pointUsage"
                  />
                  <v-col
                    :cols="$vuetify.breakpoint.width < 390 ? 5 : 4"
                    md="3"
                    lg="2"
                    class="font-weight-medium pb-0 pb-sm-2"
                    v-text="$t('USER_RATING.DELIVERY_COSTS')"
                  />
                  <v-col
                    cols="7"
                    sm="8"
                    md="9"
                    lg="10"
                    class="pb-0 pb-sm-2"
                    v-text="item.deliveryCosts"
                  />
                  <v-col
                    :cols="$vuetify.breakpoint.width < 390 ? 5 : 4"
                    md="3"
                    lg="2"
                    class="font-weight-medium pb-0 pb-sm-2"
                    v-text="$tc('USER_RATING.DATE', 1)"
                  />
                  <v-col
                    cols="7"
                    sm="8"
                    md="9"
                    lg="10"
                    class="pb-0 pb-sm-2"
                    v-text="item.startDate"
                  />
                  <v-col
                    :cols="$vuetify.breakpoint.width < 390 ? 5 : 4"
                    md="3"
                    lg="2"
                    class="font-weight-medium pb-0 pb-sm-2"
                    v-text="$tc('USER_RATING.DATE', 0)"
                  />
                  <v-col
                    cols="7"
                    sm="8"
                    md="9"
                    lg="10"
                    class="pb-0 pb-sm-2"
                    v-text="item.endDate"
                  />
                </v-row>
              </v-list-item-content>
            </div>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
