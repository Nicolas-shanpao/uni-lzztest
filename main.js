import Vue from 'vue'
import App from './App'
import store from './store/store'
Vue.config.productionTip = false
Vue.prototype.$store = store
// 主页
import home from './pages/home/index.vue'
Vue.component('home', home)
// 消息
import message from './pages/message/index.vue'
Vue.component('message', message)
// 联系人
import contacts from './pages/contacts/index.vue'
Vue.component('contacts', contacts)
// 我的
import self from './pages/self/index.vue'
Vue.component('self', self)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
