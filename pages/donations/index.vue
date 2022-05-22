<template>
  <v-row class="my-lg-0">
    <v-col cols="12">
      <h1
        class="grey--text text--darken-2 text-h6 text-sm-h5 text-lg-h4 font-weight-medium"
        v-text="$t('DONATION.TITLE')"
      />
    </v-col>
    <v-col cols="12" class="py-0">
      <donation-page-filter />
    </v-col>
    <v-col cols="12">
      <v-slide-y-transition leave-absolute group class="row my-0">
        <v-col
          v-for="item in items"
          :key="item.id"
          :cols="$vuetify.breakpoint.width < 480 ? 12 : 6"
          :sm="$vuetify.breakpoint.width < 700 ? 6 : 4"
          :md="$vuetify.breakpoint.width < 1100 ? 4 : 3"
        >
          <donation-group-card
            :image="item.image"
            :title="item.title"
            :group-name="item.groupName"
            :amount="item.amount"
            :donated-count="item.donatedCount"
          />
        </v-col>
      </v-slide-y-transition>
      <v-scale-transition leave-absolute>
        <app-empty-data v-if="!items.length" src="/images/empty.png" />
      </v-scale-transition>
    </v-col>
    <v-col cols="12">
      <div class="d-flex mt-3">
        <app-pagination v-model="page" class="shadow-none" />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
