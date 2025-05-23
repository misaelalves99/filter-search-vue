import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faCartPlus)

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
