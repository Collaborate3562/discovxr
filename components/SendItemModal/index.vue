<template>
  <app-modal-window
    :modal="modal"
    max-width="768"
    content-class="ml-6"
    @close="close"
  >
    <template #title>
      <v-row class="my-0" justify="center">
        <v-col cols="12" sm="11" md="10">
          <h2 class="text-center text-h5 font-weight-bold">
            入札
          </h2>
        </v-col>
        <v-col cols="12" sm="11" md="10" class="py-0">
          <v-row class="my-0" align="center" justify="end">
            <v-col cols="12" sm="auto" class="pr-0 text-body-1">
              希望入札額を記入
            </v-col>
            <v-col cols="12" sm="8" class="pt-0 pt-sm-3">
              <v-text-field
                :dense="$vuetify.breakpoint.xsOnly"
                outlined
                role="button"
                class="rounded-0"
                hide-details="auto"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="px-0">
          <v-divider />
        </v-col>
      </v-row>
    </template>
    <template #body>
      <v-row justify="center" class="black--text">
        <v-col cols="12" sm="11" md="10" class="py-0">
          <v-row class="my-0" justify="end" align="center">
            <v-col cols="6" sm="auto" class="text-body-2">
              配送料
            </v-col>
            <v-col
              cols="6"
              sm="4"
              md="5"
              class="text-right text-body-2 font-weight-medium"
            >
              ¥180
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="11" md="10">
          <v-row justify="end">
            <v-col cols="12" sm="10">
              <v-divider />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="11" md="10" class="pt-0">
          <v-row class="my-0" justify="end" align="center">
            <v-col cols="6" sm="auto" class="text-body-1">
              落札した場合の振り込み額
            </v-col>
            <v-col
              cols="6"
              sm="4"
              md="5"
              class="text-right text-body-1 font-weight-medium"
            >
              ¥3680
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="11" md="10" class="pb-0 pt-5 pt-sm-15 text-body-2">
          <p class="mb-0">
            ※クレジットカードを登録済みの場合、落札された場合に自動で入札金額と配送手数料
            の合計額が引き落としされます。
          </p>
          <p class="mb-0">
            ※落札した場合は、24時間以内に指定の振込先までお振込ください。24時間を超えると、
            2番目の方に落札の権利が移行されます。
          </p>
          <p class="mb-0">
            ※落札したにも関わらずお振込を行わ数が3回に達した場合、入札ができなくなる可能性
            がございますのでご注意ください。
          </p>
        </v-col>
      </v-row>
    </template>
    <template #actions>
      <v-row justify="center" class="my-0">
        <v-col cols="12" sm="11" md="10">
          <v-btn
            :color="lightRed"
            large
            block
            elevation="0"
            class="font-weight-normal white--text text-sm-h6"
          >
            確認する
          </v-btn>
        </v-col>
        <v-col cols="12" sm="11" md="10" class="pt-0">
          <v-btn
            :color="lightRed"
            large
            block
            outlined
            class="font-weight-normal text-sm-h6"
            @click="close"
          >
            {{ $t('SOLD_ITEMS.BUTTON.CLOSE') }}
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </app-modal-window>
</template>

<script lang="ts" src="./index.script.ts"></script>
