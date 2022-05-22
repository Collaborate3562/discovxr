<template>
  <v-card tile>
    <v-card-title
      class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
      text-body-1 text-sm-h6 font-weight-medium"
      v-text="$t('PERSONAL_IDENTIFICATION.IDENTIFICATION.TITLE')"
    />
    <v-card-text class="py-3 py-sm-5 py-md-10">
      <v-row justify="center">
        <v-slide-y-transition leave-absolute>
          <v-col
            v-if="isVerified"
            cols="12"
            sm="11"
            :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
            lg="8"
            class="pb-1"
          >
            <h3
              class="mb-0 green--text text-center text-sm-h6"
              v-text="$t('PERSONAL_IDENTIFICATION.IDENTIFICATION.VERIFIED')"
            />
          </v-col>
        </v-slide-y-transition>
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
          class="text-sm-subtitle-1"
        >
          <p
            v-for="(line, i) in $t(
              'PERSONAL_IDENTIFICATION.IDENTIFICATION.DESCRIPTION',
            )"
            :key="i"
            v-text="line"
          />
        </v-col>
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
          class="pt-0 text-sm-subtitle-1"
        >
          <div>
            <h4
              class="font-weight-medium"
              v-text="$tc('PERSONAL_IDENTIFICATION.IDENTIFICATION.USERNAME', 1)"
            />
            <!-- TODO: will be change -->
            <span class="text-body-1" v-text="'David Ramsay'" />
          </div>
          <div class="mt-2">
            <h4
              class="font-weight-medium"
              v-text="$tc('PERSONAL_IDENTIFICATION.IDENTIFICATION.USERNAME', 0)"
            />
            <!-- TODO: will be change -->
            <span class="text-body-1" v-text="'デビット ラムゼイ'" />
          </div>
          <div class="mt-2">
            <h4
              class="font-weight-medium"
              v-text="$t('PERSONAL_IDENTIFICATION.IDENTIFICATION.BIRTHDAY')"
            />
            <!-- TODO: will be change -->
            <span class="text-body-1" v-text="'1990/01/31'" />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script src="./index.script.ts"></script>
