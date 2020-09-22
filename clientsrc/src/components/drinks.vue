<template>
  <div class="drinks">
      <div class="card ">
        <!-- pb-4 col-md-4 col-lg-3 col-sm-6 -->
        <img class="card-img-top img" :src="drinkData.image" alt="Card image cap" />
       
        <div class="card-body">
          <h1>{{drinkData.title}}</h1>
          <p
            class="card-text"
          >{{drinkData.description}}</p>
        </div>
      </div>
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
    /* margin-left: 5%;
    margin-right: 5%; */
}
.img{
object-fit: cover;
width: 100%;
height: 325px;
}
.card {
  background-color: #7c7878;
}

.col-3{
    width: 100%;
}
</style>