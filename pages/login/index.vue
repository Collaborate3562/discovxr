<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="7" lg="5" xl="4">
      <auth-block-wrapper>
        <template #title>
          <div class="py-md-3">
            <p
              class="mb-2 text-center text-body-2"
              v-text="$t('LOGIN.NO_ACCOUNT')"
            />
            <v-btn
              :color="lightRed"
              :x-large="$vuetify.breakpoint.mdAndUp"
              :to="localePath('signup')"
              large
              block
              elevation="0"
              class="text-none white--text text-body-2"
            >
              {{ $tc('LOGIN.BUTTON', 0) }}
            </v-btn>
          </div>
        </template>
        <v-slide-x-reverse-transition leave-absolute hide-on-leave>
          <v-row v-if="!isLoginForm" class="py-2 py-sm-3">
            <v-col
              v-for="(button, i) in buttons"
              :key="i"
              cols="12"
              class="py-2 py-sm-3"
            >
              <sns-button
                :type="button.value.type"
                :icon="button.value.icon"
                :text="button.value.text"
                :color="button.value.color"
                :loading="button.value.loading"
                @click:sns="snsButtonClickHandler"
              />
            </v-col>
          </v-row>
        </v-slide-x-reverse-transition>
        <v-slide-x-transition leave-absolute hide-on-leave>
          <auth-login-form v-if="isLoginForm" />
        </v-slide-x-transition>
      </auth-block-wrapper>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
