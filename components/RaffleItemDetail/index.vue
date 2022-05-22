<template>
  <v-row>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>
          <v-row class="text-center">
            <v-col class="d-flex flex-column">
              <span
                class="text-body-2 text-sm-body-1 font-weight-medium"
                v-text="$t('ITEM_DETAIL.SINGLE_ENTRY')"
              />
              <span
                class="my-sm-2 text-body-1 text-sm-h6 text-md-h5 font-weight-bold"
                v-text="entry"
              />
              <span
                class="text-caption text-sm-body-2 text-capitalize"
                v-text="$t('ITEM_DETAIL.RULE')"
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
            <v-col
              cols="12"
              class="text-h6 text-sm-h5 text-md-h4 font-weight-bold"
              v-text="title"
            />
            <v-col
              cols="12"
              class="pt-0 pb-2 d-flex flex-column text-body-2 text-sm-body-1"
            >
              <span
                class="font-weight-bold"
                v-text="$t('ITEM_DETAIL.DONATION')"
              />
              <span v-text="$t('ITEM_DETAIL.PLEDGED', { percent: donation })" />
            </v-col>
            <v-col
              cols="12"
              class="pt-0 pb-2 d-flex flex-column text-body-2 text-sm-body-1"
            >
              <span
                class="font-weight-bold"
                v-text="$t('ITEM_DETAIL.DONATE_TO')"
              />
              <a
                href="/donations/1"
                class="black--text text-decoration-none"
                target="_blank"
                v-text="donateTo"
              />
            </v-col>
            <v-col cols="12">
              <v-btn
                :color="lightRed"
                :x-large="$vuetify.breakpoint.lgAndUp"
                :large="$vuetify.breakpoint.mdAndUp"
                block
                depressed
                class="white--text text-md-h6"
                @click="openDrawRaffleModal"
              >
                {{ $t('ITEM_DETAIL.BUTTON.DRAW_RAFFLE') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="pt-0">
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
    <draw-raffle-modal />
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
