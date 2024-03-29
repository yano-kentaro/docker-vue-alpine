import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import Framework7 from 'framework7/lite-bundle';
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';
import 'framework7/framework7-bundle.css';
import './css/app.css';

Framework7.use(Framework7Vue);

const app = createApp(App).use(store);

registerComponents(app);

app.mount('#app');