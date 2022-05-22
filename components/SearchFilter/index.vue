<template>
  <v-card tile>
    <v-card-title
      class="py-3 px-4 grey--text text--darken-2 text-body-1 text-sm-h6 font-weight-bold"
      v-text="$t('SEARCH.TITLE')"
    />
    <v-divider />
    <v-card-text class="pa-0">
      <v-list class="py-0">
        <v-list-item>
          <v-list-item-content>
            <label role="button">
              <span
                class="grey--text text--darken-2 text-caption"
                v-text="$t('SEARCH.LABEL.KEYWORD')"
              />
              <v-text-field
                v-model="value"
                dense
                outlined
                clearable
                hide-details
                role="button"
                class="text-body-2"
              />
            </label>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <span
              class="grey--text text--darken-2 text-caption"
              v-text="$t('SEARCH.LABEL.DEAL_TYPE')"
            />
            <v-select
              dense
              outlined
              hide-details
              append-icon="mdi-chevron-down"
            />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <span
              class="grey--text text--darken-2 text-caption"
              v-text="$t('SEARCH.LABEL.CATEGORY')"
            />
            <v-select
              dense
              outlined
              hide-details
              append-icon="mdi-chevron-down"
            />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <label role="button">
              <span
                class="grey--text text--darken-2 text-caption"
                v-text="$t('SEARCH.LABEL.BRAND')"
              />
              <v-text-field
                dense
                outlined
                hide-details
                role="button"
                class="text-body-2"
              />
            </label>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <span
              class="grey--text text--darken-2 text-caption"
              v-text="$tc('SEARCH.LABEL.PRICE', 0)"
            />
            <v-row class="my-0" align="center">
              <v-col cols="12" sm class="py-0 pr-sm-0">
                <v-text-field
                  dense
                  outlined
                  hide-details
                  role="button"
                  class="text-body-2"
                />
              </v-col>
              <v-scale-transition leave-absolute>
                <v-col
                  v-if="!$vuetify.breakpoint.xsOnly"
                  cols="auto"
                  class="py-0 px-1"
                >
                  <v-icon size="15">
                    mdi-tilde
                  </v-icon>
                </v-col>
              </v-scale-transition>
              <v-col cols="12" sm class="pb-0 pt-2 pt-sm-0 pl-sm-0">
                <v-text-field
                  dense
                  outlined
                  hide-details
                  role="button"
                  class="text-body-2"
                />
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <span
              class="grey--text text--darken-2 text-caption"
              v-text="$t('SEARCH.LABEL.ITEM_CONDITION')"
            />
            <v-select
              dense
              outlined
              hide-details
              append-icon="mdi-chevron-down"
            />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <span
              class="grey--text text--darken-2 text-caption"
              v-text="$t('SEARCH.LABEL.SHIPPING_COVERED')"
            />
            <v-select
              dense
              outlined
              hide-details
              append-icon="mdi-chevron-down"
            />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <span
              class="grey--text text--darken-2 text-caption"
              v-text="$t('SEARCH.LABEL.ITEM_STATUS')"
            />
            <v-select
              dense
              outlined
              hide-details
              append-icon="mdi-chevron-down"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-divider />
    <v-card-actions class="pa-2">
      <v-row class="ma-0">
        <v-col class="pr-1">
          <v-btn block depressed class="text-capitalize">
            {{ $t('SEARCH.BUTTON.CLEAR') }}
          </v-btn>
        </v-col>
        <v-col class="pl-1">
          <v-btn
            :color="lightRed"
            block
            depressed
            class="white--text text-capitalize"
            @click="onSearchHandler"
          >
            {{ $t('SEARCH.BUTTON.SEARCH') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
