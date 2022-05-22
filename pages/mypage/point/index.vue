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
          <v-card tile>
            <v-card-text class="text-center py-12">
              <h4
                class="text-subtitle-1 grey--text text--darken-3 mb-2"
                v-text="$t('POINTS.AVAILABLE')"
              />
              <div class="d-flex align-center justify-center">
                <v-slide-y-transition leave-absolute hide-on-leave>
                  <span
                    :key="points"
                    class="text-h4 grey--text text--darken-4 font-weight-bold"
                    v-text="points"
                  />
                </v-slide-y-transition>
                <span
                  class="text-h5 ml-1 grey--text text--darken-4"
                  v-text="$t('POINTS.SUFFIX')"
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card tile>
            <v-card-title
              class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
              text-body-1 text-sm-h6 font-weight-medium"
              v-text="$tc('POINTS.TITLE', 1)"
            />
            <v-card-text class="pa-0">
              <v-list v-if="items.length" class="py-0">
                <template v-for="(item, i) in items">
                  <v-divider v-if="i" :key="`divider-${i}`" />
                  <v-list-item
                    :key="i"
                    :to="localePath(item.route)"
                    nuxt
                    class="pl-md-7"
                  >
                    <v-list-item-content>
                      <v-list-item-title
                        class="text-body-1 black--text"
                        v-text="item.text"
                      />
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
              <v-scale-transition leave-absolute>
                <app-empty-data v-if="!items.length" src="/images/empty.png" />
              </v-scale-transition>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
