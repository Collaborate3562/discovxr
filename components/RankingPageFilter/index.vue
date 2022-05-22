<template>
  <v-row class="my-0 mb-lg-n2">
    <v-slide-y-transition leave-absolute>
      <v-col v-if="$vuetify.breakpoint.smAndUp" cols="4">
        <v-select
          dense
          outlined
          hide-details
          class="rounded-0"
          append-icon="mdi-chevron-down"
        />
      </v-col>
    </v-slide-y-transition>
    <v-slide-y-transition leave-absolute>
      <v-col v-if="$vuetify.breakpoint.smAndUp" cols="4">
        <v-select
          dense
          outlined
          hide-details
          class="rounded-0"
          append-icon="mdi-chevron-down"
        />
      </v-col>
    </v-slide-y-transition>
    <v-slide-y-transition leave-absolute>
      <v-col v-if="$vuetify.breakpoint.smAndUp" cols="4">
        <v-select
          dense
          outlined
          hide-details
          class="rounded-0"
          append-icon="mdi-chevron-down"
        />
      </v-col>
    </v-slide-y-transition>
    <client-only>
      <v-bottom-sheet
        v-if="$vuetify.breakpoint.xsOnly"
        v-model="isOpen"
        scrollable
      >
        <v-card tile flat>
          <v-card-text class="px-4">
            <v-row class="mt-0">
              <v-col cols="12">
                <v-select
                  dense
                  outlined
                  hide-details
                  class="mt-1 rounded-0"
                  append-icon="mdi-chevron-down"
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  dense
                  outlined
                  hide-details
                  class="mt-1 rounded-0"
                  append-icon="mdi-chevron-down"
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  dense
                  outlined
                  hide-details
                  class="mt-1 rounded-0"
                  append-icon="mdi-chevron-down"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
    </client-only>
    <v-scale-transition leave-absolute>
      <v-btn
        v-if="$vuetify.breakpoint.xsOnly"
        :color="lightRed"
        :class="{ 'button-position': $vuetify.breakpoint.xsOnly }"
        fab
        fixed
        right
        bottom
        @click="open"
      >
        <v-icon color="white">
          mdi-filter
        </v-icon>
      </v-btn>
    </v-scale-transition>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
