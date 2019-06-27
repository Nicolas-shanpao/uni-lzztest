import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  getters,
  modules: {
    user,
  }
})
if (module.hot) {
  module.hot.accept([
    './getters',
    './modules/user',
  ], () => {
    store.hotUpdate({
      getters: require('./getters').default,
      modules: {
        user: require('./modules/user').default,
      }
    })
  })
}

export default store
