<template>
  <v-card tile flat color="grey lighten-4">
    <v-card-text>
      <v-row>
        <v-col cols="12" class="d-flex flex-column py-1 py-md-2 pb-lg-1">
          <span
            class="text-caption text-md-body-2 font-weight-bold"
            v-text="$t('DONATION.DETAIL.AMOUNT')"
          />
          <span
            class="text-h6 text-md-h5 text-lg-h4 font-weight-medium"
            v-text="amount"
          />
        </v-col>
        <v-col cols="12" class="d-flex flex-column py-1 py-md-2 pb-lg-1">
          <span
            class="text-caption text-md-body-2 font-weight-bold"
            v-text="$t('DONATION.DETAIL.INFLUENCERS')"
          />
          <span
            class="text-h6 text-md-h5 text-lg-h4 font-weight-medium"
            v-text="influencers"
          />
        </v-col>
        <v-col cols="12" class="d-flex flex-column py-1 py-md-2 pb-lg-1">
          <span
            class="text-caption text-md-body-2 font-weight-bold"
            v-text="$t('DONATION.DETAIL.CONTRIBUTORS')"
          />
          <span
            class="text-h6 text-md-h5 text-lg-h4 font-weight-medium"
            v-text="contributors"
          />
        </v-col>
        <v-scale-transition leave-absolute>
          <v-col
            v-if="isProject"
            cols="12"
            class="d-flex flex-column py-1 py-md-2 pb-lg-1"
          >
            <span
              class="text-caption text-md-body-2 font-weight-bold"
              v-text="$t('DONATION.DETAIL.LEFT_DAYS')"
            />
            <span
              class="text-h6 text-md-h5 text-lg-h4 font-weight-medium"
              v-text="$t('DONATION.DETAIL.DAYS', { count: leftDays })"
            />
          </v-col>
        </v-scale-transition>
        <v-col cols="12" class="mt-md-3 mt-lg-7">
          <v-btn
            :color="lightBlack"
            tile
            block
            large
            depressed
            class="text-none white--text text-h6"
          >
            {{ $t('DONATION.BUTTON.CHECK') }}
          </v-btn>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-btn
            :color="lightRed"
            tile
            block
            large
            depressed
            class="text-none white--text text-h6"
          >
            {{ $t('DONATION.BUTTON.DONATE') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
