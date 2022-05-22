<template>
  <app-modal-window
    :modal="modal"
    max-width="768"
    content-class="ml-6"
    @close="close"
  >
    <template #title>
      <v-row class="my-0" justify="center">
        <v-col cols="12" sm="11" md="10">
          <h2
            class="text-center text-body-2 text-sm-h5 font-weight-bold"
            v-text="$t('BIDDERS.MODAL.TITLE')"
          />
        </v-col>
      </v-row>
    </template>
    <template #body>
      <v-row justify="center" class="black--text mt-0">
        <v-col cols="12" sm="11" md="10" class="py-0">
          <h3
            v-for="(text, i) in $t('BIDDERS.MODAL.SUBTITLE')"
            :key="i"
            class="text-caption text-sm-body-1"
            v-text="text"
          />
        </v-col>
        <v-col cols="12" sm="11" md="10" class="pt-7">
          <v-textarea
            :rows="$vuetify.breakpoint.smAndUp ? 8 : 5"
            dense
            outlined
            no-resize
            class="rounded-0"
            color="grey lighten-1"
            background-color="grey lighten-5"
            role="button"
            hide-details="auto"
          />
        </v-col>
      </v-row>
    </template>
    <template #actions>
      <v-row justify="center" class="my-0">
        <v-col cols="12" sm="11" md="10">
          <v-btn
            :color="lightRed"
            large
            block
            elevation="0"
            class="font-weight-normal white--text text-sm-h6"
          >
            {{ $tc('BIDDERS.MODAL.BUTTON', 1) }}
          </v-btn>
        </v-col>
        <v-col cols="12" sm="11" md="10" class="pt-0">
          <v-btn
            :color="lightRed"
            large
            block
            outlined
            class="font-weight-normal text-sm-h6"
            @click="close"
          >
            {{ $tc('BIDDERS.MODAL.BUTTON', 0) }}
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </app-modal-window>
</template>

<script lang="ts" src="./index.script.ts"></script>
