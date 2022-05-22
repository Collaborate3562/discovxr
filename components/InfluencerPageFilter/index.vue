<template>
  <div>
    <v-row class="my-0">
      <v-col>
        <v-text-field
          :placeholder="$t('INFLUENCERS.FILTER.PLACEHOLDER')"
          hide-details
          clearable
          solo
          role="button"
          class="rounded-0"
        />
      </v-col>
      <v-slide-y-transition leave-absolute>
        <v-col v-if="$vuetify.breakpoint.width >= 768" cols="auto">
          <v-btn
            :color="lightRed"
            :x-large="$vuetify.breakpoint.lgAndUp"
            large
            tile
            block
            depressed
            height="100%"
            class="text-capitalize white--text text-body-1 text-md-h6 font-weight-medium"
            @click="open"
          >
            {{ $t('INFLUENCERS.BUTTON.SEARCH_FILTER') }}
          </v-btn>
        </v-col>
      </v-slide-y-transition>
    </v-row>
    <app-modal-window
      v-if="$vuetify.breakpoint.width >= 768"
      :key="isOpen"
      :modal="isOpen"
      max-width="1240"
      content-class="ml-6"
      @close="close"
    >
      <template #title>
        <v-row justify="end">
          <v-col cols="auto" class="pb-0">
            <v-btn fab icon small @click="close">
              <v-icon size="30">
                mdi-close
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <template #body>
        <v-row justify="center" class="mb-0">
          <v-col cols="11" md="10">
            <v-row>
              <v-col cols="6" md="4">
                <app-filter-modal-field-label
                  :label="$t('INFLUENCERS.FILTER.SNS')"
                >
                  <v-select
                    solo
                    dense
                    hide-details
                    class="mt-1 rounded-0"
                    append-icon="mdi-chevron-down"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="6" md="4">
                <app-filter-modal-field-label
                  :label="$t('INFLUENCERS.FILTER.COUNTRY')"
                >
                  <v-select
                    solo
                    dense
                    hide-details
                    class="mt-1 rounded-0"
                    append-icon="mdi-chevron-down"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="6" md="4">
                <app-filter-modal-field-label
                  :label="$t('INFLUENCERS.FILTER.STATUS')"
                >
                  <v-select
                    solo
                    dense
                    hide-details
                    class="mt-1 rounded-0"
                    append-icon="mdi-chevron-down"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="6" md="4">
                <app-filter-modal-field-label
                  :label="$t('INFLUENCERS.FILTER.CATEGORY')"
                >
                  <v-select
                    solo
                    dense
                    hide-details
                    class="mt-1 rounded-0"
                    append-icon="mdi-chevron-down"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="6" md="4">
                <app-filter-modal-field-label
                  :label="$tc('INFLUENCERS.FILTER.GENDER', 0)"
                >
                  <v-btn-toggle
                    :color="lightRed"
                    tile
                    borderless
                    class="d-flex mt-1"
                  >
                    <v-btn
                      tile
                      depressed
                      width="50%"
                      height="40"
                      class="text-none"
                    >
                      {{ $tc('INFLUENCERS.FILTER.GENDER', 1) }}
                    </v-btn>
                    <v-btn
                      tile
                      depressed
                      width="50%"
                      height="40"
                      class="text-none"
                    >
                      {{ $tc('INFLUENCERS.FILTER.GENDER', 2) }}
                    </v-btn>
                  </v-btn-toggle>
                </app-filter-modal-field-label>
              </v-col>
            </v-row>
            <v-row class="mb-0">
              <v-col cols="6" md="4">
                <app-filter-modal-field-label
                  :label="$tc('INFLUENCERS.FILTER.RANGE_SLIDER', 0)"
                >
                  <v-range-slider
                    :color="lightRed"
                    class="black--text"
                    thumb-label="always"
                    thumb-color="white"
                    track-color="grey lighten-2"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="6" md="4">
                <app-filter-modal-field-label
                  :label="$tc('INFLUENCERS.FILTER.RANGE_SLIDER', 1)"
                >
                  <v-range-slider
                    :color="lightRed"
                    class="black--text"
                    thumb-label="always"
                    thumb-color="white"
                    track-color="grey lighten-2"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="6" md="4">
                <app-filter-modal-field-label
                  :label="$tc('INFLUENCERS.FILTER.RANGE_SLIDER', 2)"
                >
                  <v-range-slider
                    :color="lightRed"
                    class="black--text"
                    thumb-label="always"
                    thumb-color="white"
                    track-color="grey lighten-2"
                  />
                </app-filter-modal-field-label>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>
      <template #actions>
        <v-row justify="center" class="my-0">
          <v-col cols="5">
            <v-btn
              :large="$vuetify.breakpoint.mdAndUp"
              :color="lightRed"
              block
              outlined
              class="text-body-1 text-md-h6 font-weight-regular"
            >
              {{ $t('INFLUENCERS.BUTTON.SEARCH') }}
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </app-modal-window>
    <client-only>
      <v-bottom-sheet
        v-if="$vuetify.breakpoint.xsOnly"
        v-model="isOpen"
        scrollable
      >
        <v-card tile flat>
          <v-card-text class="px-4">
            <v-row class="my-0">
              <v-col cols="12">
                <app-filter-modal-field-label
                  :label="$t('INFLUENCERS.FILTER.SNS')"
                >
                  <v-select
                    solo
                    dense
                    hide-details
                    class="mt-1 rounded-0"
                    append-icon="mdi-chevron-down"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="12">
                <app-filter-modal-field-label
                  :label="$t('INFLUENCERS.FILTER.COUNTRY')"
                >
                  <v-select
                    solo
                    dense
                    hide-details
                    class="mt-1 rounded-0"
                    append-icon="mdi-chevron-down"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="12">
                <app-filter-modal-field-label
                  :label="$t('INFLUENCERS.FILTER.STATUS')"
                >
                  <v-select
                    solo
                    dense
                    hide-details
                    class="mt-1 rounded-0"
                    append-icon="mdi-chevron-down"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="12">
                <app-filter-modal-field-label
                  :label="$t('INFLUENCERS.FILTER.CATEGORY')"
                >
                  <v-select
                    solo
                    dense
                    hide-details
                    class="mt-1 rounded-0"
                    append-icon="mdi-chevron-down"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="12">
                <app-filter-modal-field-label
                  :label="$tc('INFLUENCERS.FILTER.GENDER', 0)"
                >
                  <v-btn-toggle
                    :color="lightRed"
                    tile
                    borderless
                    class="d-flex mt-1"
                  >
                    <v-btn
                      tile
                      depressed
                      width="50%"
                      height="40"
                      class="text-none"
                    >
                      {{ $tc('INFLUENCERS.FILTER.GENDER', 1) }}
                    </v-btn>
                    <v-btn
                      tile
                      depressed
                      width="50%"
                      height="40"
                      class="text-none"
                    >
                      {{ $tc('INFLUENCERS.FILTER.GENDER', 2) }}
                    </v-btn>
                  </v-btn-toggle>
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="12">
                <app-filter-modal-field-label
                  :label="$tc('INFLUENCERS.FILTER.RANGE_SLIDER', 0)"
                >
                  <v-range-slider
                    :color="lightRed"
                    class="black--text"
                    thumb-label="always"
                    thumb-color="white"
                    track-color="grey lighten-2"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="12">
                <app-filter-modal-field-label
                  :label="$tc('INFLUENCERS.FILTER.RANGE_SLIDER', 1)"
                >
                  <v-range-slider
                    :color="lightRed"
                    class="black--text"
                    thumb-label="always"
                    thumb-color="white"
                    track-color="grey lighten-2"
                  />
                </app-filter-modal-field-label>
              </v-col>
              <v-col cols="12">
                <app-filter-modal-field-label
                  :label="$tc('INFLUENCERS.FILTER.RANGE_SLIDER', 2)"
                >
                  <v-range-slider
                    :color="lightRed"
                    class="black--text"
                    thumb-label="always"
                    thumb-color="white"
                    track-color="grey lighten-2"
                  />
                </app-filter-modal-field-label>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row class="my-0">
              <v-col cols="12">
                <v-btn
                  :color="lightRed"
                  block
                  outlined
                  class="text-body-1 text-md-h6 font-weight-regular"
                >
                  {{ $t('INFLUENCERS.BUTTON.SEARCH') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-bottom-sheet>
    </client-only>
    <v-scale-transition leave-absolute>
      <v-btn
        v-if="$vuetify.breakpoint.width < 768"
        :color="lightRed"
        :class="{ 'button-position': $vuetify.breakpoint.xsOnly }"
        fab
        fixed
        right
        bottom
        @click="open"
      >
        <v-icon color="white">
          mdi-filter
        </v-icon>
      </v-btn>
    </v-scale-transition>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
