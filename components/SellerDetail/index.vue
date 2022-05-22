<template>
  <v-row>
    <v-col cols="12" class="pb-0">
      <!-- TODO: will be change -->
      <v-card tile>
        <v-card-text class="py-sm-5 text-caption text-sm-body-1">
          <v-row justify="center" class="my-sm-0">
            <v-col cols="12" sm="11">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus
                Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line
                in section 1.10.32.
              </p>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
              <p class="mb-0">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" class="pb-0">
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
    <v-col cols="12">
      <v-card tile>
        <v-card-title
          class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
          text-body-1 text-sm-h6 font-weight-medium"
          v-text="$t('USER_DETAIL.ITEMS')"
        />
        <v-card-text class="py-md-5">
          <v-row align="center" justify="center" class="my-md-0">
            <v-col cols="12" md="10">
              <v-slide-y-transition group leave-absolute class="row my-0">
                <v-col
                  v-for="item in items"
                  :key="item.id"
                  :cols="$vuetify.breakpoint.width < 375 ? 6 : 4"
                  sm="3"
                  class="px-2 px-md-3"
                >
                  <user-detail-product-card
                    :title="item.title"
                    :price="item.price"
                    :sold="item.sold"
                    :image="item.image"
                  />
                </v-col>
              </v-slide-y-transition>
              <v-scale-transition>
                <app-empty-data v-if="!items.length" src="/images/empty.png" />
              </v-scale-transition>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
