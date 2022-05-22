<template>
  <div>
    <v-menu
      tile
      eager
      offset-y
      open-on-hover
      nudge-left="320"
      max-width="440"
      min-width="440"
      transition="slide-x-reverse-transition"
    >
      <template #activator="{ attrs, on }">
        <v-list class="py-0" flat dense color="transparent">
          <app-badge :content="content" :color="lightRed" offset-y="35">
            <v-list-item
              v-bind="$vuetify.breakpoint.lgAndUp && attrs"
              :to="localePath('/mypage/notifications')"
              :ripple="false"
              nuxt
              class="px-0 py-3"
              v-on="$vuetify.breakpoint.lgAndUp && on"
            >
              <v-slide-y-transition leave-absolute>
                <v-list-item-content v-if="$vuetify.breakpoint.lgAndUp">
                  <v-list-item-title
                    class="overflow-visible font-weight-medium text-h6
                    text-center grey--text text--darken-3"
                    v-text="$t('HEADER.NOTIFICATION')"
                  />
                </v-list-item-content>
              </v-slide-y-transition>
              <v-slide-y-reverse-transition leave-absolute>
                <v-list-item-icon
                  v-if="$vuetify.breakpoint.mdAndDown"
                  class="mx-0"
                >
                  <v-icon>mdi-bell-outline</v-icon>
                </v-list-item-icon>
              </v-slide-y-reverse-transition>
            </v-list-item>
          </app-badge>
        </v-list>
      </template>
      <v-list class="py-0">
        <div v-for="(item, i) in 5" :key="item">
          <v-divider v-if="i" />
          <v-list-item :to="localePath('/unknow')" nuxt>
            <v-list-item-avatar tile size="50" class="align-self-start mt-4">
              <img src="/images/non-avatar.jpg" alt="user name">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                <p class="mb-1 message-line-clamp">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora dignissimos aut
                </p>
                <span class="text-body-2 grey--text text--darken-2">15:40</span>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon class="align-self-center">
              <v-icon color="grey lighten-1">
                mdi-chevron-right
              </v-icon>
            </v-list-item-icon>
          </v-list-item>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
