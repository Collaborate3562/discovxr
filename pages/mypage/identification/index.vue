<template>
  <v-row class="my-0">
    <v-col v-if="$vuetify.breakpoint.width >= 768" sm="4" md="3">
      <my-page-sidebar />
    </v-col>
    <v-col
      :class="{ 'pl-3': $vuetify.breakpoint.width < 768 }"
      class="pl-0 pl-lg-3 pr-lg-0"
    >
      <v-row>
        <v-col cols="12">
          <personal-identification />
        </v-col>
        <v-col cols="12">
          <personal-identification-address />
        </v-col>
        <v-col cols="12">
          <personal-identification-document />
        </v-col>
        <v-col cols="12" class="text-center mt-md-10 mb-md-3">
          <v-btn
            :color="lightBlack"
            large
            width="200"
            elevation="0"
            class="white--text text-h6 text-capitalize"
          >
            {{ $t('PERSONAL_IDENTIFICATION.BUTTON') }}
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-divider />
          <v-list class="py-3" dense>
            <v-list-item class="mb-1">
              <v-list-item-content>
                <h3
                  class="grey--text text--darken-2 text-h5 font-weight-medium"
                  v-text="$t('PERSONAL_IDENTIFICATION.HELP.TITLE')"
                />
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="(item, i) in helpItems"
              :key="i"
              :to="localePath(item.route)"
              nuxt
            >
              <v-list-item-content class="py-1">
                <span
                  class="grey--text text--darken-1 text-body-2 text-md-body-1"
                  v-text="item.text"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
