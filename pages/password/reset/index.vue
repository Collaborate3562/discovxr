<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="7" lg="5" xl="4">
      <auth-block-wrapper>
        <template #title>
          <v-scale-transition leave-absolute hide-on-leave group>
            <h1
              :key="isComplete"
              class="text-center text-h6 font-weight-bold"
              v-text="$tc('RESET_PASSWORD.TITLE', +isComplete)"
            />
          </v-scale-transition>
        </template>
        <v-slide-x-reverse-transition leave-absolute hide-on-leave>
          <auth-reset-password-form v-if="!isComplete" />
        </v-slide-x-reverse-transition>
        <v-scale-transition leave-absolute hide-on-leave>
          <v-row v-if="isComplete" class="py-2 py-sm-3">
            <v-col cols="12">
              <div
                class="text-center"
                v-text="$tc('RESET_PASSWORD.SUBTITLE', 0)"
              />
            </v-col>
            <v-col cols="12" class="text-center">
              <v-icon x-large color="success">
                mdi-shield-check
              </v-icon>
            </v-col>
            <v-col cols="12">
              <v-btn
                :color="buttonColor"
                :x-large="$vuetify.breakpoint.mdAndUp"
                :to="localePath('login')"
                nuxt
                large
                block
                elevation="0"
                class="text-none white--text text-body-2"
              >
                {{ $tc('RESET_PASSWORD.BUTTON', 0) }}
              </v-btn>
            </v-col>
          </v-row>
        </v-scale-transition>
      </auth-block-wrapper>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
