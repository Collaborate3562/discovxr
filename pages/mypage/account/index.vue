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
          v-text="$t('ACCOUNT_SETTINGS.TITLE')"
        />
        <v-card-text class="py-3">
          <v-row justify="center" class="my-3 my-md-7">
            <v-col cols="12" md="8" lg="7" class="pt-0">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$t('ACCOUNT_SETTINGS.EMAIL')"
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
                    v-text="$tc('ACCOUNT_SETTINGS.PASSWORD', 0)"
                  />
                </template>
                <v-text-field
                  :type="password.current.type.value || password.current.type"
                  :append-icon="
                    password.current.icon.value || field.current.icon
                  "
                  dense
                  outlined
                  class="mt-1"
                  role="button"
                  hide-details="auto"
                  @click:append="password.current.toggleShow"
                />
              </app-field-label>
            </v-col>
            <v-col cols="12" md="8" lg="7" class="pt-0">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$tc('ACCOUNT_SETTINGS.PASSWORD', 1)"
                  />
                </template>
                <v-text-field
                  :type="password.new.type.value || password.new.type"
                  :append-icon="password.new.icon.value || field.new.icon"
                  dense
                  outlined
                  class="mt-1"
                  role="button"
                  hide-details="auto"
                  @click:append="password.new.toggleShow"
                />
              </app-field-label>
            </v-col>
            <v-col cols="12" md="8" lg="7" class="pt-0">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$tc('ACCOUNT_SETTINGS.PASSWORD', 2)"
                  />
                </template>
                <v-text-field
                  :type="password.confirm.type.value || password.confirm.type"
                  :append-icon="
                    password.confirm.icon.value || field.confirm.icon
                  "
                  dense
                  outlined
                  class="mt-1"
                  role="button"
                  hide-details="auto"
                  @click:append="password.confirm.toggleShow"
                />
              </app-field-label>
            </v-col>
            <v-col cols="12" class="d-flex flex-column align-center pt-7">
              <v-btn
                :color="lightBlack"
                large
                width="200"
                elevation="0"
                class="white--text text-capitalize text-h6"
              >
                {{ $t('ACCOUNT_SETTINGS.BUTTON.SAVE') }}
              </v-btn>
              <v-btn
                :to="localePath('/mypage/password-reset')"
                small
                text
                class="text-none mt-2 grey--text text--darken-2"
              >
                {{ $t('ACCOUNT_SETTINGS.FORGOT') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
