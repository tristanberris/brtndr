<template>
  <div class="ingredients row justify-content-center">
    <div class="col-12 col-lg-6">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="input ingredients"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ingredients",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.ingredients {
 
  color: white;
  padding: 30px;
  
}
.input-group{
   
}
</style>