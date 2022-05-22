<template>
  <v-form lazy-validation @submit.prevent="onSubmitHandler">
    <v-row class="py-2 py-sm-3">
      <v-col cols="12">
        <p v-text="$tc('RESET_PASSWORD.SUBTITLE', 1)" />
        <ul>
          <li
            v-for="text in $t('RESET_PASSWORD.LIST')"
            :key="text"
            v-text="text"
          />
        </ul>
      </v-col>
      <v-col cols="12">
        <label role="button">
          <span
            class="text-sm-subtitle-1 font-weight-bold"
            v-text="$tc('RESET_PASSWORD.FIELD', 1)"
          />
          <v-text-field
            :type="password.new.type.value || password.new.type"
            :append-icon="password.new.icon.value || field.new.icon"
            outlined
            role="button"
            hide-details="auto"
            @click:append="password.new.toggleShow"
          />
        </label>
      </v-col>
      <v-col cols="12">
        <label role="button">
          <span
            class="text-sm-subtitle-1 font-weight-bold"
            v-text="$tc('RESET_PASSWORD.FIELD', 0)"
          />
          <v-text-field
            :type="password.confirm.type.value || password.confirm.type"
            :append-icon="password.confirm.icon.value || field.confirm.icon"
            outlined
            role="button"
            hide-details="auto"
            @click:append="password.confirm.toggleShow"
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
          {{ $tc('RESET_PASSWORD.BUTTON', 1) }}
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts" src="./index.script.ts"></script>
