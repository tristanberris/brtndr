<template>
  <div class="container-fluid" id="app">
    <div id="nav">
      <!-- <div class="left">
      <a href="">BRTNDR</a>
      </div>
      <div class="right">
        <a href="">HOME</a>
        <a href="">ABOUT</a>
      </div>-->
      <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
        <a class="navbar-brand" href="#">BRTNDR</a>
        <button
          class="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active home" href="#" style="color: #F4403B">
              Home
              <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">About</a>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #212529;
  height: 100vh;
}

#nav {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: 5.5%;
  margin-right: 5.5%;
  background-color: #212529;
}
.home{
  color: rgb(233, 88, 83);
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#navbarNavAltMarkup{
  justify-content: flex-end;
}
</style>
