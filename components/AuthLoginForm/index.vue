<template>
  <v-form lazy-validation @submit.prevent>
    <v-row class="py-2 py-sm-3">
      <v-col cols="12">
        <label role="button">
          <span
            class="text-sm-subtitle-1 font-weight-bold"
            v-text="$tc('LOGIN.FIELD', 1)"
          />
          <v-text-field outlined role="button" hide-details="auto" />
        </label>
      </v-col>
      <v-col cols="12">
        <label role="button">
          <span
            class="text-sm-subtitle-1 font-weight-bold"
            v-text="$tc('LOGIN.FIELD', 0)"
          />
          <v-text-field
            :type="type.value || type"
            :append-icon="icon.value || icon"
            outlined
            role="button"
            hide-details="auto"
            @click:append="toggleShow"
          />
        </label>
      </v-col>
      <v-col cols="12">
        <v-btn
          :color="buttonColor"
          :x-large="$vuetify.breakpoint.mdAndUp"
          large
          block
          type="submit"
          elevation="0"
          class="text-none white--text text-body-2"
        >
          {{ $tc('LOGIN.BUTTON', 1) }}
        </v-btn>
      </v-col>
      <v-col cols="12" class="pt-0 text-center">
        <v-btn
          :color="buttonColor"
          x-small
          text
          class="text-none"
          @click="setIsLoginForm(false)"
        >
          {{ $t('LOGIN.BACK') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts" src="./index.script.ts"></script>
