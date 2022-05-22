<template>
  <v-row class="py-2 py-sm-3">
    <v-col
      v-for="(button, i) in buttons"
      :key="i"
      cols="12"
      class="py-2 py-sm-3"
    >
      <sns-button
        :type="button.value.type"
        :icon="button.value.icon"
        :text="button.value.text"
        :color="button.value.color"
        :loading="button.value.loading"
        @click:sns="snsButtonClickHandler"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
