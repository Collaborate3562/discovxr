<template>
  <app-modal-window
    :modal="modal"
    max-width="768"
    content-class="ml-6"
    @close="$emit('close')"
  >
    <template #title>
      <v-row justify="center" class="mt-0">
        <v-col cols="12">
          <h5
            class="text-center text-body-1 text-sm-h5 font-weight-medium black--text"
            v-text="$t('HOME.CANNOT_MODAL.TITLE')"
          />
        </v-col>
      </v-row>
    </template>
    <template #body>
      <v-row justify="center" class="mt-0">
        <v-col cols="12" class="pt-0 pt-lg-1">
          <h5
            class="text-center text-body-2 text-sm-h5 grey--text text--darken-4 font-weight-normal"
            v-text="$t('HOME.CANNOT_MODAL.SUBTITLE')"
          />
        </v-col>
        <v-col cols="12" sm="10" class="black--text text-md-subtitle-1">
          <p class="mb-0 d-flex align-center">
            <v-chip
              outlined
              x-small
              color="grey darken-3"
              class="pa-1 mr-1"
              v-text="1"
            />
            <span v-text="$t('HOME.CANNOT_MODAL.SNS_CRITERIA')" />
          </p>
          <ul>
            <li v-for="(text, i) in list" :key="i" v-text="text" />
            <li v-text="$t('HOME.CANNOT_MODAL.BLOG')" />
          </ul>
        </v-col>
        <v-col cols="12" sm="10" class="black--text text-md-subtitle-1">
          <div>
            <v-chip
              outlined
              x-small
              color="grey darken-3"
              class="pa-1"
              v-text="2"
            />
            <template v-for="(line, i) in $t('HOME.CANNOT_MODAL.FOOTER_TEXT')">
              <component
                :is="i < 2 ? 'span' : 'p'"
                :key="i"
                :class="{ 'red--text font-weight-medium': i > 2 }"
                class="mb-0"
                v-text="line"
              />
              <v-chip
                v-if="i === 0"
                :key="`${i}-step`"
                outlined
                x-small
                color="grey darken-3"
                class="pa-1 ml-n1"
                v-text="1"
              />
            </template>
          </div>
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
            @click="$emit('close')"
          >
            {{ $t('HOME.CANNOT_MODAL.BUTTON') }}
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </app-modal-window>
</template>

<script lang="ts" src="./index.script.ts"></script>
