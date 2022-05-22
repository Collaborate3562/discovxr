<template>
  <v-card tile>
    <v-img
      :src="img"
      alt="product image"
      width="100%"
      role="button"
      @click="$router.push(localePath(`/items/${id}`))"
    >
      <v-card-title
        class="fill-height pa-2 pl-0 align-end justify-space-between"
      >
        <v-sheet
          color="#00000099"
          class="pl-2 pl-md-3 pr-3 py-1 rounded-r-xl d-flex align-center justify-space-between"
        >
          <span
            class="text-small text-sm-caption grey--text text--lighten-1 mr-1 mr-sm-2"
            v-text="$t(label)"
          />
          <!-- TODO: currency -->
          <span
            :class="
              $vuetify.breakpoint.width < 375 ? 'text-small' : 'text-caption'
            "
            class="white--text text-sm-subtitle-2 font-weight-bold"
            v-text="price"
          />
        </v-sheet>
        <component
          :is="dealTypeIcon"
          v-if="dealTypeIcon"
          :width="$vuetify.breakpoint.xsOnly ? 25 : 30"
          :height="$vuetify.breakpoint.xsOnly ? 25 : 30"
        />
      </v-card-title>
    </v-img>
    <v-card-subtitle
      class="title-line-clamp pb-0 pb-sm-0 pa-2 pa-sm-3 black--text text-caption text-sm-body-1"
      v-text="title"
    />
    <v-card-subtitle class="mt-n1 mt-sm-0 py-1 px-2 px-sm-3">
      <div class="d-flex justify-space-between flex-wrap">
        <div>
          <span
            class="text-capitalize text-small text-sm-caption"
            v-text="$t(summaryTitles && summaryTitles.first)"
          />
          <span
            class="font-weight-bold black--text text-caption text-sm-body-1"
          >
            <slot v-if="isAuction" name="auction-summary-first-value" />
            <slot v-else-if="isShopping" name="shopping-summary-first-value" />
            <slot v-else-if="isRaffle" name="raffle-summary-first-value" />
          </span>
        </div>
        <div>
          <span
            class="text-capitalize text-small text-sm-caption"
            v-text="$t(summaryTitles && summaryTitles.last)"
          />
          <span
            class="font-weight-bold black--text text-caption text-sm-body-1"
          >
            <slot v-if="isAuction" name="auction-summary-last-value" />
            <slot v-else-if="isShopping" name="shopping-summary-last-value" />
            <slot v-else-if="isRaffle" name="raffle-summary-last-value" />
          </span>
        </div>
      </div>
    </v-card-subtitle>
    <!-- TODO: will be change -->
    <v-card-text
      role="button"
      class="pb-2 px-2 pb-sm-3 px-sm-3 d-flex align-center"
      @click="$router.push(localePath(`/u/1`))"
    >
      <v-avatar :size="$vuetify.breakpoint.xsOnly ? 25 : 30">
        <v-img :src="avatar" />
      </v-avatar>
      <span
        class="ml-1 ml-sm-2 black--text text-small text-sm-caption text-md-body-2"
        v-text="username"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
