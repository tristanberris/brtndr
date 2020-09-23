<template>
  <div>
    <div class="row justify-content-center content pb-5">
      <div class="col-9">
        <ingredients></ingredients>
      </div>
    </div>

      <div class="row justify-content-center content pb-5">
        
    <drinks v-for="Drinks in drinks" :drinkData="Drinks" :key="Drinks.id" class="pb-4 col-md-4 col-lg-3 col-sm-6"></drinks>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ingredients from "../components/ingredients.vue";
import drinks from "../components/drinks.vue";

export default {
  name: "Home",
  mounted() {
    let data = this.$store.dispatch("getDrinks");
    this.$store.dispatch("getDrinks");
  },
  computed: {
    drinks() {
      return this.$store.state.drinks;
    }
  },
  components: {
    HelloWorld,
    ingredients,
    drinks
  }
};
</script>
<style scoped>
.content {
  background-color: #2a2e32;
  /* border-radius: 2%; */
}
</style>
