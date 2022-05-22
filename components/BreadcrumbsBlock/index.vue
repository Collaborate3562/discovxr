<template>
  <v-slide-y-transition leave-absolute>
    <div v-if="isVisible">
      <v-divider />
      <v-container class="mx-auto container-max-width">
        <v-breadcrumbs :items="items" class="px-0 py-2">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
          <template #item="{ item }">
            <v-breadcrumbs-item
              :to="localePath(item.href)"
              :disabled="item.disabled"
              active-class="font-weight-bold"
              nuxt
              exact
            >
              <span
                class="grey--text text--darken-2 text-capitalize"
                v-text="item.text"
              />
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-container>
      <v-divider />
    </div>
  </v-slide-y-transition>
</template>

<script lang="ts" src="./index.script.ts"></script>

<style scoped lang="scss">
.container-max-width {
  max-width: 1264px;
}
</style>
