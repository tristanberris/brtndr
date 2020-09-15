import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'


let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})
export default new Vuex.Store({
  state: {
    drinks:{}
  },
  mutations: {
    setDrinks(state, drinks){
      state.drinks = drinks
    }
  },
  actions: {
    async getDrinks({commit, dispatch}){
      try {
        let res = await api.get('drinks')
        console.log("getting drinks!" + res.data)
        commit('setDrinks', res.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
