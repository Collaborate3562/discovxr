<template>
  <v-card tile>
    <v-card-title
      class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
      text-body-1 text-sm-h6 font-weight-medium"
      v-text="$t('PERSONAL_IDENTIFICATION.DOCUMENT.TITLE')"
    />
    <v-card-text class="py-3 py-sm-5 py-md-10">
      <v-row justify="center">
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
        >
          <span
            class="font-weight-medium text-body-1"
            v-text="$t('PERSONAL_IDENTIFICATION.DOCUMENT.SELECT_LABEL')"
          />
          <v-select
            v-model="identificationType"
            :items="items"
            dense
            outlined
            class="mt-1"
            hide-details
            append-icon="mdi-chevron-down"
          />
        </v-col>
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
        >
          <v-row>
            <v-col cols="12" md="6" class="pr-sm-0 pb-0 pb-sm-3">
              <v-scale-transition leave-absolute>
                <v-img :key="src" :src="src" alt="document" contain />
              </v-scale-transition>
            </v-col>
            <v-col cols="12" md="6" class="text-caption text-sm-body-2">
              <p
                v-for="(line, i) in $t(
                  'PERSONAL_IDENTIFICATION.DOCUMENT.DESCRIPTION',
                )"
                :key="i"
                :class="i ? 'mb-0' : 'mb-3'"
                v-text="line"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
        >
          <v-alert
            :value="true"
            text
            tile
            color="red"
            class="text-center text-caption text-md-body-1"
          >
            <span
              class="font-weight-medium"
              v-text="$t('PERSONAL_IDENTIFICATION.DOCUMENT.REQUIRED_UPLOAD')"
            />
          </v-alert>
        </v-col>
        <v-col
          :md="$vuetify.breakpoint.width < 1024 ? 11 : 10"
          cols="12"
          sm="11"
          lg="8"
        >
          <v-row>
            <v-col cols="12" sm="6">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$tc('PERSONAL_IDENTIFICATION.DOCUMENT.SIDE', 1)"
                  />
                </template>
                <app-choose-file
                  :accept="accept"
                  clickable
                  class="mt-1"
                  min-height="180"
                  text-class="font-weight-medium text--darken-2 text-body-2"
                >
                  <template #button>
                    <span />
                  </template>
                  <template #text>
                    <span />
                  </template>
                  <template #icon>
                    <v-icon size="35" color="black" v-text="'mdi-camera'" />
                  </template>
                  <template #uploaded="{ files, onDeleteHandler }">
                    <v-col
                      v-for="file in files"
                      :key="file.name"
                      cols="12"
                      class="mt-1"
                    >
                      <app-uploaded-picture-card
                        :file="file"
                        :button-color="lightRed"
                        :on-delete-handler="onDeleteHandler"
                        min-height="180"
                      />
                    </v-col>
                  </template>
                </app-choose-file>
              </app-field-label>
            </v-col>
            <v-col cols="12" sm="6">
              <app-field-label required>
                <template #label>
                  <span
                    class="font-weight-medium text-body-1"
                    v-text="$tc('PERSONAL_IDENTIFICATION.DOCUMENT.SIDE', 0)"
                  />
                </template>
                <app-choose-file
                  :accept="accept"
                  clickable
                  class="mt-1"
                  min-height="180"
                  text-class="font-weight-medium text--darken-2 text-body-2"
                >
                  <template #button>
                    <span />
                  </template>
                  <template #text>
                    <span />
                  </template>
                  <template #icon>
                    <v-icon size="35" color="black" v-text="'mdi-camera'" />
                  </template>
                  <template #uploaded="{ files, onDeleteHandler }">
                    <v-col
                      v-for="file in files"
                      :key="file.name"
                      cols="12"
                      class="mt-1"
                    >
                      <app-uploaded-picture-card
                        :file="file"
                        :button-color="lightRed"
                        :on-delete-handler="onDeleteHandler"
                        min-height="180"
                      />
                    </v-col>
                  </template>
                </app-choose-file>
              </app-field-label>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
