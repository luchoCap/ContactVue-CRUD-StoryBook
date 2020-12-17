import { addDecorator } from '@storybook/vue';
import Vue from 'vue'
import vuetify from "../src/plugins/vuetify-manual";
import VueRouter from 'vue-router'

let router = new VueRouter({mode: "history", routes: []})

Vue.use(VueRouter)

addDecorator(() => ({
  vuetify,
  router,
  template: '<v-app><v-main><story/></v-main></v-app>',
}));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
