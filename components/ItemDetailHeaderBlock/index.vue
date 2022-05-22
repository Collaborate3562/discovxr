<template>
  <v-slide-y-transition leave-absolute>
    <v-sheet v-if="isVisible" class="mt-n1">
      <v-container class="pt-0 mx-auto container-max-width">
        <v-row align="center">
          <v-col cols="auto" class="pr-0">
            <v-avatar
              :color="isAnonymous ? lightBlack : ''"
              :size="$vuetify.breakpoint.smAndDown ? 50 : 80"
              class="mr-0"
            >
              <v-icon v-if="isAnonymous" color="white">
                mdi-help
              </v-icon>
              <v-img v-else src="/images/non-avatar.jpg" />
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <h2
              class="font-weight-medium text-h6 text-md-h5"
              v-text="isAnonymous ? $t('ITEM_DETAIL.ANONYMOUS') : username"
            />
            <v-row class="my-0">
              <v-col
                v-for="item in sns"
                :key="item[0]"
                cols="auto"
                class="pr-0 py-0 pt-md-1 d-flex align-center"
              >
                <component
                  :is="item[1].value.icon"
                  :width="$vuetify.breakpoint.smAndDown ? 25 : 30"
                  :height="$vuetify.breakpoint.smAndDown ? 25 : 30"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="auto" class="pt-0 pt-sm-3">
            <v-btn
              :large="$vuetify.breakpoint.mdAndUp"
              :rounded="$vuetify.breakpoint.xsOnly"
              :color="lightRed"
              block
              outlined
              depressed
              width="150"
              class="text-capitalize font-weight-bold text-body-1"
            >
              {{ $t('ITEM_DETAIL.BUTTON.FOLLOW') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-divider />
    </v-sheet>
  </v-slide-y-transition>
</template>

<script lang="ts" src="./index.script.ts"></script>

<style scoped lang="scss">
.container-max-width {
  max-width: 1264px;
}
</style>
