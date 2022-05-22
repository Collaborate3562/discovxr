<template>
  <v-col cols="12">
    <v-list dense color="transparent">
      <div v-for="(item, i) in list" :key="item[0]">
        <v-divider v-if="!i" color="white" />
        <v-list-group no-action color="white" @click="toggleMarker(i)">
          <template #activator>
            <v-list-item-content>
              <v-list-item-title
                class="white--text text-body-1 text-uppercase"
                v-text="$t(item[1].title)"
              />
            </v-list-item-content>
          </template>
          <template #appendIcon>
            <v-icon color="white" v-text="getIcon(i)" />
          </template>
          <div v-for="(child, idx) in item[1].items" :key="idx + item[1].title">
            <v-divider v-if="!idx" color="white" />
            <v-list-item
              :to="localePath(child.route)"
              nuxt
              ripple
              class="grey--text text--darken-1"
            >
              <v-list-item-content>
                <v-list-item-title v-text="$t(child.text)" />
              </v-list-item-content>
            </v-list-item>
            <v-divider color="grey" />
          </div>
        </v-list-group>
        <v-divider color="white" />
      </div>
    </v-list>
  </v-col>
</template>

<script lang="ts" src="./index.script.ts"></script>
