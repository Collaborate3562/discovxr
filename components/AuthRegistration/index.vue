<template>
  <v-form
    lazy-validation
    class="grey--text text--darken-2"
    @submit.prevent="onNextHandler"
  >
    <v-row class="py-2 py-sm-3">
      <v-col cols="12">
        <label role="button">
          <span
            class="font-weight-medium"
            v-text="$t('SIGNUP.REGISTRATION.FIELD.USERNAME')"
          />
          <v-text-field
            dense
            outlined
            role="button"
            class="mt-1"
            hide-details="auto"
          />
        </label>
      </v-col>
      <v-col cols="12">
        <label role="button">
          <span
            class="font-weight-medium"
            v-text="$t('SIGNUP.REGISTRATION.FIELD.EMAIL')"
          />
          <v-text-field
            dense
            outlined
            role="button"
            class="mt-1"
            hide-details="auto"
          />
        </label>
      </v-col>
      <v-col cols="12">
        <label role="button">
          <span
            class="font-weight-medium"
            v-text="$tc('SIGNUP.REGISTRATION.FIELD.PASSWORD', 1)"
          />
          <v-text-field
            :type="password.current.type.value || password.current.type"
            :append-icon="password.current.icon.value || password.current.icon"
            dense
            outlined
            role="button"
            class="mt-1"
            hide-details="auto"
            @click:append="password.current.toggleShow"
          />
        </label>
      </v-col>
      <v-col cols="12">
        <label role="button">
          <span
            class="font-weight-medium"
            v-text="$tc('SIGNUP.REGISTRATION.FIELD.PASSWORD', 0)"
          />
          <v-text-field
            :type="password.confirm.type.value || password.confirm.type"
            :append-icon="password.confirm.icon.value || password.confirm.icon"
            dense
            outlined
            role="button"
            class="mt-1"
            hide-details="auto"
            @click:append="password.confirm.toggleShow"
          />
        </label>
      </v-col>
      <v-col v-if="isBlog" cols="12">
        <label role="button">
          <span
            class="font-weight-medium"
            v-text="$tc('SIGNUP.REGISTRATION.FIELD.BLOG', 0)"
          />
          <v-text-field
            dense
            outlined
            role="button"
            class="mt-1"
            hide-details="auto"
          />
        </label>
      </v-col>
      <v-col v-if="isBlog" cols="12">
        <label role="button">
          <span
            class="font-weight-medium"
            v-text="$tc('SIGNUP.REGISTRATION.FIELD.BLOG', 1)"
          />
          <v-text-field
            dense
            outlined
            role="button"
            class="mt-1"
            hide-details="auto"
          />
        </label>
      </v-col>
      <v-col v-if="isBlog" cols="12">
        <label role="button">
          <span
            class="font-weight-medium"
            v-text="$tc('SIGNUP.REGISTRATION.FIELD.BLOG', 2)"
          />
          <app-choose-file
            :accept="accept"
            min-height="180"
            multiple
            max="10"
            class="mt-1"
            text-class="font-weight-medium text--darken-2 text-body-2"
          >
            <template #button>
              <span />
            </template>
            <template #icon>
              <v-icon size="35" color="black" v-text="'mdi-camera'" />
            </template>
            <template #uploaded="{ files, onDeleteHandler }">
              <v-col v-for="file in files" :key="file.name" cols="12" sm="6">
                <app-uploaded-picture-card
                  :file="file"
                  :button-color="lightRed"
                  :on-delete-handler="onDeleteHandler"
                  min-height="180"
                />
              </v-col>
            </template>
          </app-choose-file>
        </label>
      </v-col>
      <v-col cols="12" class="my-sm-3">
        <h3
          class="text-h6 font-weight-bold"
          v-text="$tc('SIGNUP.REGISTRATION.FIELD.IDENTIFICATION', 1)"
        />
        <p
          class="my-1 font-weight-medium"
          v-text="$tc('SIGNUP.REGISTRATION.FIELD.IDENTIFICATION', 0)"
        />
      </v-col>
      <v-slide-y-transition leave-absolute hide-on-leave>
        <v-col v-if="!isJapanRegion" cols="12">
          <span
            class="font-weight-medium"
            v-text="$tc('SIGNUP.REGISTRATION.FIELD.NAME', 0)"
          />
          <v-row>
            <v-col cols="12" sm="6" class="pr-sm-2">
              <v-text-field
                dense
                outlined
                class="mt-1"
                role="button"
                hide-details="auto"
              />
            </v-col>
            <v-col cols="12" sm="6" class="pt-0 pt-sm-3 pl-sm-2">
              <v-text-field
                dense
                outlined
                class="mt-1"
                role="button"
                hide-details="auto"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-slide-y-transition>
      <v-slide-y-reverse-transition leave-absolute hide-on-leave>
        <v-col v-if="isJapanRegion" cols="12">
          <span
            class="font-weight-medium"
            v-text="$tc('SIGNUP.REGISTRATION.FIELD.NAME', 1)"
          />
          <v-row>
            <v-col cols="12" sm="6" class="pr-sm-2">
              <v-text-field
                dense
                outlined
                class="mt-1"
                role="button"
                hide-details="auto"
              />
            </v-col>
            <v-col cols="12" sm="6" class="pt-0 pt-sm-3 pl-sm-2">
              <v-text-field
                dense
                outlined
                class="mt-1"
                role="button"
                hide-details="auto"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-slide-y-reverse-transition>
      <v-slide-y-reverse-transition leave-absolute hide-on-leave>
        <v-col v-if="isJapanRegion" cols="12">
          <span
            class="font-weight-medium"
            v-text="$tc('SIGNUP.REGISTRATION.FIELD.NAME', 2)"
          />
          <v-row>
            <v-col cols="12" sm="6" class="pr-sm-2">
              <v-text-field
                dense
                outlined
                class="mt-1"
                role="button"
                hide-details="auto"
              />
            </v-col>
            <v-col cols="12" sm="6" class="pt-0 pt-sm-3 pl-sm-2">
              <v-text-field
                dense
                outlined
                class="mt-1"
                role="button"
                hide-details="auto"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-slide-y-reverse-transition>
      <v-col cols="12">
        <span
          class="font-weight-medium"
          v-text="$t('SIGNUP.REGISTRATION.FIELD.BIRTHDAY')"
        />
        <v-row>
          <v-col cols="12" sm="4" class="pr-sm-1">
            <v-select
              class="mt-1"
              outlined
              dense
              hide-details
              append-icon="mdi-chevron-down"
            />
          </v-col>
          <v-col cols="12" sm="4" class="px-sm-1 pt-0 pt-sm-3">
            <v-select
              class="mt-1"
              outlined
              dense
              hide-details
              append-icon="mdi-chevron-down"
            />
          </v-col>
          <v-col cols="12" sm="4" class="pl-sm-1 pt-0 pt-sm-3">
            <v-select
              class="mt-1"
              outlined
              dense
              hide-details
              append-icon="mdi-chevron-down"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-slide-y-reverse-transition leave-absolute hide-on-leave>
        <v-col cols="12" class="pt-0">
          <span
            class="text-caption"
            v-text="$t('SIGNUP.REGISTRATION.VALIDATION_NOTICE')"
          />
        </v-col>
      </v-slide-y-reverse-transition>
      <v-col cols="12" class="mt-sm-5 pb-0">
        <span
          class="text-body-2 font-weight-medium"
          v-text="$t('SIGNUP.REGISTRATION.AGREE')"
        />
      </v-col>
      <v-col cols="12">
        <v-btn
          :color="lightRed"
          :x-large="$vuetify.breakpoint.mdAndUp"
          large
          block
          elevation="0"
          type="submit"
          class="text-none white--text text-body-2"
        >
          {{ $tc('SIGNUP.BUTTON', 0) }}
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts" src="./index.script.ts"></script>
