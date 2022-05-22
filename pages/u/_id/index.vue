<template>
  <v-row class="my-0">
    <v-col cols="12">
      <user-detail-card
        :id="userId"
        :avatar="avatar"
        :username="username"
        :details="details"
        class="pb-3"
      >
        <v-scale-transition leave-absolute>
          <v-col v-if="isBuyer" cols="12">
            <v-row class="my-0" justify="center" align="center">
              <v-col
                v-for="item in emotions"
                :key="item[0]"
                cols="auto"
                class="d-flex justify-center"
              >
                <div class="d-flex flex-column align-center">
                  <v-scale-transition leave-absolute>
                    <component
                      :is="item[1].value.icon"
                      :key="$vuetify.breakpoint.xsOnly"
                      :width="$vuetify.breakpoint.xsOnly ? 30 : 50"
                      :height="$vuetify.breakpoint.xsOnly ? 30 : 50"
                      class="mx-auto"
                    />
                  </v-scale-transition>
                  <span
                    class="text-caption text-sm-body-1 grey--text text--darken-2 my-1 my-sm-2"
                    v-text="item[1].value.text"
                  />
                  <span
                    class="text-caption text-sm-body-1 black--text font-weight-medium my-1 my-sm-2"
                    v-text="item[1].value.count"
                  />
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-scale-transition>
      </user-detail-card>
    </v-col>
    <v-slide-y-transition>
      <v-col v-if="isBuyer" cols="12" class="pt-0">
        <buyer-detail />
      </v-col>
    </v-slide-y-transition>
    <v-slide-y-transition>
      <v-col v-if="!isBuyer" cols="12" class="pt-0">
        <seller-detail />
      </v-col>
    </v-slide-y-transition>
  </v-row>
</template>

<script lang="ts" src="./index.script.ts"></script>
