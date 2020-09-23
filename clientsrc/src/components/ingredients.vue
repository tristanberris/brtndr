<template>
  <div class="ingredients row justify-content-center">
    <div class="col-12 col-lg-6">
      <form class @submit.prevent="addIngredient()">
        <div class="input-group">
          <input
            class="form-control"
            placeholder="input ingredient"
            list="browsers"
            name="browser"
            id="dropdownMenuButton"
            v-model="newIngredient.ingredient"
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
    </div>
  </div>
</template>


<script>
export default {
  name: "ingredients",
  mounted(){
    console.log(this.$store.state.ingredients)
    
  },
  data() {
    return {
      newIngredient: []
    };
  },
  computed: {},
  methods: {
    addIngredient(){
      this.$store.dispatch("addIngredient", this.newIngredient)
      console.log("From component: " + this.$store.state.ingredients.ingredient)
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
.input-group {
}
</style>