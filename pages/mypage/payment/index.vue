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
          class="grey lighten-4 pl-md-7 py-3 grey--text
          text--darken-2 text-body-1 text-sm-h6 font-weight-medium"
          v-text="$t('PAYMENT_METHOD.TITLE')"
        />
        <v-card-text class="py-3">
          <v-row justify="center" class="my-3 my-md-7">
            <v-col cols="12" md="8" lg="7" class="pt-0">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$t('PAYMENT_METHOD.CARD_NUMBER')"
                  />
                </template>
                <v-text-field
                  dense
                  outlined
                  class="my-1"
                  role="button"
                  hide-details="auto"
                />
                <payment-card-types
                  :width="$vuetify.breakpoint.mdAndUp ? 110 : 90"
                  :height="$vuetify.breakpoint.mdAndUp ? 20 : 18"
                />
              </app-field-label>
            </v-col>
            <v-col cols="12" md="8" lg="7" class="pt-0">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$t('PAYMENT_METHOD.CARD_NAME')"
                  />
                </template>
                <v-text-field
                  dense
                  outlined
                  class="mt-1"
                  role="button"
                  hide-details="auto"
                />
              </app-field-label>
            </v-col>
            <v-col cols="12" md="8" lg="7" class="pt-0">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$t('PAYMENT_METHOD.EXPIRATION_DATE')"
                  />
                </template>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      dense
                      outlined
                      class="mt-1"
                      role="button"
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="12" sm="6" class="pl-sm-0 pt-0 pt-sm-3">
                    <v-text-field
                      dense
                      outlined
                      class="mt-1"
                      role="button"
                      hide-details="auto"
                    />
                  </v-col>
                </v-row>
              </app-field-label>
            </v-col>
            <v-col cols="12" md="8" lg="7" class="pt-0">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$t('PAYMENT_METHOD.SECURITY_CODE')"
                  />
                </template>
                <v-text-field
                  dense
                  outlined
                  class="mt-1"
                  role="button"
                  hide-details="auto"
                />
              </app-field-label>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="py-7">
          <v-btn
            :color="lightBlack"
            large
            width="200"
            elevation="0"
            class="white--text text-h6 text-capitalize mx-auto"
          >
            {{ $t('PAYMENT_METHOD.BUTTON') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
