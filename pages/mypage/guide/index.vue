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
          <guide-card :items="beginners">
            <template #title>
              {{ $t('GUIDE.BEGINNERS.TITLE') }}
            </template>
          </guide-card>
        </v-col>
        <v-col cols="12">
          <guide-card :items="faq">
            <template #title>
              {{ $t('GUIDE.FAQ.TITLE') }}
            </template>
          </guide-card>
        </v-col>
        <v-col cols="12">
          <guide-card :items="categories">
            <template #title>
              {{ $t('GUIDE.CATEGORY.TITLE') }}
            </template>
          </guide-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
