<template>
  <v-list-item class="px-0 px-sm-1">
    <v-row class="ma-0" align="center">
      <v-col
        :sm="contribution ? 5 : 6"
        :md="contribution ? 5 : 8"
        cols="12"
        class="d-flex align-center"
      >
        <v-scale-transition leave-absolute>
          <v-list-item-avatar v-if="$vuetify.breakpoint.mdAndUp">
            <app-rank-level
              :rank="rankLevel"
              :size="$vuetify.breakpoint.smAndDown ? 30 : 35"
            />
          </v-list-item-avatar>
        </v-scale-transition>
        <v-list-item-avatar
          :size="$vuetify.breakpoint.smAndDown ? 40 : 50"
          class="my-0 overflow-visible mr-sm-1 mr-md-2"
        >
          <v-img :src="avatar" />
          <v-scale-transition leave-absolute>
            <app-rank-level
              v-if="$vuetify.breakpoint.smAndDown"
              :rank="rankLevel"
              :size="25"
              class="rank-level"
            />
          </v-scale-transition>
        </v-list-item-avatar>
        <v-row class="my-0 mx-sm-0">
          <v-col :class="{ 'pb-1': sns.size }" cols="12" class="pt-0 pb-0">
            <v-list-item-title
              class="text-body-1 text-md-h6 font-weight-bold"
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
              class="mr-1"
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
            v-text="$tc('RANKINGS.NUMBER', +!!deals)"
          />
        </v-scale-transition>
        <span
          class="text-body-1 text-sm-body-2 text-md-h6 font-weight-regular"
          v-text="deals || purchase"
        />
      </v-col>
      <v-col
        v-if="contribution"
        cols="12"
        sm
        class="text-sm-center py-0 py-sm-3"
      >
        <v-scale-transition leave-absolute hide-on-leave>
          <span
            v-if="$vuetify.breakpoint.xsOnly"
            class="text-subtitle-2"
            v-text="$t('RANKINGS.TOTAL.CONTRIBUTION')"
          />
        </v-scale-transition>
        <span
          class="text-body-1 text-sm-body-2 text-md-h6 font-weight-regular"
          v-text="contribution"
        />
      </v-col>
      <v-col cols="12" sm class="text-sm-center pt-0 pt-sm-3">
        <v-scale-transition leave-absolute hide-on-leave>
          <span
            v-if="$vuetify.breakpoint.xsOnly"
            class="text-subtitle-2"
            v-text="$t('RANKINGS.TOTAL.DONATION')"
          />
        </v-scale-transition>
        <span
          class="text-body-1 text-sm-body-2 text-md-h6 font-weight-regular"
          v-text="donation"
        />
      </v-col>
    </v-row>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
