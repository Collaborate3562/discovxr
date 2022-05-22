<template>
  <div>
    <div
      v-for="listItem in list"
      :key="listItem[0]"
      :class="{ 'mt-7': listItem[0] }"
    >
      <h3
        v-if="listItem[1].value.title"
        class="text-h5 mb-2 grey--text text--darken-2 font-weight-bold"
        v-text="listItem[1].value.title"
      />
      <v-list class="py-0" elevation="2">
        <template v-for="(item, i) in listItem[1].value.items">
          <v-list-item
            :key="i"
            :to="localePath(item.route)"
            class="pl-5"
            nuxt
            exact
          >
            <v-list-item-content>
              <v-list-item-title
                class="text-subtitle-2 text-lg-subtitle-1 font-weight-medium
                grey--text text--darken-2 font-weight-normal"
                v-text="item.text"
              />
            </v-list-item-content>
            <v-list-item-icon class="my-0 align-self-center">
              <app-badge
                :content="item.state.content"
                :color="lightRed"
                position-none
                class="ml-2"
              />
            </v-list-item-icon>
          </v-list-item>
          <v-divider :key="`divider-${i}`" />
        </template>
      </v-list>
    </div>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
