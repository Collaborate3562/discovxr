<template>
  <v-col cols="12" sm="auto" class="pt-0">
    <v-row>
      <template v-for="(item, i) in list">
        <v-divider v-if="i" :key="`menu-divider__${i}`" vertical class="my-4" />
        <v-col :key="`menu__${i}`" class="py-0">
          <header-dropdown-tree-menu
            v-if="item.isTree"
            :route="item.route"
            :items="item.items"
            :title="item.title"
          />
          <header-dropdown-menu
            v-else
            :menu="item.menu"
            :route="item.route"
            :items="item.items"
            :title="item.title"
          />
        </v-col>
      </template>
    </v-row>
  </v-col>
</template>

<script lang="ts" src="./index.script.ts"></script>
