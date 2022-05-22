<template>
  <v-card tile flat color="grey lighten-4">
    <v-card-text class="px-0">
      <v-container class="mx-auto py-0 container-max-width">
        <v-row :class="{ 'my-0': $vuetify.breakpoint.width < 768 }">
          <v-col cols="12" sm="4">
            <app-filter-modal-field-label :label="$t('DEALS.FILTER.KEYWORD')">
              <v-text-field
                solo
                dense
                clearable
                hide-details
                role="button"
                class="mt-1 rounded-0"
              />
            </app-filter-modal-field-label>
          </v-col>
          <v-col cols="12" sm="4">
            <app-filter-modal-field-label :label="$t('DEALS.FILTER.DEAL_TYPE')">
              <v-select
                solo
                dense
                hide-details
                class="mt-1 rounded-0"
                append-icon="mdi-chevron-down"
              />
            </app-filter-modal-field-label>
          </v-col>
          <v-col cols="12" sm="4">
            <app-filter-modal-field-label :label="$t('DEALS.FILTER.CATEGORY')">
              <v-select
                solo
                dense
                hide-details
                class="mt-1 rounded-0"
                append-icon="mdi-chevron-down"
              />
            </app-filter-modal-field-label>
          </v-col>
          <v-slide-y-transition leave-absolute hide-on-leave>
            <v-col v-if="isOptionsVisible" cols="12" sm="4">
              <app-filter-modal-field-label :label="$t('DEALS.FILTER.BRAND')">
                <v-select
                  solo
                  dense
                  hide-details
                  class="mt-1 rounded-0"
                  append-icon="mdi-chevron-down"
                />
              </app-filter-modal-field-label>
            </v-col>
          </v-slide-y-transition>
          <v-slide-y-transition leave-absolute hide-on-leave>
            <v-col v-if="isOptionsVisible" cols="12" sm="4">
              <app-filter-modal-field-label
                :label="$t('DEALS.FILTER.ITEM_CONDITION')"
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
          </v-slide-y-transition>
          <v-slide-y-transition leave-absolute hide-on-leave>
            <v-col v-if="isOptionsVisible" cols="12" sm="4">
              <app-filter-modal-field-label
                :label="$t('DEALS.FILTER.COVERED_BY')"
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
          </v-slide-y-transition>
          <v-slide-y-transition leave-absolute hide-on-leave>
            <v-col v-if="isOptionsVisible" cols="12" sm="4">
              <app-filter-modal-field-label
                :label="$t('DEALS.FILTER.COVERED_BY')"
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
          </v-slide-y-transition>
          <v-slide-y-transition leave-absolute hide-on-leave>
            <v-col v-if="isOptionsVisible" cols="12" sm="4">
              <app-filter-modal-field-label :label="$t('DEALS.FILTER.PRICE')">
                <v-range-slider
                  :color="lightRed"
                  class="black--text"
                  thumb-label="always"
                  thumb-color="white"
                  track-color="grey lighten-2"
                />
              </app-filter-modal-field-label>
            </v-col>
          </v-slide-y-transition>
          <v-slide-y-transition leave-absolute hide-on-leave>
            <v-col v-if="isOptionsVisible" cols="12" sm="4">
              <app-filter-modal-field-label
                :label="$t('DEALS.FILTER.DONATIONS')"
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
          </v-slide-y-transition>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions class="px-0">
      <v-container class="mx-auto py-0 container-max-width">
        <v-row class="my-0 mt-sm-n3">
          <v-slide-y-transition leave-absolute hide-on-leave>
            <v-col
              v-if="!isOptionsVisible && $vuetify.breakpoint.width >= 768"
              cols="12"
            >
              <v-btn
                :color="lightRed"
                outlined
                large
                block
                class="text-none font-weight-regular text-h6"
                @click="setIsOptionsVisible(true)"
              >
                {{ $t('DEALS.BUTTON.SHOW_MORE') }}
              </v-btn>
            </v-col>
          </v-slide-y-transition>
          <v-slide-y-reverse-transition leave-absolute hide-on-leave>
            <v-col
              v-if="isOptionsVisible && $vuetify.breakpoint.width >= 768"
              cols="12"
              sm
            >
              <v-btn
                :color="lightRed"
                outlined
                large
                block
                class="text-none font-weight-regular text-h6"
                @click="setIsOptionsVisible(false)"
              >
                {{ $t('DEALS.BUTTON.CLOSE') }}
              </v-btn>
            </v-col>
          </v-slide-y-reverse-transition>
          <v-slide-y-reverse-transition leave-absolute hide-on-leave>
            <v-col v-if="isOptionsVisible" class="pt-0 pt-sm-3" cols="12" sm>
              <v-btn
                :color="lightRed"
                outlined
                large
                block
                class="text-none font-weight-regular text-h6"
              >
                {{ $t('DEALS.BUTTON.SEARCH') }}
              </v-btn>
            </v-col>
          </v-slide-y-reverse-transition>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
