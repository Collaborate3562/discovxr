<template>
  <v-card>
    <v-card-text class="py-10">
      <v-row class="my-0">
        <v-col cols="12" class="text-center">
          <v-avatar size="80" class="overflow-visible">
            <v-img :src="avatar" />
            <app-rank-level :rank="rankLevel" :size="40" class="rank-level" />
          </v-avatar>
        </v-col>
        <v-col cols="12" class="text-center">
          <h2
            class="black--text text-sm-h5 font-weight-medium"
            v-text="username"
          />
        </v-col>
        <v-col cols="12">
          <v-scale-transition
            leave-absolute
            hide-on-leave
            group
            class="row justify-center"
          >
            <v-col
              v-for="item in sns"
              :key="item[0]"
              cols="auto"
              class="d-flex flex-column text-center px-2 py-0"
            >
              <component :is="item[1].value.icon" width="35" height="35" />
              <span
                class="font-weight-medium grey--text text--darken-3 text-body-2 mt-1"
                v-text="item[1].value.count"
              />
            </v-col>
          </v-scale-transition>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider />
    <v-card-actions class="pa-0">
      <v-row class="ma-0" align="center">
        <v-slide-y-transition leave-absolute>
          <v-col
            v-if="purchase"
            cols="12"
            class="text-center py-4 d-flex flex-column"
          >
            <span
              class="text-caption text-md-body-2"
              v-text="$tc('RANKINGS.NUMBER', 0)"
            />
            <span
              class="black--text text-body-2 text-md-h6 font-weight-regular"
              v-text="purchase"
            />
          </v-col>
        </v-slide-y-transition>
        <v-slide-y-transition leave-absolute>
          <v-col v-if="purchase" cols="12" class="pa-0">
            <v-divider />
          </v-col>
        </v-slide-y-transition>
        <v-slide-y-transition leave-absolute>
          <v-col v-if="deals" class="text-center py-4 d-flex flex-column">
            <span
              class="text-caption text-md-body-2"
              v-text="$tc('RANKINGS.NUMBER', 1)"
            />
            <span
              class="black--text text-body-2 text-md-h6 font-weight-regular"
              v-text="deals"
            />
          </v-col>
        </v-slide-y-transition>
        <v-slide-y-transition leave-absolute>
          <v-col
            v-if="contribution"
            class="text-center py-4 d-flex flex-column"
          >
            <span
              class="text-caption text-md-body-2"
              v-text="$t('RANKINGS.TOTAL.CONTRIBUTION')"
            />
            <span
              class="black--text text-body-2 text-md-h6 font-weight-regular"
              v-text="contribution"
            />
          </v-col>
        </v-slide-y-transition>
        <v-col cols="auto" class="pa-0 align-self-stretch">
          <v-divider vertical />
        </v-col>
        <v-col class="text-center py-4 d-flex flex-column">
          <span
            class="text-caption text-md-body-2"
            v-text="$t('RANKINGS.TOTAL.DONATION')"
          />
          <span
            class="black--text text-body-2 text-md-h6 font-weight-regular"
            v-text="donation"
          />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
