import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const Vue = createApp(App);

// dependencias fontawsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas );
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(router).mount('#app')
