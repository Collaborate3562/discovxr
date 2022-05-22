<template>
  <v-row class="my-0">
    <v-col v-if="$vuetify.breakpoint.width >= 768" sm="4" md="3">
      <my-page-sidebar />
    </v-col>
    <v-col
      :class="{ 'pl-3': $vuetify.breakpoint.width < 768 }"
      class="pl-0 pl-lg-3 pr-lg-0"
    >
      <component :is="transitionMode" leave-absolute>
        <v-card :key="isFullSize" :class="{ 'full-size': isFullSize }" tile>
          <v-card-title
            class="grey lighten-4 pr-md-5 pa-3 grey--text text--darken-2
            text-body-1 text-sm-h6 font-weight-medium"
          >
            <v-row align="center">
              <v-col cols="auto" class="pr-0">
                <v-btn
                  :small="$vuetify.breakpoint.mdAndUp"
                  :to="localePath('/mypage/inbox')"
                  x-small
                  nuxt
                  icon
                  fab
                >
                  <v-icon :size="$vuetify.breakpoint.mdAndUp ? 35 : 25">
                    mdi-chevron-left
                  </v-icon>
                </v-btn>
              </v-col>
              <v-col cols="auto" class="pl-2">
                <v-avatar :size="$vuetify.breakpoint.smAndUp ? 50 : 40">
                  <v-img :src="avatar" />
                </v-avatar>
              </v-col>
              <v-col class="pl-0">
                <v-card-subtitle
                  class="pa-0 mb-1 text-body-2 text-sm-body-1
                  font-weight-medium black--text text-line-clamp"
                  v-text="username"
                />
                <v-card-subtitle class="pa-0 text-body-2 d-flex align-center">
                  <div class="d-flex">
                    <component :is="dealTypeIcon" width="20" height="20" />
                  </div>
                  <span
                    class="ml-1 text-body-2 text-line-clamp"
                    v-text="title"
                  />
                </v-card-subtitle>
              </v-col>
              <v-scale-transition leave-absolulte>
                <v-col
                  v-if="$vuetify.breakpoint.mdAndDown"
                  cols="auto"
                  class="pr-sm-0"
                >
                  <v-btn icon fab x-small @click="setFullSize(!isFullSize)">
                    <v-icon :class="{ 'mdi-rotate-180': isFullSize }">
                      mdi-resize
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-scale-transition>
              <v-col cols="12" sm="auto" class="pt-0 pt-sm-3">
                <v-btn
                  :block="$vuetify.breakpoint.xsOnly"
                  :color="color"
                  elevation="0"
                  max-width="220"
                  class="text-none mt-1 white--text text-body-2 text-sm-body-1 font-weight-medium"
                >
                  {{ $t('INBOX.MAKE_PAYMENT') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
          <div class="pt-3 pb-2 pb-md-0 pt-md-5">
            <v-sheet
              ref="chatBox"
              :min-height="items.length ? 468 : 'auto'"
              :max-height="maxHeight"
              class="overflow-y-auto"
            >
              <v-card-text class="py-0 px-3 px-md-5">
                <v-slide-y-reverse-transition class="row" group leave-absolute>
                  <messenger-text-message
                    v-for="item in items"
                    :key="item.id"
                    :message="item.message"
                    :timestamp="item.timestamp"
                    :is-me="item.isMe"
                  />
                </v-slide-y-reverse-transition>
                <v-scale-transition leave-absolute>
                  <app-empty-data
                    v-if="!items.length"
                    src="/images/empty.png"
                  />
                </v-scale-transition>
              </v-card-text>
            </v-sheet>
          </div>
          <v-card-actions class="px-1 pa-md-5 d-block">
            <v-row class="ma-0" align="end">
              <v-col cols="auto" class="pa-0">
                <v-btn elevation="0" fab small>
                  <v-icon color="black" size="20" role="button">
                    mdi-attachment
                  </v-icon>
                </v-btn>
              </v-col>
              <v-slide-y-reverse-transition leave-absolute>
                <v-col
                  v-if="$vuetify.breakpoint.mdAndUp"
                  cols="auto"
                  class="px-1 py-0"
                >
                  <v-btn elevation="0" fab small>
                    <v-icon color="black" size="20" role="button">
                      mdi-message-text
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-slide-y-reverse-transition>
              <v-col class="py-0 px-1">
                <v-slide-y-reverse-transition leave-absolute>
                  <v-textarea
                    :key="$vuetify.breakpoint.mdAndUp"
                    v-model.trim="message"
                    rows="1"
                    background-color="grey lighten-4"
                    flat
                    dense
                    outlined
                    no-resizepy-3
                    pt-md-5
                    auto-grow
                    hide-details
                    rounded
                    class="text-body-2"
                    role="button"
                    @keypress.ctrl.enter="onSendMessage"
                  />
                </v-slide-y-reverse-transition>
              </v-col>
              <v-col cols="auto" class="pa-0">
                <v-btn
                  :disabled="!message"
                  elevation="0"
                  fab
                  small
                  @click="onSendMessage"
                >
                  <v-icon color="black" size="20" role="button">
                    mdi-arrow-up
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </component>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
