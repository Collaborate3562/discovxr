<template>
  <v-row class="my-0">
    <v-col v-if="$vuetify.breakpoint.width >= 768" sm="4" md="3">
      <my-page-sidebar />
    </v-col>
    <v-col
      :class="{ 'pl-3': $vuetify.breakpoint.width < 768 }"
      class="pl-0 pl-lg-3 pr-lg-0"
    >
      <v-card tile>
        <v-card-title
          class="grey lighten-4 pl-md-7 py-3 grey--text
          text--darken-2 text-body-1 text-sm-h6 font-weight-medium"
          v-text="$tc('POINTS.TITLE', 0)"
        />
        <v-card-text class="pa-0">
          <v-list v-if="items.length" class="py-0">
            <v-slide-y-transition group leave-absolute>
              <template v-for="(item, i) in items">
                <v-divider v-if="i" :key="`divider-${i}`" />
                <point-card
                  :key="item.id"
                  :type="item.type"
                  :point="item.point"
                  :title="item.title"
                  :timestamp="item.date"
                />
              </template>
            </v-slide-y-transition>
          </v-list>
          <v-scale-transition leave-absolute>
            <app-empty-data v-if="!items.length" src="/images/empty.png" />
          </v-scale-transition>
        </v-card-text>
        <v-divider v-if="items.length" />
        <v-slide-y-reverse-transition leave-absolute hide-on-leave>
          <v-card-actions v-if="items.length" class="py-12">
            <v-btn
              :x-large="$vuetify.breakpoint.mdAndUp"
              large
              elevation="0"
              width="70%"
              colos="grey lighten-3"
              class="mx-auto text-none text-body-1 font-weight-medium
              text-sm-h6 grey--text text--darken-2"
            >
              {{ $t('POINTS.BUTTON') }}
            </v-btn>
          </v-card-actions>
        </v-slide-y-reverse-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
