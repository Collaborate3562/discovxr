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
          <h2
            class="text-center text-h5 font-weight-bold"
            v-text="$t('ITEM_DETAIL.SHOPPING_MODAL.TITLE')"
          />
        </v-col>
      </v-row>
    </template>
    <template #body>
      <v-row justify="center" class="my-0 black--text">
        <v-col cols="12" sm="11" md="10" class="py-0">
          <v-row>
            <v-scale-transition leave-absolute hide-on-leave>
              <v-col
                v-if="!isViewCart"
                cols="12"
                sm="auto"
                class="pb-1 d-flex justify-center"
              >
                <v-list-item-avatar
                  tile
                  size="80"
                  class="align-self-start mt-1 mb-0 mr-0"
                >
                  <v-img src="/images/item-image.png" />
                </v-list-item-avatar>
              </v-col>
            </v-scale-transition>
            <v-col>
              <v-scale-transition leave-absolute hide-on-leave>
                <app-empty-data
                  v-if="isViewCart && !carts.size"
                  src="/images/empty.png"
                />
              </v-scale-transition>
              <v-slide-y-transition leave-absolute class="row">
                <!-- TODO: will be change -->
                <v-list v-if="isViewCart" :key="content" class="pt-0">
                  <template v-for="(item, i) in carts">
                    <v-divider v-if="i" :key="`divider-${item[0]}`" />
                    <v-list-item
                      :key="`item-${item[0]}`"
                      class="px-0 py-3 flex-column flex-sm-row"
                    >
                      <v-list-item-avatar
                        tile
                        size="60"
                        class="align-self-start mt-1 mx-auto mr-sm-3"
                      >
                        <v-img src="/images/item-image.png" />
                      </v-list-item-avatar>
                      <v-list-item-content class="py-0">
                        <h3
                          class="text-body-2 text-sm-body-1"
                          v-text="
                            `Item name item name item name item name item
                          name item na me Item name item name`
                          "
                        />
                        <v-row class="my-0">
                          <v-col cols="12" sm>
                            <v-row>
                              <v-col cols="12" class="pb-0">
                                <span
                                  class="text-subtitle-2"
                                  v-text="
                                    $t('ITEM_DETAIL.SHOPPING_MODAL.COLOR')
                                  "
                                />:
                                <span v-text="'Black'" />
                              </v-col>
                              <v-col cols="12" class="py-0">
                                <span
                                  class="text-subtitle-2"
                                  v-text="$t('ITEM_DETAIL.SHOPPING_MODAL.SIZE')"
                                />:
                                <span v-text="'S2'" />
                              </v-col>
                              <v-col cols="12" class="pt-0">
                                <span
                                  class="text-subtitle-2"
                                  v-text="
                                    $t('ITEM_DETAIL.SHOPPING_MODAL.QUANTITY')
                                  "
                                />:
                                <span v-text="2" />
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="auto"
                            class="pt-0 pt-sm-3 align-self-end"
                          >
                            <v-btn
                              :color="lightRed"
                              :block="$vuetify.breakpoint.xsOnly"
                              outlined
                              class="text-none font-weight-normal text-body-2"
                              @click="removeCart(item[0])"
                            >
                              {{
                                $t('ITEM_DETAIL.SHOPPING_MODAL.BUTTON.REMOVE')
                              }}
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-slide-y-transition>
              <v-row>
                <v-slide-y-transition leave-absolute hide-on-leave>
                  <v-col v-if="!isViewCart" cols="12">
                    <h3
                      class="text-body-2 text-sm-body-1"
                      v-text="
                        `Item name item name item name item name item
                      name item na me Item name item name`
                      "
                    />
                  </v-col>
                </v-slide-y-transition>
                <v-slide-y-transition leave-absolute hide-on-leave>
                  <v-col
                    v-if="!isViewCart"
                    cols="12"
                    class="py-0 d-flex flex-column"
                  >
                    <span
                      class="text-body-2 text-sm-body-1 font-weight-bold text-capitalize"
                      v-text="$t('ITEM_DETAIL.SHOPPING_MODAL.COLOR')"
                    />
                    <color-selection :colors="colorSelectionData" />
                  </v-col>
                </v-slide-y-transition>
                <v-slide-y-transition leave-absolute hide-on-leave>
                  <v-col
                    v-if="!isViewCart"
                    cols="12"
                    class="d-flex flex-column"
                  >
                    <span
                      class="text-body-2 text-sm-body-1 font-weight-bold text-capitalize"
                      v-text="$t('ITEM_DETAIL.SHOPPING_MODAL.SIZE')"
                    />
                    <size-selection :sizes="sizeSelectionData" />
                  </v-col>
                </v-slide-y-transition>
                <v-slide-y-transition leave-absolute hide-on-leave>
                  <v-col
                    v-if="!isViewCart"
                    cols="12"
                    class="pt-1 d-flex flex-column"
                  >
                    <span
                      class="text-body-2 text-sm-body-1 font-weight-bold text-capitalize"
                      v-text="$t('ITEM_DETAIL.SHOPPING_MODAL.QUANTITY')"
                    />
                    <v-select
                      dense
                      outlined
                      full-width
                      hide-details
                      class="rounded-0 mt-1"
                      append-icon="mdi-chevron-down"
                    />
                  </v-col>
                </v-slide-y-transition>
                <v-col cols="12">
                  <v-row class="mt-0">
                    <v-col cols="12" sm="6" class="pb-0 pb-sm-3">
                      <v-btn
                        :color="lightRed"
                        :disabled="isViewCart && !carts.size"
                        large
                        block
                        elevation="0"
                        class="text-none font-weight-normal white--text text-sm-body-1"
                        @click="clickHandler"
                      >
                        <v-scale-transition leave-absolute>
                          <span
                            :key="isViewCart"
                            v-text="
                              $t(
                                `ITEM_DETAIL.SHOPPING_MODAL.BUTTON.${
                                  isViewCart ? 'BUY' : 'ADD'
                                }`,
                              )
                            "
                          />
                        </v-scale-transition>
                      </v-btn>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-btn
                        :color="lightBlack"
                        large
                        block
                        elevation="0"
                        class="text-none font-weight-normal white--text text-sm-body-1"
                        @click="setIsViewCart(!isViewCart)"
                      >
                        <v-scale-transition leave-absolute>
                          <span
                            :key="isViewCart"
                            v-text="
                              $t(
                                `ITEM_DETAIL.SHOPPING_MODAL.BUTTON.${
                                  isViewCart ? 'BACK' : 'VIEW'
                                }`,
                              )
                            "
                          />
                        </v-scale-transition>
                        <v-scale-transition leave-absolute>
                          <app-badge
                            v-if="!isViewCart"
                            :content="content"
                            color="white black--text"
                            position-none
                            class="ml-2"
                          />
                        </v-scale-transition>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" class="pt-0">
                  <v-btn
                    :color="lightRed"
                    large
                    block
                    outlined
                    class="text-none font-weight-normal text-sm-h6"
                    @click="close"
                  >
                    {{ $t('ITEM_DETAIL.SHOPPING_MODAL.BUTTON.CLOSE') }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </app-modal-window>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
