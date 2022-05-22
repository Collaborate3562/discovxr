<template>
  <v-row justify="center">
    <v-col cols="12" md="8" lg="7" class="pt-0">
      <app-field-label required>
        <template #label>
          <span
            class="font-weight-medium text-body-1"
            v-text="$t('CONTACT_US.ADDRESS')"
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
            v-text="$t('CONTACT_US.MESSAGE')"
          />
        </template>
        <v-textarea
          :rows="$vuetify.breakpoint.mdAndUp ? 8 : 5"
          dense
          outlined
          no-resize
          class="mt-1"
          role="button"
          hide-details="auto"
        />
      </app-field-label>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
