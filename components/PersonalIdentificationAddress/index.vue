<template>
  <v-card tile>
    <v-card-title
      class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
      text-body-1 text-sm-h6 font-weight-medium"
      v-text="$t('PERSONAL_IDENTIFICATION.ADDRESS.TITLE')"
    />
    <v-card-text class="py-3 py-sm-5 py-md-10">
      <v-row justify="center">
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
        >
          <app-field-label required>
            <template #label>
              <span
                class="font-weight-medium text-body-1"
                v-text="$t('PERSONAL_IDENTIFICATION.ADDRESS.POSTCODE')"
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
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
        >
          <app-field-label required>
            <template #label>
              <span
                class="font-weight-medium text-body-1"
                v-text="$t('PERSONAL_IDENTIFICATION.ADDRESS.PREFECTURE')"
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
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
        >
          <app-field-label required>
            <template #label>
              <span
                class="font-weight-medium text-body-1"
                v-text="$t('PERSONAL_IDENTIFICATION.ADDRESS.CITY_WARD')"
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
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
        >
          <app-field-label required>
            <template #label>
              <span
                class="font-weight-medium text-body-1"
                v-text="$t('PERSONAL_IDENTIFICATION.ADDRESS.STREET')"
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
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
        >
          <app-field-label optional>
            <template #label>
              <span
                class="font-weight-medium text-body-1"
                v-text="$t('PERSONAL_IDENTIFICATION.ADDRESS.BUILDING')"
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
  </v-card>
</template>

<script src="./index.script.ts"></script>
