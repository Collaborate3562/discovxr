<template>
  <app-modal-window
    :key="isOpen"
    :modal="isOpen"
    max-width="768"
    content-class="ml-6"
    @close="close"
  >
    <template #title>
      <v-row justify="center" class="text-capitalize mt-0">
        <v-col cols="12">
          <h5
            class="text-center text-body-1 text-sm-h5 font-weight-medium black--text"
            v-text="$t('ITEM_DETAIL.REMAINING_MODAL.TITLE')"
          />
        </v-col>
      </v-row>
    </template>
    <template #body>
      <v-row justify="center">
        <v-col cols="12" class="px-0 pb-2">
          <v-card-subtitle
            class="pa-0 text-center text-body-1 text-md-h5 font-weight-regular black--text"
            v-text="title"
          />
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-card-subtitle
            v-for="(text, i) in $t('ITEM_DETAIL.REMAINING_MODAL.ALERT')"
            :key="i"
            class="pa-0 text-center text-caption text-md-body-2 red--text font-weight-medium"
            v-text="text"
          />
        </v-col>
        <v-col cols="12" sm="10">
          <v-row class="my-0" align="center">
            <v-col
              cols="12"
              sm
              class="pb-1 px-0 py-md-3 text-capitalize text-body-2 text-sm-body-1 text-md-h6
              font-weight-medium black--text"
              v-text="$t('ITEM_DETAIL.REMAINING_MODAL.LABEL')"
            />
            <v-col cols="12" sm="8" class="pa-0 py-md-3">
              <v-card tile falt outlined>
                <v-card-title
                  class="px-0 py-3 py-md-4 justify-center text-body-2 text-sm-h6
                  text-md-h4 font-weight-bold"
                >
                  <span
                    class="text-uppercase"
                    v-text="
                      $t('ITEM_DETAIL.DAYS', { timeLeft: formatedData[0] })
                    "
                  />
                  <span class="mx-2" v-html="'&#43;'" />
                  <span v-text="formatedData[1]" />
                  <span v-text="`:${formatedData[2]}:`" />
                  <span v-text="formatedData[3]" />
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
    <template #actions>
      <v-row justify="center" class="mb-1">
        <v-col cols="12" sm="10">
          <v-btn
            :color="lightRed"
            :large="$vuetify.breakpoint.mdAndUp"
            outlined
            block
            @click="close"
          >
            {{ $t('ITEM_DETAIL.REMAINING_MODAL.BUTTON') }}
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </app-modal-window>
</template>

<script lang="ts" src="./index.script.ts"></script>
