<template>
  <div class="drinks ">
    <!-- <div class="pb-4 col-md-4 col-lg-3 col-sm-6">
      <div class="card">
        <img class="card-img-top" src="https://picsum.photos/seed/picsum/200" alt="Card image cap" />
        <div class="card-body">
          <p
            class="card-text"
          >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div> -->
    <!-- <div class="pb-4 col-md-4 col-lg-3 col-sm-6"> -->
      <div class="card">
        <img class="card-img-top" src="https://picsum.photos/seed/picsum/200" alt="Card image cap" />
        <div class="card-body">
          <h1>{{drinkData.title}}</h1>
          <p
            class="card-text"
          >{{drinkData.description}}</p>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>


<script>
export default {
  name: "drinks",
  props:['drinkData'],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.drinks{
    place-content: space-evenly;
    margin-left: 5%;
    margin-right: 5%;
}
.card {
  background-color: #7c7878;
}
.col-4:hover{
    
}
.col-3{
    width: 100%;
}
</style>