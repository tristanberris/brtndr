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
        let res = await api.post('ingredients', ingredients)
        // commit('setIngredients', ingredients)
        // console.log("from store" + this.state.ingredients)
        return res.send(data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  },

  //beginning use of store.js reference code
  /**
   * Provides access to application state data
   */
  get State() {
    return state;
  },
  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("bartender", JSON.stringify(state));
  }

})
const store = new Vuex.Store();

//end of store.js reference code
