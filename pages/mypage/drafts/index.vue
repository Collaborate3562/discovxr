<template>
  <v-row class="my-0">
    <v-col v-if="$vuetify.breakpoint.width >= 768" sm="4" md="3">
      <my-page-sidebar />
    </v-col>
    <v-col
      :class="{ 'pl-3': $vuetify.breakpoint.width < 768 }"
      class="pl-0 pl-lg-3 pr-lg-0"
    >
      <v-card tile>
        <v-card-title
          class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
          text-body-1 text-sm-h6 font-weight-medium"
          v-text="$t('DRAFT_ITEMS.TITLE')"
        />
        <v-card-text class="pa-0">
          <v-list v-if="items.length" class="py-0">
            <v-slide-y-transition group leave-absolute>
              <v-list-item key="list-header" class="pa-0">
                <v-checkbox
                  v-model="checkboxState.isAll"
                  :ripple="false"
                  :color="lightRed"
                  dense
                  hide-details
                  class="mt-0 pt-0 ml-2"
                  @change="setToggle"
                />
                <v-divider vertical />
                <v-list-item-content class="px-3 d-block">
                  <v-row>
                    <v-col cols="12" sm="2">
                      <my-page-action-dropdown>
                        {{ $t('DRAFT_ITEMS.ACTIONS.NAME') }}
                      </my-page-action-dropdown>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
              <template v-for="item in items">
                <v-divider :key="`divider-${item.id}`" />
                <my-page-deal-card
                  :id="item.id"
                  :key="item.id"
                  :action-text="$t('DRAFT_ITEMS.ACTIONS.NAME')"
                  :checkbox-state="checkboxState"
                  :image="item.image"
                  :title="item.title"
                  :timestamp="item.timestamp"
                  :status="item.status"
                  :deal-type="item.dealType"
                />
              </template>
            </v-slide-y-transition>
          </v-list>
          <v-scale-transition>
            <app-empty-data v-if="!items.length" src="/images/empty.png" />
          </v-scale-transition>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
