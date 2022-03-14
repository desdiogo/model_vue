import './index.css';
import { createApp } from 'vue';
import { Quasar } from 'quasar';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from '@/router';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(Quasar)
  .mount('#app');
