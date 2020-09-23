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
    drinks:{},
    activeIngredients:[],
    ingredients:[]
  },
  mutations: {
    setDrinks(state, drinks){
      state.drinks = drinks
    },
    setActiveIngredients(){
      state.activeIngredients = activeIngredients
    },
    setIngredients(state, ingredients){
      state.ingredients = ingredients
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
    },
    async getActiveIngredients({commit,dispatch}){
      try {
        let res = await api.get('activeIngredients')
        console.log("getting ingredients!")
        commit('setActiveIngredients', res.data)  
      } catch (error) {
        console.error(error)
      }
    },

    async addIngredient({commit,dispatch}, ingredients){
      try {
        
        commit('setIngredients', ingredients)
        console.log("from store" + this.state.ingredients)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
