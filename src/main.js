import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faClockFour, faCircleUser, faWifi, faSignal, faBatteryFull, faPhone, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faClockFour, faCircleUser, faWifi, faSignal, faBatteryFull, faPhone, faPlus)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
