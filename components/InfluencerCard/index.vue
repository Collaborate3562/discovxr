<template>
  <v-list-item class="px-0 px-sm-1">
    <v-row class="ma-0" align="center">
      <v-col cols="12" sm="6" md="8" class="d-flex align-center">
        <v-list-item-avatar size="50" class="my-0">
          <v-img :src="avatar" />
        </v-list-item-avatar>
        <v-row class="my-0">
          <v-col cols="12" class="pt-0 pb-1">
            <v-list-item-title
              class="text-body-1 text-sm-h6 font-weight-bold"
              v-text="username"
            />
          </v-col>
          <v-col
            v-for="item in sns"
            :key="item[0]"
            cols="auto"
            class="d-flex align-center py-0"
          >
            <component
              :is="item[1].value.icon"
              width="20"
              height="20"
              class="mr-2"
            />
            <span
              class="font-weight-medium grey--text text--darken-3 text-body-2"
              v-text="item[1].value.count"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm class="text-sm-center py-0">
        <v-scale-transition leave-absolute hide-on-leave>
          <span
            v-if="$vuetify.breakpoint.xsOnly"
            class="text-subtitle-2"
            v-text="$t('INFLUENCERS.ITEMS_SOLD')"
          />
        </v-scale-transition>
        <span
          class="text-body-1 text-md-h6 font-weight-regular"
          v-text="sold"
        />
      </v-col>
      <v-col cols="12" sm class="text-sm-center pt-0 pt-sm-3">
        <v-scale-transition leave-absolute hide-on-leave>
          <span
            v-if="$vuetify.breakpoint.xsOnly"
            class="text-subtitle-2"
            v-text="$t('INFLUENCERS.DONATION_AMOUNT')"
          />
        </v-scale-transition>
        <span
          class="text-body-1 text-md-h6 font-weight-regular"
          v-text="amount"
        />
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
