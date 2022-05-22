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
          v-text="$t('SHIPMENT_DELIVERY.TITLE')"
        />
        <v-card-text class="py-3">
          <v-row justify="center" class="my-3 my-md-7">
            <v-slide-y-transition leave-absolute>
              <v-col v-if="isJapan" cols="12" md="8" lg="7" class="pt-0">
                <app-field-label required>
                  <template #label>
                    <span
                      class="font-weight-medium text-body-1"
                      v-text="$tc('SHIPMENT_DELIVERY.NAME_NAKJI_KATAKANA', 1)"
                    />
                  </template>
                  <v-text-field
                    dense
                    outlined
                    class="mt-1"
                    role="button"
                    hide-details="auto"
                  />
                  <v-text-field
                    dense
                    outlined
                    class="mt-1"
                    role="button"
                    hide-details="auto"
                  />
                </app-field-label>
              </v-col>
            </v-slide-y-transition>
            <v-slide-y-transition leave-absolute>
              <v-col v-if="isJapan" cols="12" md="8" lg="7" class="pt-0">
                <app-field-label required>
                  <template #label>
                    <span
                      class="font-weight-medium text-body-1"
                      v-text="$tc('SHIPMENT_DELIVERY.NAME_NAKJI_KATAKANA', 0)"
                    />
                  </template>
                  <v-text-field
                    dense
                    outlined
                    class="mt-1"
                    role="button"
                    hide-details="auto"
                  />
                  <v-text-field
                    dense
                    outlined
                    class="mt-1"
                    role="button"
                    hide-details="auto"
                  />
                </app-field-label>
              </v-col>
            </v-slide-y-transition>
            <v-slide-y-reverse-transition leave-absolute>
              <v-col v-if="!isJapan" cols="12" md="8" lg="7" class="pt-0">
                <app-field-label required>
                  <template #label>
                    <span
                      class="font-weight-medium text-body-1"
                      v-text="$tc('SHIPMENT_DELIVERY.NAME_FIELDS', 1)"
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
            </v-slide-y-reverse-transition>
            <v-slide-y-reverse-transition leave-absolute>
              <v-col v-if="!isJapan" cols="12" md="8" lg="7" class="pt-0">
                <app-field-label required>
                  <template #label>
                    <span
                      class="font-weight-medium text-body-1"
                      v-text="$tc('SHIPMENT_DELIVERY.NAME_FIELDS', 0)"
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
            </v-slide-y-reverse-transition>
            <v-col cols="12" md="8" lg="7" class="pt-0">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$t('SHIPMENT_DELIVERY.POST_CODE')"
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
                    v-text="$t('SHIPMENT_DELIVERY.PREFECTURE')"
                  />
                </template>
                <v-select
                  dense
                  outlined
                  class="mt-1"
                  hide-details
                  append-icon="mdi-chevron-down"
                />
              </app-field-label>
            </v-col>
            <v-col cols="12" md="8" lg="7" class="pt-0">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$t('SHIPMENT_DELIVERY.CITY')"
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
                    v-text="$t('SHIPMENT_DELIVERY.STREET')"
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
              <app-field-label optional>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$t('SHIPMENT_DELIVERY.BUILDING')"
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
              <app-field-label optional>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$t('SHIPMENT_DELIVERY.PHONE')"
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
            {{ $t('SHIPMENT_DELIVERY.BUTTON') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
