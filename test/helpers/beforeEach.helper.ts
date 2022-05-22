/* eslint-disable import/prefer-default-export */

import Vue from 'vue'
import Vuetify from 'vuetify'

import { createLocalVue, shallowMount } from '@vue/test-utils'

export function beforeEachHelper(component: any, options?: any) {
  Vue.use(Vuetify)

  const _options = {
    localVue: createLocalVue(),
    vuetify: new Vuetify(),
    ...options,
  }

  return shallowMount(component, _options)
}
