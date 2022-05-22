<template>
  <v-col cols="12" lg>
    <h2
      class="mb-3 text-h6 white--text text-uppercase font-weight-medium"
      v-text="$t('FOOTER.REGION')"
    />
    <v-row>
      <v-col cols="12" sm="6" md="3" lg="12">
        <div
          class="grey--text text--darken-1 text-body-1 font-weight-medium py-2"
          v-text="$t('LANGUAGES.NAME')"
        />
        <v-sheet min-width="220" color="transparent">
          <v-select
            v-model="language"
            :items="languageItems"
            dense
            outlined
            hide-details
            full-width
            color="grey"
            append-icon="mdi-chevron-down"
          />
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="12" class="pt-0 pt-lg-0 pt-sm-3">
        <div
          class="grey--text text--darken-1 text-body-1 font-weight-medium py-2"
          v-text="$t('REGIONS.NAME')"
        />
        <v-sheet min-width="220" color="transparent">
          <v-select
            v-model="region"
            :items="regionItems"
            dense
            outlined
            hide-details
            full-width
            color="grey"
            append-icon="mdi-chevron-down"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
