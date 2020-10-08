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
//reference code
//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("bartender"));
  if (data) {
    data.ingredients = data.ingredients.map(l => new Ingredient(l));
    state = data;
  }
}
_loadState();

export default new Vuex.Store({
  state: {
    drinks:{},
    // activeDrinks:{},
    ingredients:[],
    matchingDrinks:{}

  },
  mutations: {
    setDrinks(state, drinks){
      state.drinks = drinks
    },
    setMatchingDrinks(state, matchingDrinks){
      state.matchingDrinks = matchingDrinks
    },
    setIngredients(state, ingredients){
      state.ingredients = ingredients
    }
  },
  actions: {
    async getDrinks({commit, dispatch}){
      try {
        let res = await api.get('drinks')
        // console.log("getting drinks!" + res.data)
        commit('setDrinks', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getMatchingDrinks({commit, dispatch}, ingredients){
      try {
        console.log(ingredients)
        let res = await api.get(`drinks/${ingredients}`)
        commit('setMatchingDrinks', res.data)
        console.log("getting matching drinks!" + res.data)

      } catch (error) {
        console.error(error)
      }
    },
    async getActiveIngredients({commit,dispatch}){
      try {
        let res = await api.get('activeIngredients')
        // console.log("getting ingredients!")
        commit('setActiveIngredients', res.data)  
      } catch (error) {
        console.error(error)
      }
    },

    // async addIngredient({commit,dispatch}, ingredients){
    //   try {
    //     let res = await api.post('ingredients', ingredients)
    //     commit('setIngredients', ingredients)
    //     console.log("from store" + this.state.ingredients)
    //     return res.send(data)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    // async findDrinks({commit, dispatch}, ingredients){
    //   try {
    //     let res = await api.getActive('activeDrinks', ingredients)
    //     commit('setActiveDrinks', res.data)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }
  },
  modules: {
  },



})

//end of store.js reference code
