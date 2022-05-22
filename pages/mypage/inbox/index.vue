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
          v-text="$t('INBOX.TITLE')"
        />
        <v-card-text class="pa-0">
          <v-list class="py-0">
            <v-slide-y-transition group leave-absolute>
              <template v-for="(item, i) in items">
                <v-divider v-if="i" :key="`divider-${i}`" />
                <inbox-card
                  :key="item.id"
                  :deal-type="item.dealType"
                  :status="item.status"
                  :username="item.username"
                  :title="item.title"
                  :last-message="item.lastMessage"
                  :timestamp="item.timestamp"
                  :image="item.image"
                  :inbox="item.inbox"
                />
              </template>
            </v-slide-y-transition>
          </v-list>
          <v-scale-transition leave-absolute>
            <app-empty-data v-if="!items.length" src="/images/empty.png" />
          </v-scale-transition>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
