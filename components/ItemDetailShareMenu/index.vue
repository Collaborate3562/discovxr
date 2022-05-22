<template>
  <v-menu offset-y nudge-bottom="3">
    <template #activator="{ on, attrs }">
      <v-btn
        :color="lightBlack"
        :x-large="$vuetify.breakpoint.mdAndUp"
        large
        block
        depressed
        class="text-none white--text text-body-2 text-sm-body-1 text-md-h6 font-weight-regular"
        v-bind="attrs"
        v-on="on"
      >
        <share-revert-icon
          :width="$vuetify.breakpoint.mdAndUp ? 30 : 20"
          :height="$vuetify.breakpoint.mdAndUp ? 30 : 20"
        />
        <span class="ml-2" v-text="$t('ITEM_DETAIL.SHARE.LABEL')" />
      </v-btn>
    </template>
    <v-list class="py-0" :color="lightBlack">
      <div v-for="(item, i) in shareData" :key="i">
        <v-divider v-if="i" color="white" />
        <v-list-item ripple role="button" class="white--text">
          <v-list-item-icon class="mr-2">
            <component
              :is="item.icon"
              :width="$vuetify.breakpoint.mdAndUp ? 30 : 20"
              :height="$vuetify.breakpoint.mdAndUp ? 30 : 20"
            />
          </v-list-item-icon>
          <v-list-item-title
            class="text-body-1 text-md-h6 font-weight-bold"
            v-text="$t(item.text)"
          />
        </v-list-item>
      </div>
    </v-list>
  </v-menu>
</template>

<script lang="ts" src="./index.script.ts"></script>
