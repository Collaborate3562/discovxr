<template>
  <v-slide-y-transition leave-absolute hide-on-leave>
    <header
      ref="header"
      :key="isSticky"
      v-scroll="onScrollHandler"
      :class="{ 'elevation-3 white sticky-header': isSticky }"
    >
      <v-container class="mx-auto container-max-width">
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="space-between">
              <!-- TODO: add auth condition  -->
              <v-col
                v-if="$vuetify.breakpoint.width < 768"
                cols="auto"
                class="px-1"
              >
                <v-app-bar-nav-icon @click="open" />
              </v-col>
              <!-- TODO: add auth condition  -->
              <v-col
                :class="{ 'px-0': $vuetify.breakpoint.width < 768 }"
                class="flex-grow-0"
                order="-1"
                sm="auto"
                md="3"
              >
                <nuxt-link :to="localePath('/')">
                  <v-img
                    src="/images/discovxr-logo.png"
                    alt="discovxr"
                    width="150"
                    eager
                  />
                </nuxt-link>
              </v-col>
              <v-slide-x-reverse-transition leave-absolute>
                <v-col v-if="$vuetify.breakpoint.xsOnly" cols="auto">
                  <component
                    :is="iconTransitionMode"
                    leave-absolute
                    hide-on-leave
                  >
                    <v-icon
                      :key="icon"
                      @click="setIsVisible(!searchState.isVisible)"
                      v-text="icon"
                    />
                  </component>
                </v-col>
              </v-slide-x-reverse-transition>
              <v-slide-y-transition leave-absolute>
                <v-col
                  v-if="searchState.isVisible"
                  cols="12"
                  sm="8"
                  md="9"
                  class="pt-0 pt-sm-3 pr-xl-0"
                >
                  <v-text-field
                    v-model.trim="searchState.value"
                    :autofocus="$vuetify.breakpoint.xsOnly"
                    :append-icon="
                      !$vuetify.breakpoint.xsOnly ? 'mdi-magnify' : null
                    "
                    :placeholder="$t('HEADER.SEARCH_PLACEHOLDER')"
                    background-color="grey lighten-4"
                    color="grey lighten-1"
                    class="v-input--is-focused grey--text text--lighten-4"
                    outlined
                    dense
                    hide-details
                    full-width
                    clearable
                    role="button"
                    @keypress.enter="onSearchHandler"
                  />
                </v-col>
              </v-slide-y-transition>
              <v-slide-x-transition leave-absolute>
                <mobile-header-navigation-block
                  v-if="$vuetify.breakpoint.mdAndDown"
                />
                <desktop-header-navigation-block v-else />
              </v-slide-x-transition>
              <!-- TODO: with auth condition -->
              <!-- <header-auth-button /> -->
              <client-only>
                <header-user-block />
              </client-only>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </header>
  </v-slide-y-transition>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>
