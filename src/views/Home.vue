<template>
  <div class="row justify-content-center content">
      <div class="col-9">
        <ingredients></ingredients>
    </div>
    <div class="row  content">
      <div class="col-9">
        <drinks></drinks>

      </div>
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
  border-radius: 2%;
}
</style>
