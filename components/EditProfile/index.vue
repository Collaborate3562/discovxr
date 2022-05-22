<template>
  <v-card tile>
    <v-file-input
      :key="files.length"
      ref="fileUploader"
      :accept="acceptTypes.join()"
      flat
      prepend-icon
      hide-details
      class="d-none"
      @change="onChange"
    />
    <v-card-title
      class="grey lighten-4 pl-md-7 py-3 grey--text text--darken-2
      text-body-1 text-sm-h6 font-weight-medium"
      v-text="$tc('EDIT_PROFILE.TITLE', 0)"
    />
    <v-card-text class="pa-0">
      <v-row justify="center" class="my-3 mx-0">
        <v-col cols="12" md="8" lg="9">
          <v-row justify="center">
            <v-col cols="12" class="text-center pb-0">
              <v-avatar :size="$vuetify.breakpoint.smAndUp ? 120 : 100">
                <v-img :src="avatar" />
              </v-avatar>
            </v-col>
            <v-col cols="auto" class="pr-1">
              <v-btn
                :disabled="!!files.length"
                :color="lightBlack"
                :width="$vuetify.breakpoint.smAndUp ? 150 : 100"
                elevation="0"
                class="text-caption font-weight-medium white--text text-sm-body-1 text-capitalize"
                @click="onUpload"
              >
                {{ $t('EDIT_PROFILE.BUTTON.UPLOAD') }}
              </v-btn>
            </v-col>
            <v-col cols="auto" class="pl-1">
              <v-btn
                :disabled="!files.length"
                :color="lightBlack"
                :width="$vuetify.breakpoint.smAndUp ? 150 : 100"
                elevation="0"
                class="text-caption font-weight-medium white--text text-sm-body-1 text-capitalize"
                @click="onDeleteHandler(files[0])"
              >
                {{ $t('EDIT_PROFILE.BUTTON.DELETE') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider />
      <v-row justify="center" class="ma-0">
        <v-col cols="11" md="8">
          <v-row align="center" justify="center" class="my-0">
            <v-col
              cols="12"
              md="2"
              class="pb-0 pb-md-3 text-body-1 font-weight-bold label-direction"
              v-text="$t('EDIT_PROFILE.USERNAME')"
            />
            <v-col cols="12" md class="pt-0 pt-md-3">
              <v-text-field dense outlined hide-details="auto" role="button" />
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="my-0">
            <v-col
              cols="12"
              md="2"
              class="pb-0 pb-md-3 text-body-1 font-weight-bold label-direction"
              v-text="$t('EDIT_PROFILE.GENDER')"
            />
            <v-col cols="12" md class="pt-0 pt-md-3">
              <v-select
                dense
                outlined
                hide-details="auto"
                append-icon="mdi-chevron-down"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="my-0">
            <v-col
              cols="12"
              md="2"
              class="pb-0 pb-md-3 text-body-1 font-weight-bold label-direction"
              v-text="$tc('EDIT_PROFILE.GEOGRAPHY', 0)"
            />
            <v-col cols="12" md class="pt-0 pt-md-3">
              <v-select
                dense
                outlined
                hide-details="auto"
                append-icon="mdi-chevron-down"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="my-0">
            <v-col
              cols="12"
              md="2"
              class="pb-0 pb-md-3 text-body-1 font-weight-bold label-direction"
              v-text="$tc('EDIT_PROFILE.GEOGRAPHY', 1)"
            />
            <v-col cols="12" md class="pt-0 pt-md-3">
              <v-select
                dense
                outlined
                hide-details="auto"
                append-icon="mdi-chevron-down"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="my-0">
            <v-col
              cols="12"
              md="2"
              class="pb-0 pb-md-3 text-body-1 font-weight-bold label-direction"
              v-text="$tc('EDIT_PROFILE.GEOGRAPHY', 2)"
            />
            <v-col cols="12" md class="pt-0 pt-md-3">
              <v-select
                dense
                outlined
                hide-details="auto"
                append-icon="mdi-chevron-down"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="my-0">
            <v-col
              cols="12"
              md="2"
              class="pb-0 pb-md-3 text-body-1 font-weight-bold label-direction"
              v-text="$t('EDIT_PROFILE.BIRTHDAY')"
            />
            <v-col cols="12" md class="pt-0 pt-md-3">
              <v-row>
                <v-col cols="12" sm class="pr-sm-1">
                  <v-select
                    dense
                    outlined
                    hide-details="auto"
                    append-icon="mdi-chevron-down"
                  />
                </v-col>
                <v-col cols="12" sm class="pt-0 pt-sm-3 px-sm-1">
                  <v-select
                    dense
                    outlined
                    hide-details="auto"
                    append-icon="mdi-chevron-down"
                  />
                </v-col>
                <v-col cols="12" sm class="pt-0 pt-sm-3 pl-sm-1">
                  <v-select
                    dense
                    outlined
                    hide-details="auto"
                    append-icon="mdi-chevron-down"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="my-0">
            <v-col
              cols="12"
              md="2"
              class="pb-0 pb-md-3 text-body-1 font-weight-bold label-direction"
              v-text="$tc('EDIT_PROFILE.DASHBOARD', 1)"
            />
            <v-col cols="12" md class="pt-0 pt-md-3">
              <v-select
                dense
                outlined
                hide-details="auto"
                append-icon="mdi-chevron-down"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="my-0">
            <v-col
              cols="12"
              md="2"
              class="pb-0 pb-md-3 text-body-1 font-weight-bold label-direction"
              v-text="$tc('EDIT_PROFILE.DASHBOARD', 0)"
            />
            <v-col cols="12" md class="pt-0 pt-md-3">
              <v-select
                dense
                outlined
                hide-details="auto"
                append-icon="mdi-chevron-down"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./index.script.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
