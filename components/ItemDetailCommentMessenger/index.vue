<template>
  <v-card tile>
    <v-card-text>
      <v-row class="my-md-0" justify="center">
        <v-col cols="12" md="10">
          <v-row>
            <v-col cols="12">
              <v-sheet ref="chatBox" class="overflow-y-auto" max-height="680">
                <v-list class="py-0">
                  <v-slide-y-reverse-transition leave-group group>
                    <v-list-item
                      v-for="item in items"
                      :key="item.id"
                      class="px-0"
                    >
                      <v-list-item-avatar
                        v-if="!item.isMe && $vuetify.breakpoint.mdAndUp"
                        size="60"
                        class="align-self-start mr-0 mt-2"
                      >
                        <v-img :src="item.avatar || '/images/non-avatar.jpg'" />
                      </v-list-item-avatar>
                      <v-list-item-content :class="item.isMe ? 'py-0' : 'py-2'">
                        <div class="px-3 mb-n1 d-flex align-center">
                          <v-list-item-avatar
                            v-if="!item.isMe && $vuetify.breakpoint.smAndDown"
                            :size="$vuetify.breakpoint.mdAndUp ? 60 : 30"
                            class="align-self-start mr-2 my-0"
                          >
                            <v-img
                              :src="item.avatar || '/images/non-avatar.jpg'"
                            />
                          </v-list-item-avatar>
                          <v-list-item-title
                            v-if="!item.isMe"
                            class="text-sm-h6"
                            v-text="item.username"
                          />
                        </div>
                        <messenger-text-message
                          :message="item.message"
                          :timestamp="item.timestamp"
                          :is-me="item.isMe"
                        />
                        <v-row v-if="!item.isMe" class="my-n2 mx-0">
                          <v-col cols="auto" class="pr-0">
                            <v-btn
                              text
                              small
                              color="grey darken-2"
                              class="text-capitalize"
                            >
                              {{ $t('ITEM_DETAIL.BUTTON.REPLY') }}
                            </v-btn>
                          </v-col>
                          <v-col cols="auto" class="pl-0">
                            <v-btn
                              text
                              small
                              color="grey darken-2"
                              class="text-capitalize"
                            >
                              {{ $t('ITEM_DETAIL.BUTTON.REPORT') }}
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </v-list-item>
                  </v-slide-y-reverse-transition>
                </v-list>
              </v-sheet>
              <v-scale-transition leave-absolute>
                <app-empty-data v-if="!items.length" src="/images/empty.png" />
              </v-scale-transition>
            </v-col>
            <v-col cols="12">
              <v-alert
                :color="alertLightRed"
                tile
                class="mb-0 py-3 text-caption text-sm-body-2 text-md-body-1
                text-lg-h6 font-weight-regular"
              >
                <span v-text="$t('ITEM_DETAIL.COMMENT_ALERT')" />
              </v-alert>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-textarea
                v-model.trim="message"
                dense
                rows="5"
                outlined
                no-resize
                role="button"
                hide-details
                class="rounded-0"
                color="grey lighten-1"
                background-color="grey lighten-5"
                @keypress.ctrl.enter="onSendMessage"
              />
            </v-col>
            <v-col cols="12">
              <v-btn
                :color="lightBlack"
                :disabled="!message"
                tile
                block
                x-large
                depressed
                class="white--text text-md-h6"
                @click="onSendMessage"
              >
                {{ $t('ITEM_DETAIL.BUTTON.SEND_COMMENT') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
