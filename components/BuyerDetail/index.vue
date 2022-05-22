<template>
  <v-card tile class="mt-n3">
    <v-card-title
      class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
      text-body-1 text-sm-h6 font-weight-medium"
      v-text="$t('USER_DETAIL.REVIEWS')"
    />
    <v-card-text class="pa-0">
      <v-list class="py-0">
        <v-slide-y-transition leave-absolute group>
          <template v-for="(item, i) in items">
            <v-divider v-if="i" :key="`divider-${item.id}`" />
            <buyer-detail-review-card
              :key="item.id"
              :username="item.username"
              :deal-name="item.dealName"
              :deal-type="item.dealType"
              :emotion-type="item.emotionType"
              :account-type="item.accountType"
              :comment="item.comment"
              :avatar="item.avatar"
            />
          </template>
        </v-slide-y-transition>
        <v-scale-transition leave-absolute>
          <app-empty-data v-if="!items.length" src="/images/empty.png" />
        </v-scale-transition>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
