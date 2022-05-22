<template>
  <v-row class="my-0 pb-lg-10">
    <v-col
      v-for="(section, i) in sections"
      :key="`section-${i}`"
      :class="{ 'pt-0': !i }"
      cols="12"
      class="mt-lg-10"
    >
      <h2 class="text-lg-h4 font-weight-medium" v-text="$t(section.title)" />
      <div class="mt-3 mt-lg-5 mb-5 items-grid">
        <product-card
          v-for="item in section.items"
          :id="item.id"
          :key="item.id"
          :img="item.image"
          :avatar="item.avatar"
          :username="item.username"
          :deal-type="item.dealType"
          :title="item.title"
          :price="item.price"
        >
          <template #auction-summary-first-value>
            {{ item.bids }}
          </template>
          <template #shopping-summary-first-value>
            {{ item.quantity }}
          </template>
          <template #raffle-summary-first-value>
            {{ item.prize }}
          </template>
          <template #auction-summary-last-value>
            {{ item.left }}
          </template>
          <template #shopping-summary-last-value>
            {{ item.donation }}%
          </template>
          <template #raffle-summary-last-value>
            {{ item.left }}
          </template>
        </product-card>
      </div>
      <div class="d-flex justify-end">
        <v-btn nuxt outlined color="grey" class="text-none">
          <span
            class="grey--text text--darken-2"
            v-text="$t('HOME.BUTTON.MORE')"
          />
        </v-btn>
      </div>
    </v-col>
    <v-col
      v-for="(section, i) in infoSections"
      :key="`info-section-${i}`"
      cols="12"
      class="mt-lg-10"
    >
      <h2 class="text-lg-h4 font-weight-medium" v-text="$t(section.title)" />
      <div class="mt-3 mt-lg-5 mb-10 items-grid">
        <home-rounded-section-card
          v-for="item in section.items"
          :key="item.id"
          :img="item.image"
          :title="item.title"
        />
      </div>
      <div class="d-flex justify-end">
        <v-btn
          :color="lightRed"
          :x-large="$vuetify.breakpoint.mdAndUp"
          large
          block
          nuxt
          outlined
          class="text-none"
        >
          <span
            class="text-body-1 text-sm-h6 text-md-h5 font-weight-medium"
            v-text="$t(section.button)"
          />
        </v-btn>
      </div>
    </v-col>
    <v-btn
      :color="lightRed"
      :width="buttonSize"
      :height="buttonSize"
      :class="{ 'button-position': $vuetify.breakpoint.xsOnly }"
      class="white--text text-none"
      fab
      fixed
      right
      bottom
      x-large
      @click="actionHandler"
    >
      <span class="d-flex flex-column justify-center align-center">
        <span
          class="text-caption text-sm-body-1 font-weight-medium"
          v-text="$t('HOME.BUTTON.POST')"
        />
        <share-icon :width="iconSize" :height="iconSize" />
      </span>
    </v-btn>
    <cannot-post-modal
      :key="modal.isOpen.value"
      :modal="modal.isOpen.value"
      @close="modal.close"
    />
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
