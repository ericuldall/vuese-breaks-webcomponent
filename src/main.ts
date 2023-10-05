import { defineCustomElement } from 'vue'

import App from './App.ce.vue'
const WidgetContainer = defineCustomElement(App);
customElements.define('vue-widget', WidgetContainer)
