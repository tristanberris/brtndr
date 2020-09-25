<template>
  <div class="ingredients row justify-content-center">
    <div class="col-12 col-lg-6">
      <form class @submit.prevent="addIngredient()">
        <div class="input-group">
          <input
            class="form-control"
            placeholder="Search Ingredient..."
            list="browsers"
            name="browser"
            id="dropdownMenuButton"
            v-model="newIngredient"
          />
          <datalist id="browsers">
            <option value="Vodka"></option>
            <option value="Rum"></option>
            <option value="Gin"></option>
            <option value="Whiskey"></option>
            <option value="Limes"></option>
          </datalist>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="submit">Add</button>
          </div>
        </div>
      </form>
      <button
        class="tags"
        v-for="(ingredient,n) in ingredients"
        v-bind:key="n"
        @click="removeIngredient(n)"
      >
        <span class="ingredient">{{ ingredient + " " }}</span>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  //created local storage referencing this link:
  ///https://vuejs.org/v2/cookbook/client-side-storage.html
  name: "ingredients",
  mounted() {
    if (localStorage.getItem("ingredients")) {
      try {
        this.ingredients = JSON.parse(localStorage.getItem("ingredients"));
      } catch (error) {
        localStorage.removeItem("ingredients");
      }
    }
  },
  data() {
    return {
      ingredients: [],
      newIngredient: null
    };
  },
  computed: {},
  methods: {
    // addIngredient(){
    //   this.$store.dispatch("addIngredient", this.newIngredient)
    //   console.log("From component: " + this.$store.state.ingredients.ingredient)
    // },
    addIngredient() {
      if (!this.newIngredient) {
        return;
      }
      this.ingredients.push(this.newIngredient);
      this.newIngredient = "";
      this.saveIngredients();
      console.log(this.ingredients);
      // this.$store.dispatch("findDrinks", this.ingredients)
    },
    removeIngredient(x) {
      this.ingredients.splice(x, 1);
      this.saveIngredients();
    },
    saveIngredients() {
      const parsed = JSON.stringify(this.ingredients);
      localStorage.setItem("ingredients", parsed);
    }
  },
  components: {}
};
</script>


<style scoped>
.ingredients {
  color: white;
  padding: 30px;
}
.tags {
  margin-top: 12px;
  display: inline-block;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.603);
  background-color: #7c7878;
  -webkit-border-radius: 3px 4px 4px 3px;
  -moz-border-radius: 3px 4px 4px 3px;
  border-radius: 3px 4px 4px 3px;
  border-left: 1px solid #7c7878;
  /* This makes room for the triangle */
  margin-right: 10px;
  /* position: relative; */
  color: white;
  font-weight: 300;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  line-height: 35px;
  padding: 0 10px 0 10px;
}
.tags:before {
  /* content: "";
	position: absolute;
	display: block;
	left: 18px;
	width: 0;
	height: 0;
	border-top: 22px solid transparent;
	border-bottom: 23px solid transparent;
  border-right: 18px solid #7c7878; */
}
/* Makes the circle */
.tags:after {
  /* content: "";
	background-color: white;
	border-radius: 50%;
	width: 5px;
	height: 5px;
	display: block;
	position: absolute;
	left: 30px;
  top: 58px; */
}
.input-group {
}
</style>