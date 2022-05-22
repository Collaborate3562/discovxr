<template>
  <div>
    <v-menu
      tile
      eager
      offset-y
      open-on-hover
      nudge-left="310"
      max-width="440"
      min-width="440"
      transition="slide-x-reverse-transition"
    >
      <template #activator="{ attrs, on }">
        <v-list class="py-0" flat dense color="transparent">
          <v-list-item
            v-bind="$vuetify.breakpoint.lgAndUp && attrs"
            :to="localePath('/mypage')"
            :ripple="false"
            nuxt
            class="px-0 py-3"
            v-on="$vuetify.breakpoint.lgAndUp && on"
          >
            <v-slide-y-transition leave-absolute>
              <v-list-item-avatar
                :key="$vuetify.breakpoint.lgAndUp"
                size="35"
                class="ma-0"
              >
                <v-img src="/images/non-avatar.jpg" />
              </v-list-item-avatar>
            </v-slide-y-transition>
            <v-slide-y-reverse-transition leave-absolute>
              <v-list-item-content
                v-if="$vuetify.breakpoint.lgAndUp"
                class="ml-2"
              >
                <v-list-item-title
                  class="overflow-visible font-weight-medium
                  text-h6 text-center grey--text text--darken-3"
                  v-text="$t('HEADER.MY_PAGE')"
                />
              </v-list-item-content>
            </v-slide-y-reverse-transition>
          </v-list-item>
        </v-list>
      </template>
      <v-list class="pb-0">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6 text-center font-weight-bold">
              David Ramsay
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="my-3">
          <v-list-item-content>
            <v-row class="px-3">
              <v-col class="pb-1">
                <v-list-item-title class="black--text">
                  <span v-text="$t('HEADER.PROFILE_DIALOG.ITEMS.NAME')" />:
                  <span v-text="1080" />
                </v-list-item-title>
              </v-col>
              <v-col class="pb-1">
                <v-list-item-title class="text-right black--text">
                  <span v-text="$t('HEADER.PROFILE_DIALOG.SALES')" />:
                  <span v-text="'¥1,080,978,847'" />
                </v-list-item-title>
              </v-col>
              <v-col class="py-1">
                <v-list-item-title class="black--text">
                  <span v-text="$t('HEADER.PROFILE_DIALOG.ITEMS.SALE')" />:
                  <span v-text="98" />
                </v-list-item-title>
              </v-col>
              <v-col class="py-1">
                <v-list-item-title class="text-right black--text">
                  <span v-text="$t('HEADER.PROFILE_DIALOG.DONATION')" />:
                  <span v-text="'¥1,080,978,847'" />
                </v-list-item-title>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="mb-5">
          <v-list-item-content>
            <v-card flat tile outlined>
              <v-card-text class="pa-0">
                <v-list class="py-0" color="grey lighten-5">
                  <v-list-item
                    :to="localePath('/mypage/sales')"
                    nuxt
                    class="pr-2"
                  >
                    <v-list-item-content>
                      <v-list-item-title
                        class="d-flex justify-space-between align-center grey--text text--darken-2"
                      >
                        <span v-text="$t('HEADER.PROFILE_DIALOG.BALANCE')" />
                        <span v-text="'¥1,080,978,847'" />
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                      <v-icon color="grey lighten-1">
                        mdi-chevron-right
                      </v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                  <v-divider />
                  <v-list-item
                    :to="localePath('/mypage/point')"
                    nuxt
                    class="pr-2"
                  >
                    <v-list-item-content>
                      <v-list-item-title
                        class="d-flex justify-space-between align-center grey--text text--darken-2"
                      >
                        <span v-text="$t('HEADER.PROFILE_DIALOG.POINTS')" />
                        <span v-text="'P1,080,978,847'" />
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                      <v-icon color="grey lighten-1">
                        mdi-chevron-right
                      </v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-list-item-content>
        </v-list-item>
        <div v-for="item in items" :key="item.route">
          <v-divider />
          <v-list-item :to="localePath(item.route)" nuxt class="pr-2">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  class="grey--text text--darken-2"
                  v-text="$t(item.text)"
                />
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon color="grey lighten-1">
                  mdi-chevron-right
                </v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
