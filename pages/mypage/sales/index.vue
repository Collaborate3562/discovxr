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
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card tile>
            <v-card-title
              class="grey lighten-4 pl-md-7 py-3 grey--text
              text--darken-2 text-body-1 text-sm-h6 font-weight-medium"
              v-text="item.title"
            />
            <v-card-text class="pa-0">
              <v-list class="py-0">
                <v-slide-y-transition group leave-absolute>
                  <template v-for="(listItem, idx) in item.list">
                    <v-divider v-if="idx" :key="`divider-${idx}`" />
                    <v-list-item
                      :key="`item-${idx}`"
                      :to="localePath(listItem.route)"
                      nuxt
                      class="pl-md-7"
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          class="text-body-1 black--text"
                          v-text="listItem.text"
                        />
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-slide-y-transition>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
