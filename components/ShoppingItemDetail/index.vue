<template>
  <v-row>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>
          <v-row class="text-center">
            <v-col class="d-flex flex-column">
              <span
                class="text-body-2 text-sm-body-1 font-weight-medium"
                v-text="$t('ITEM_DETAIL.ITEM_PRICE')"
              />
              <span
                class="my-sm-2 text-body-1 text-sm-h6 text-md-h5 font-weight-bold"
                v-text="price"
              />
              <span
                class="text-caption text-sm-body-2 text-capitalize"
                v-text="$t('ITEM_DETAIL.VARIANTS', { count: variantsCount })"
              />
            </v-col>
            <v-col cols="auto" class="px-0">
              <v-divider vertical />
            </v-col>
            <v-col
              class="d-flex flex-column"
              role="button"
              @click="openHandler"
            >
              <span
                class="text-body-2 text-sm-body-1 font-weight-medium"
                v-text="$t('ITEM_DETAIL.TIME_LEFT')"
              />
              <span
                class="my-sm-2 text-body-1 text-sm-h6 text-md-h5 font-weight-bold text-uppercase"
                v-text="$t('ITEM_DETAIL.DAYS', { timeLeft })"
              />
              <span
                class="text-caption text-sm-body-2 text-capitalize"
                v-text="$t('ITEM_DETAIL.DETAIL')"
              />
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider />
        <v-card-text class="black--text">
          <v-row class="mx-sm-0">
            <v-col cols="12" class="d-flex flex-column">
              <span
                class="text-body-2 text-sm-body-1 text-md-h6 font-weight-medium"
                v-text="$t('ITEM_DETAIL.AVAILABLE_ITEMS')"
              />
              <app-advanced-select />
            </v-col>
            <v-col
              cols="12"
              class="pt-0 pb-2 d-flex flex-column flex-md-row justify-space-between
              text-body-2 text-sm-body-1"
            >
              <span
                class="font-weight-bold"
                v-text="$t('ITEM_DETAIL.DONATION')"
              />
              <span v-text="$t('ITEM_DETAIL.PLEDGED', { percent: donation })" />
            </v-col>
            <v-col
              v-if="!isAnonymous"
              cols="12"
              class="py-0 d-flex justify-space-between text-body-2 text-sm-body-1"
            >
              <v-row class="text-truncate">
                <v-col
                  cols="12"
                  md
                  class="pb-0 pb-md-3 font-weight-bold"
                  v-text="$t('ITEM_DETAIL.PROJECT')"
                />
                <v-col cols="12" md="8" class="pt-0 pt-md-3">
                  <a
                    href="/donations/1/2"
                    class="text-truncate black--text text-decoration-none"
                    target="_blank"
                    v-text="projectName"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" class="py-2 d-flex flex-column">
              <span
                class="text-body-2 text-sm-body-1 font-weight-bold text-capitalize"
                v-text="$t('ITEM_DETAIL.COLOR')"
              />
              <color-selection :colors="colorSelectionData" />
            </v-col>
            <v-col cols="12" class="pt-0 pb-2 d-flex flex-column">
              <span
                class="text-body-2 text-sm-body-1 font-weight-bold text-capitalize"
                v-text="$t('ITEM_DETAIL.SIZE')"
              />
              <size-selection :sizes="sizeSelectionData" />
            </v-col>
            <v-col cols="12">
              <v-btn
                :color="lightRed"
                :x-large="$vuetify.breakpoint.lgAndUp"
                :large="$vuetify.breakpoint.mdAndUp"
                block
                depressed
                class="white--text text-md-h6"
                @click="openShoppingModal"
              >
                {{ $t('ITEM_DETAIL.BUTTON.BUY_NOW') }}
              </v-btn>
            </v-col>
            <v-col cols="12" class="pt-1 pb-3 pt-md-3">
              <v-divider />
            </v-col>
            <v-col cols="12" class="pt-1 pb-0">
              <v-row
                justify="space-between"
                class="text-body-2 text-sm-body-1 text-lg-h6"
              >
                <v-col
                  :cols="colSize ? 12 : 'auto'"
                  :class="{ 'pb-0 pb-md-3': colSize }"
                  class="font-weight-medium text-capitalize"
                  v-text="$t('ITEM_DETAIL.ITEM_SIZE')"
                />
                <v-col
                  :cols="colSize ? 12 : 'auto'"
                  :class="{ 'pt-0 pt-md-3': colSize }"
                  class="text-uppercase font-weight-regular"
                  v-text="'free size'"
                />
              </v-row>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-row
                justify="space-between"
                class="my-n2 text-body-2 text-sm-body-1 text-lg-h6"
              >
                <v-col
                  :cols="colSize ? 12 : 'auto'"
                  :class="{ 'pb-0 pb-md-3': colSize }"
                  class="font-weight-medium text-capitalize"
                  v-text="$t('ITEM_DETAIL.SEND_FROM')"
                />
                <v-col
                  :cols="colSize ? 12 : 'auto'"
                  :class="{ 'pt-0 pt-md-3': colSize }"
                  class="text-capitalize font-weight-regular"
                  v-text="'tokyo'"
                />
              </v-row>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-row
                justify="space-between"
                class="my-n2 text-body-2 text-sm-body-1 text-lg-h6"
              >
                <v-col
                  :cols="colSize ? 12 : 'auto'"
                  :class="{ 'pb-0 pb-md-3': colSize }"
                  class="font-weight-medium text-capitalize"
                  v-text="$t('ITEM_DETAIL.DAYS_TO_SEND')"
                />
                <v-col
                  :cols="colSize ? 12 : 'auto'"
                  :class="{ 'pt-0 pt-md-3': colSize }"
                  class="text-capitalize font-weight-regular"
                  v-text="'1~2 days'"
                />
              </v-row>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-row
                justify="space-between"
                class="my-n2 text-body-2 text-sm-body-1 text-lg-h6"
              >
                <v-col
                  :cols="colSize ? 12 : 'auto'"
                  :class="{ 'pb-0 pb-md-3': colSize }"
                  class="font-weight-medium text-capitalize"
                  v-text="$t('ITEM_DETAIL.FEE')"
                />
                <v-col
                  :cols="colSize ? 12 : 'auto'"
                  :class="{ 'pt-0 pt-md-3': colSize }"
                  class="font-weight-regular"
                  v-text="$t('ITEM_DETAIL.PREPAID')"
                />
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="py-0" cols="12">
      <v-row>
        <v-col>
          <v-btn
            :color="lightRed"
            :large="$vuetify.breakpoint.mdAndUp"
            block
            outlined
          >
            <v-scale-transition leave-absolute>
              <v-icon
                :key="$vuetify.breakpoint.smAndDown"
                :small="$vuetify.breakpoint.smAndDown"
              >
                {{ isAnonymous ? 'mdi-heart-outline' : 'mdi-heart' }}
              </v-icon>
            </v-scale-transition>
            <span v-text="likes" />
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            :large="$vuetify.breakpoint.mdAndUp"
            block
            outlined
            color="grey"
          >
            <v-scale-transition leave-absolute>
              <v-icon
                :key="$vuetify.breakpoint.smAndDown"
                :small="$vuetify.breakpoint.smAndDown"
              >
                mdi-message-text
              </v-icon>
            </v-scale-transition>
            <span v-text="messages" />
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <item-detail-share-menu />
    </v-col>
    <shopping-modal />
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
