<template>
  <div>
    <v-stepper v-model="step" alt-labels flat non-linear>
      <v-stepper-header>
        <template v-for="(item, i) in steps">
          <v-divider v-if="!i" :key="`${item[0]}-divider-start`" />
          <v-stepper-step
            :key="`${item[0]}-step`"
            :step="item[0]"
            :complete="getComplete(item)"
            :color="getColor(item)"
            role="button"
            @click="setStep(item[0])"
          >
            <span class="text-body-2" v-text="$t(item[1].value.label)" />
          </v-stepper-step>
          <v-divider v-if="i !== steps.size" :key="`${i}-step-divider-end`" />
        </template>
      </v-stepper-header>
    </v-stepper>
    <v-row justify="center" class="mt-sm-3 mt-md-5">
      <v-col cols="12" sm="8" md="7" lg="5" xl="4">
        <auth-block-wrapper>
          <template #title>
            <component :is="transitionMode" leave-absolute hide-on-leave>
              <div :key="step" class="py-md-3">
                <h1
                  :class="{ 'mb-3': activeStep.subtitle }"
                  class="text-center text-h6 font-weight-bold"
                  v-text="$t(activeStep.title)"
                />
                <template v-if="activeStep.subtitle">
                  <p
                    v-for="text in $t(activeStep.subtitle)"
                    :key="text"
                    class="mb-0 text-center text-md-body-2 text-caption font-weight-medium"
                    v-text="text"
                  />
                </template>
              </div>
            </component>
          </template>
          <component :is="transitionMode" leave-absolute hide-on-leave>
            <component :is="activeStep.component" :key="activeStep.component" />
          </component>
        </auth-block-wrapper>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
