<template>
  <div>
    <v-slide-x-transition leave-absolute hide-on-leave>
      <v-row v-if="!isVerification" class="py-2 py-sm-3">
        <v-col cols="12">
          <label role="button">
            <span
              class="text-sm-subtitle-1 font-weight-bold"
              v-text="$tc('SIGNUP.PHONE_VERIFICATION.FIELD', 1)"
            />
            <v-text-field outlined role="button" hide-details="auto" />
          </label>
          <p
            class="text-caption mt-2"
            v-text="$t('SIGNUP.PHONE_VERIFICATION.DESCRIPTION')"
          />
        </v-col>
        <v-col cols="12">
          <v-btn
            :color="lightRed"
            :x-large="$vuetify.breakpoint.mdAndUp"
            large
            block
            elevation="0"
            class="text-none white--text text-body-2"
            @click="getVerificationCode"
          >
            {{ $tc('SIGNUP.BUTTON', 0) }}
          </v-btn>
          <p
            class="text-caption mt-2"
            v-text="$t('SIGNUP.PHONE_VERIFICATION.INFORMATION')"
          />
        </v-col>
      </v-row>
    </v-slide-x-transition>
    <v-slide-x-reverse-transition leave-absolute hide-on-leave>
      <v-row v-if="isVerification" class="py-2 py-sm-3">
        <v-col cols="12">
          <label role="button">
            <span
              class="text-sm-subtitle-1 font-weight-bold"
              v-text="$tc('SIGNUP.PHONE_VERIFICATION.FIELD', 0)"
            />
            <v-otp-input length="6" type="number" />
          </label>
          <p
            class="text-caption"
            v-text="$t('SIGNUP.PHONE_VERIFICATION.DESCRIPTION')"
          />
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn
            :color="lightRed"
            :x-large="$vuetify.breakpoint.mdAndUp"
            large
            block
            elevation="0"
            class="text-none white--text text-body-2"
            @click="onNextHandler"
          >
            {{ $tc('SIGNUP.BUTTON', 0) }}
          </v-btn>
          <v-btn
            :color="buttonColor"
            x-small
            text
            elevation="0"
            class="text-none text-caption mt-3"
            @click="getVerificationCode"
          >
            {{ $t('SIGNUP.PHONE_VERIFICATION.RESEND_VERIFICATION_CODE') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-slide-x-reverse-transition>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
