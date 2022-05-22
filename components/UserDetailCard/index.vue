<template>
  <v-card tile>
    <v-card-text class="pa-5">
      <v-row justify="center" class="text-center my-0">
        <v-col cols="12" class="pb-0">
          <v-avatar size="70">
            <v-img :src="avatar" />
          </v-avatar>
          <v-card-subtitle
            class="pa-0 black--text text-subtitle-2 mt-2"
            v-text="username"
          />
        </v-col>
        <slot />
        <v-col
          v-for="(item, i) in details"
          :key="i"
          :cols="$vuetify.breakpoint.width < 375 ? 6 : 'auto'"
          :role="getRoute(item[0]) && 'button'"
          sm="auto"
          class="text-lef pb-0 d-flex flex-column flex-sm-row black--text"
          @click="clickHandler(item[0])"
        >
          <span class="mr-sm-1 text-md-body-1" v-text="item[1].value.text" />
          <v-slide-y-transition leave-absolute hide-on-leave>
            <span
              :key="item[1].value.count"
              class="font-weight-bold text-body-1"
              v-text="item[1].value.count"
            />
          </v-slide-y-transition>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
