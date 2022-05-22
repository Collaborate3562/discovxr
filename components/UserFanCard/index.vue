<template>
  <v-list-item class="px-2 px-sm-4 py-sm-1">
    <v-list-item-avatar
      :size="$vuetify.breakpoint.smAndUp ? 50 : 30"
      class="align-self-start mr-3 mt-3"
    >
      <v-img :src="avatar" />
    </v-list-item-avatar>
    <v-list-item-content class="py-0">
      <v-row class="my-0" align="center" justify="space-between">
        <v-col cols="auto" class="pb-0">
          <v-list-item-title
            class="text-body-1 text-sm-h6 font-weight-bold"
            v-text="username"
          />
          <v-row class="my-0 grey--text text--darken-2">
            <v-col cols="auto" class="pt-1 pb-0">
              <span
                class="text-body-2 text-sm-body-1"
                v-text="$t('USER_FANS.DEALS')"
              />
              <span class="font-weight-bold" v-text="deals" />
            </v-col>
            <v-col cols="auto" class="pt-1 pb-0">
              <span
                class="text-body-2 text-sm-body-1"
                v-text="$t('USER_FANS.DONATIONS')"
              />
              <span class="font-weight-bold" v-text="donations" />
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          sm="auto"
          order="1"
          order-sm="0"
          class="pt-0 pt-sm-3 pb-sm-0"
        >
          <v-btn
            :color="lightRed"
            :outlined="isFollow"
            :class="{ 'white--text': !isFollow }"
            block
            depressed
            width="150"
            class="text-capitalize font-weight-bold text-body-1"
          >
            {{ $t(`USER_FANS.BUTTON.${isFollow ? 'FOLLOW' : 'FOLLOWING'}`) }}
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-list-item-subtitle
            class="introduction-line-clamp black--text text-body-2 text-sm-body-1"
            v-text="introduction"
          />
        </v-col>
        <v-col cols="12" class="pt-0 pl-0">
          <v-row v-if="rating.length" class="ma-0">
            <v-col
              v-for="item in emotions"
              :key="item[0]"
              cols="auto"
              class="d-flex align-center pt-0 pb-1"
            >
              <component :is="item[1].value.icon" width="30" height="30" />
              <span
                class="ml-1 font-weight-medium grey--text text--darken-3 text-body-2"
                v-text="item[1].value.count"
              />
            </v-col>
          </v-row>
          <v-row v-else class="ma-0">
            <v-col
              v-for="item in sns"
              :key="item[0]"
              cols="auto"
              class="d-flex align-center py-1 pt-sm-0"
            >
              <component
                :is="item[1].value.icon"
                width="25"
                height="25"
                class="mr-2"
              />
              <span
                class="font-weight-medium grey--text text--darken-3 text-body-2"
                v-text="item[1].value.min"
              />
              <v-icon
                size="10"
                class="mx-1 font-weight-medium grey--text text--darken-3 text-body-2"
              >
                mdi-tilde
              </v-icon>
              <span
                class="font-weight-medium grey--text text--darken-3 text-body-2"
                v-text="item[1].value.max"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
