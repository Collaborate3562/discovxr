<template>
  <v-row class="my-0">
    <v-col cols="12">
      <v-card tile>
        <v-card-text>
          <v-row class="my-md-0" justify="center">
            <v-col cols="12" md="10">
              <v-row class="my-sm-0">
                <v-col cols="12" sm="6">
                  <image-carousel
                    :images="item.images"
                    :deal-type="item.dealType"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <!-- TODO: will be changed (only for design) -->
                  <v-scale-transition leave-absolute>
                    <auction-item-detail
                      v-if="isAuction"
                      :donation="10"
                      :number-bids="94"
                      :time-left="6"
                      :likes="10"
                      :is-anonymous="item.isAnonymous"
                      :messages="10"
                      price="¥94,000"
                      project-name="Help the kids in Africa by name name"
                    />
                  </v-scale-transition>
                  <v-scale-transition leave-absolute>
                    <shopping-item-detail
                      v-if="isShopping"
                      :donation="10"
                      :number-bids="94"
                      :time-left="6"
                      :likes="10"
                      :is-anonymous="item.isAnonymous"
                      :messages="10"
                      price="¥94,000"
                      project-name="Help the kids in Africa by name name"
                    />
                  </v-scale-transition>
                  <v-scale-transition leave-absolute>
                    <raffle-item-detail
                      v-if="isRaffle"
                      :donation="10"
                      :time-left="6"
                      :likes="10"
                      :messages="30"
                      :is-anonymous="item.isAnonymous"
                      entry="¥5,000"
                      title="Original video message from Michael Jackson"
                      donate-to="
                        Help the kids in Africa by developing a wat well aaa aaa aaa aaa aaa aaa aaa
                      "
                    />
                  </v-scale-transition>
                </v-col>
                <v-col cols="12">
                  <v-card tile outlined>
                    <v-card-title
                      class="py-3 text-uppercase justify-center grey--text text--darken-2
                      font-weight-bold text-body-1 text-sm-h6 word-wrap"
                      v-text="
                        $t(
                          `ITEM_DETAIL.SUBTITLE.${
                            isRaffle ? 'PRIZE_DETAIL' : 'DESCRIPTION'
                          }`,
                        )
                      "
                    />
                  </v-card>
                  <!-- TODO: will be changed (only for design) -->
                  <v-row
                    class="my-0 text-caption text-sm-body-2 font-weight-medium text-md-h6"
                  >
                    <v-col cols="12">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of “de Finibus
                      Bonorum et Malorum” (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”,
                      comes from a line in section 1.10.32.
                    </v-col>
                    <v-col cols="12">
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero
                      are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H. Rackham.
                    </v-col>
                  </v-row>
                </v-col>
                <v-slide-y-transition leave-absolute>
                  <v-col v-if="isRaffle" cols="12">
                    <v-card tile outlined>
                      <v-card-title
                        class="py-3 text-uppercase justify-center grey--text text--darken-2
                        font-weight-bold text-body-1 text-sm-h6 word-wrap"
                        v-text="$t('ITEM_DETAIL.SUBTITLE.WHY_DONATE')"
                      />
                    </v-card>
                    <!-- TODO: will be changed (only for design) -->
                    <v-row
                      class="my-0 text-caption text-sm-body-2 font-weight-medium text-md-h6"
                    >
                      <v-col cols="12">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of “de
                        Finibus Bonorum et Malorum” (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, “Lorem
                        ipsum dolor sit amet..”, comes from a line in section
                        1.10.32.
                      </v-col>
                      <v-col cols="12">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum”
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.
                      </v-col>
                    </v-row>
                  </v-col>
                </v-slide-y-transition>
                <v-slide-y-transition leave-absolute>
                  <v-col v-if="isRaffle" cols="12">
                    <v-card tile outlined>
                      <v-card-title
                        class="py-3 text-uppercase justify-center grey--text text--darken-2
                        font-weight-bold text-body-1 text-sm-h6 word-wrap"
                        v-text="$t('ITEM_DETAIL.SUBTITLE.RULES')"
                      />
                    </v-card>
                    <!-- TODO: will be changed (only for design) -->
                    <v-row
                      class="my-0 text-caption text-sm-body-2 font-weight-medium text-md-h6"
                    >
                      <v-col cols="12">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of “de
                        Finibus Bonorum et Malorum” (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, “Lorem
                        ipsum dolor sit amet..”, comes from a line in section
                        1.10.32.
                      </v-col>
                      <v-col cols="12">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum”
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.
                      </v-col>
                    </v-row>
                  </v-col>
                </v-slide-y-transition>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <item-detail-comment-messenger />
    </v-col>
    <v-col cols="12">
      <v-card tile>
        <v-card-text class="py-sm-5">
          <v-row align="center" justify="center" class="my-sm-0">
            <v-col cols="auto" class="d-flex">
              <line-chat-icon
                :width="$vuetify.breakpoint.xsOnly ? 40 : 50"
                :height="$vuetify.breakpoint.xsOnly ? 40 : 50"
              />
            </v-col>
            <v-col cols="auto" class="d-flex">
              <twitter-icon
                :width="$vuetify.breakpoint.xsOnly ? 40 : 50"
                :height="$vuetify.breakpoint.xsOnly ? 40 : 50"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col v-if="!item.isAnonymous" cols="12">
      <v-card tile>
        <v-card-title
          class="py-1 py-sm-3 grey--text text--darken-3 text-body-1 text-sm-h6 font-weight-medium"
        >
          <v-row align="center" justify="center" class="my-0">
            <v-col cols="12" md="10">
              <h2
                class="word-wrap"
                v-text="
                  $t('ITEM_DETAIL.SUBTITLE.OTHER_FROM', { name: item.username })
                "
              />
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text class="pb-md-5">
          <v-row align="center" justify="center" class="mb-sm-0">
            <v-col cols="12" md="10" class="pt-0">
              <v-slide-y-transition group leave-absolute class="row my-0">
                <v-col
                  v-for="card in otherItems"
                  :key="card.id"
                  :cols="$vuetify.breakpoint.width < 375 ? 6 : 4"
                  sm="3"
                  class="px-2 px-md-3"
                >
                  <user-detail-product-card
                    :title="card.title"
                    :price="card.price"
                    :sold="card.sold"
                    :image="card.image"
                  />
                </v-col>
              </v-slide-y-transition>
              <v-scale-transition>
                <app-empty-data
                  v-if="!otherItems.length"
                  src="/images/empty.png"
                />
              </v-scale-transition>
            </v-col>
            <v-col cols="12" md="10">
              <v-btn
                :x-large="$vuetify.breakpoint.smAndUp"
                large
                tile
                block
                outlined
                depressed
                color="grey"
                class="text-none text-caption text-sm-h6"
              >
                <span
                  class="grey--text text--darken-2"
                  v-text="
                    $t('ITEM_DETAIL.BUTTON.MORE_FROM', { name: item.username })
                  "
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card tile>
        <v-card-title
          class="py-1 py-sm-3 grey--text text--darken-3 text-body-1 text-sm-h6 font-weight-medium"
        >
          <v-row align="center" justify="center" class="my-0">
            <v-col cols="12" md="10">
              <h2
                class="word-wrap"
                v-text="$t('ITEM_DETAIL.SUBTITLE.RECOMMENDED')"
              />
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text class="pb-md-5">
          <v-row align="center" justify="center" class="mb-sm-0">
            <v-col cols="12" md="10">
              <v-slide-y-transition group leave-absolute class="row my-0">
                <v-col
                  v-for="card in recommendedItems"
                  :key="card.id"
                  :cols="$vuetify.breakpoint.width < 425 ? 6 : 4"
                  sm="3"
                  class="px-2 px-md-3"
                >
                  <product-card
                    :id="card.id"
                    :img="card.image"
                    :avatar="card.avatar"
                    :username="card.username"
                    :deal-type="card.dealType"
                    :title="card.title"
                    :price="card.price"
                  >
                    <template #auction-summary-first-value>
                      {{ card.bids }}
                    </template>
                    <template #shopping-summary-first-value>
                      {{ card.quantity }}
                    </template>
                    <template #raffle-summary-first-value>
                      {{ card.prize }}
                    </template>
                    <template #auction-summary-last-value>
                      {{ card.left }}
                    </template>
                    <template #shopping-summary-last-value>
                      {{ card.donation }}%
                    </template>
                    <template #raffle-summary-last-value>
                      {{ card.left }}
                    </template>
                  </product-card>
                </v-col>
              </v-slide-y-transition>
              <v-scale-transition>
                <app-empty-data
                  v-if="!recommendedItems.length"
                  src="/images/empty.png"
                />
              </v-scale-transition>
            </v-col>
            <v-col cols="12" md="10">
              <v-btn
                :x-large="$vuetify.breakpoint.smAndUp"
                large
                tile
                block
                outlined
                depressed
                color="grey"
                class="text-none text-caption text-sm-h6 text-wrap"
              >
                <span
                  class="grey--text text--darken-2"
                  v-text="$t('ITEM_DETAIL.BUTTON.MORE_RECOMMENDED')"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <remaining-time-modal />
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
