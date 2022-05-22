<template>
  <app-modal-window
    :key="isOpen"
    :modal="isOpen"
    max-width="768"
    content-class="ml-6"
    @close="close"
  >
    <template #title>
      <v-row class="my-0" justify="center">
        <v-col cols="12" sm="11" md="10">
          <v-scale-transition leave-absolute>
            <h2
              :key="isConfirmation"
              class="text-center text-h5 font-weight-bold"
              v-text="$tc('ITEM_DETAIL.RAFFLE_MODAL.TITLE', +isConfirmation)"
            />
          </v-scale-transition>
        </v-col>
        <v-scale-transition leave-absolute hide-on-leave>
          <v-col
            v-if="isConfirmation"
            cols="12"
            sm="11"
            md="10"
            class="py-1 py-sm-2"
          >
            <v-card tile outlined flat class="py-sm-2">
              <v-card-title
                class="justify-center text-caption text-sm-subtitle-2 font-weight-medium"
                v-text="$tc('ITEM_DETAIL.RAFFLE_MODAL.TICKET', 0)"
              />
              <v-card-subtitle
                class="mt-sm-n3 text-center font-weight-regular black--text text-h6 text-sm-h5"
                v-text="'¥3000'"
              />
            </v-card>
          </v-col>
        </v-scale-transition>
        <v-scale-transition leave-absolute hide-on-leave>
          <v-col
            v-if="isConfirmation"
            cols="12"
            sm="11"
            md="10"
            class="py-1 py-sm-2"
          >
            <v-card tile outlined flat class="py-sm-2">
              <v-card-title
                class="justify-center text-caption text-sm-subtitle-2 font-weight-medium"
                v-text="$tc('ITEM_DETAIL.RAFFLE_MODAL.QUANTITY', 0)"
              />
              <v-card-subtitle
                class="mt-sm-n3 text-center font-weight-regular black--text text-h6 text-sm-h5"
                v-text="3"
              />
            </v-card>
          </v-col>
        </v-scale-transition>
        <v-scale-transition leave-absolute hide-on-leave>
          <v-col
            v-if="isConfirmation"
            cols="12"
            sm="11"
            md="10"
            class="py-1 py-sm-2"
          >
            <v-card tile outlined flat class="py-sm-2" color="grey lighten-2">
              <v-card-title
                class="justify-center text-caption text-sm-subtitle-2 font-weight-medium"
                v-text="$t('ITEM_DETAIL.RAFFLE_MODAL.PRICE')"
              />
              <v-card-subtitle
                class="mt-sm-n3 text-center font-weight-regular black--text text-h6 text-sm-h5"
                v-text="'¥9680'"
              />
            </v-card>
          </v-col>
        </v-scale-transition>
        <v-slide-y-transition leave-absolute hide-on-leave>
          <v-col v-if="!isConfirmation" cols="12" sm="11" md="10" class="py-0">
            <v-row class="my-0" align="center" justify="end">
              <v-col
                cols="12"
                sm="auto"
                class="pr-0 text-body-1"
                v-text="$tc('ITEM_DETAIL.RAFFLE_MODAL.TICKET', 1)"
              />
              <v-col cols="12" sm="8" class="pt-0 pt-sm-3">
                <v-text-field
                  :dense="$vuetify.breakpoint.xsOnly"
                  outlined
                  role="button"
                  class="rounded-0"
                  hide-details="auto"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-slide-y-transition>
        <v-slide-y-transition leave-absolute hide-on-leave>
          <v-col v-if="!isConfirmation" cols="12" sm="11" md="10" class="py-0">
            <v-row class="my-0" align="center" justify="end">
              <v-col
                cols="12"
                sm="auto"
                class="pr-0 text-body-1"
                v-text="$tc('ITEM_DETAIL.RAFFLE_MODAL.QUANTITY', 1)"
              />
              <v-col cols="12" sm="8" class="pt-0 pt-sm-3">
                <v-select
                  dense
                  outlined
                  full-width
                  hide-details
                  class="rounded-0"
                  append-icon="mdi-chevron-down"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-slide-y-transition>
        <v-slide-y-transition leave-absolute hide-on-leave>
          <v-col v-if="!isConfirmation" cols="12" class="px-0">
            <v-divider />
          </v-col>
        </v-slide-y-transition>
      </v-row>
    </template>
    <template #body>
      <v-row justify="center" class="black--text">
        <v-scale-transition leave-absolute hide-on-leave>
          <v-col v-if="!isConfirmation" cols="12" sm="11" md="10" class="pt-0">
            <v-row class="my-0" justify="end" align="center">
              <v-col
                cols="6"
                sm="auto"
                class="text-body-1"
                v-text="$t('ITEM_DETAIL.RAFFLE_MODAL.PRICE')"
              />
              <v-col
                cols="6"
                sm="3"
                class="text-right text-body-1 font-weight-medium"
              >
                ¥3680
              </v-col>
            </v-row>
          </v-col>
        </v-scale-transition>
        <v-col
          :class="isConfirmation ? 'pt-8' : 'pt-5 pt-sm-15'"
          cols="12"
          sm="11"
          md="10"
          class="pb-0 text-body-2"
        >
          <v-slide-y-transition leave-absolute hide-on-leave>
            <div v-if="isConfirmation">
              <p
                v-for="(text, i) in $t(
                  'ITEM_DETAIL.RAFFLE_MODAL.CONFIRMATION_DESCRIPTION',
                )"
                :key="i"
                class="mb-4"
                v-text="text"
              />
            </div>
          </v-slide-y-transition>
          <v-slide-y-reverse-transition leave-absolute hide-on-leave>
            <p
              v-if="!isConfirmation"
              class="mb-0"
              v-text="$t('ITEM_DETAIL.RAFFLE_MODAL.DESCRIPTION')"
            />
          </v-slide-y-reverse-transition>
        </v-col>
      </v-row>
    </template>
    <template #actions>
      <v-row justify="center" class="my-0">
        <v-col cols="12" sm="11" md="10">
          <v-btn
            :color="lightRed"
            large
            block
            elevation="0"
            class="font-weight-normal white--text text-sm-h6"
            @click="clickHandler"
          >
            <v-scale-transition leave-absolute>
              <span
                :key="isConfirmation"
                v-text="
                  $t(
                    `ITEM_DETAIL.RAFFLE_MODAL.BUTTON.${
                      isConfirmation ? 'BUY' : 'CONFIRM'
                    }`,
                  )
                "
              />
            </v-scale-transition>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="11" md="10">
          <v-row>
            <v-scale-transition leave-absolute>
              <v-col v-if="isConfirmation" cols="12" sm="6" class="pt-0">
                <v-btn
                  :color="lightRed"
                  large
                  block
                  outlined
                  class="font-weight-normal text-sm-h6"
                  @click="setIsConfitmation(false)"
                >
                  {{ $t('ITEM_DETAIL.RAFFLE_MODAL.BUTTON.BACK') }}
                </v-btn>
              </v-col>
            </v-scale-transition>
            <v-col :sm="isConfirmation ? 6 : 12" cols="12" class="pt-0">
              <v-btn
                :color="lightRed"
                large
                block
                outlined
                class="font-weight-normal text-sm-h6"
                @click="close"
              >
                {{ $t('ITEM_DETAIL.RAFFLE_MODAL.BUTTON.CLOSE') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </app-modal-window>
</template>

<script lang="ts" src="./index.script.ts"></script>
