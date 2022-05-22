<template>
  <v-row class="py-md-3 mb-sm-10 mb-lg-16" justify="end" align="center">
    <v-col :cols="$vuetify.breakpoint.mdAndUp ? 12 : null">
      <h1 class="grey--text text--darken-2" v-text="$tc('BRAND.TITLE', 1)" />
    </v-col>
    <v-slide-x-reverse-transition leave-absolute>
      <v-col v-if="$vuetify.breakpoint.smAndDown" cols="auto">
        <v-btn icon fab small @click="toggleShow">
          <component :is="transition" leave-absolute hide-on-leave>
            <v-icon :key="icon" v-text="icon" />
          </component>
        </v-btn>
      </v-col>
    </v-slide-x-reverse-transition>
    <v-slide-y-transition leave-absolute>
      <v-col v-if="show" cols="12" md class="pt-0 pt-md-3">
        <v-text-field
          hide-details
          solo
          dense
          class="mt-2 rounded-0"
          role="button"
        />
      </v-col>
    </v-slide-y-transition>
    <v-slide-y-reverse-transition leave-absolute>
      <v-col v-if="show" cols="12" sm md="3" class="pt-0 pt-md-3">
        <app-advanced-select solo hide-details />
      </v-col>
    </v-slide-y-reverse-transition>
    <v-slide-y-transition leave-absolute>
      <v-col v-if="show" cols="12" sm md="3" class="pt-0 pt-md-3">
        <app-advanced-select solo hide-details />
      </v-col>
    </v-slide-y-transition>
    <v-col cols="12">
      <v-btn
        v-for="charCode in letterCount"
        :key="`letter-${charCode}`"
        text
        icon
        width="30"
        height="30"
        class="px-0 grey--text text--darken-3"
        @click="items.length && scrollTo(charCode)"
      >
        {{ getLetter(charCode) }}
      </v-btn>
      <v-btn
        text
        tile
        small
        class="text-capitalize grey--text text--darken-3 text-body-1"
      >
        {{ $t('BRAND.OTHERS') }}
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-slide-y-transition leave-absolute group tag="div" class="row">
        <v-col
          v-for="charCode in letterCount"
          :key="`item-${charCode}`"
          class="mb-5"
          cols="12"
        >
          <brand-row
            :title="getLetter(charCode)"
            :items="Array(8).fill(charCode % 2 ? items[0] : items[1])"
          />
        </v-col>
      </v-slide-y-transition>
      <v-scale-transition leave-absolute>
        <app-empty-data v-if="!items.length" src="/images/empty.png" />
      </v-scale-transition>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
