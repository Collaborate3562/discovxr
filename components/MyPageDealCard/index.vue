<template>
  <v-list-item class="pa-0">
    <v-checkbox
      v-model="checkboxState.value"
      :value="id"
      :ripple="false"
      :color="lightRed"
      dense
      hide-details
      class="mt-0 pt-0 ml-2"
    />
    <v-divider vertical />
    <v-row class="ma-0">
      <v-col cols="auto" class="pb-0">
        <v-list-item-avatar
          :size="$vuetify.breakpoint.smAndUp ? 50 : 35"
          tile
          color="grey lighten-4 rounded-lg align-self-start ma-0"
        >
          <v-img :src="image">
            <v-list-item-content class="fill-height pa-0">
              <v-list-item-avatar size="15" class="deal-type-icon ma-0">
                <component :is="dealTypeIcon" />
              </v-list-item-avatar>
            </v-list-item-content>
          </v-img>
        </v-list-item-avatar>
      </v-col>
      <v-col class="pl-0 pb-0 pb-sm-3">
        <v-list-item-content class="pa-0">
          <v-list-item-title
            class="black--text text-body-2 text-sm-body-1 text-line-clamp"
            v-text="title"
          />
          <v-list-item-subtitle
            class="text-caption text-sm-body-2 mt-1"
            v-text="timestamp"
          />
          <client-only>
            <v-slide-y-transition leave-absolute hide-on-leave>
              <v-row v-if="!$vuetify.breakpoint.xsOnly" class="my-0">
                <v-col cols="12" sm="auto" class="pr-sm-1 pb-0">
                  <v-btn
                    :color="button && button.color"
                    :class="button && button.textColor"
                    block
                    width="170"
                    elevation="0"
                    class="text-capitalize text-body-1 font-weight-bold"
                  >
                    {{ $t(button && button.text) }}
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="auto" class="pl-sm-1 pb-0">
                  <my-page-action-dropdown>
                    {{ actionText }}
                  </my-page-action-dropdown>
                </v-col>
              </v-row>
            </v-slide-y-transition>
          </client-only>
        </v-list-item-content>
      </v-col>
      <client-only>
        <v-slide-y-reverse-transition leave-absolute hide-on-leave>
          <v-col v-if="$vuetify.breakpoint.xsOnly" class="pt-0" cols="12">
            <v-row class="my-0">
              <v-col cols="12" sm="auto" class="pr-sm-1 pb-0">
                <v-btn
                  elevation="0"
                  width="170"
                  block
                  class="text-capitalize grey--text text--darken-1 text-body-1 font-weight-bold"
                >
                  {{ $t('DRAFT_ITEMS.BUTTON') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="auto" class="pl-sm-1 pb-0">
                <my-page-action-dropdown>
                  {{ actionText }}
                </my-page-action-dropdown>
              </v-col>
            </v-row>
          </v-col>
        </v-slide-y-reverse-transition>
      </client-only>
    </v-row>
  </v-list-item>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
