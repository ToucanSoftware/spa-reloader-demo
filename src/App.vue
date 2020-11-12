<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted(){
    this.$spaSubscribe(this.callbackFunction);
  },

  methods:{
    callbackFunction: function(current, old) {
      if (
        old !== undefined &&
        old !== null &&
        current !== undefined &&
        current !== null
      ) {
        console.log("Changed image from: ", old.image, " to: ", current.image);
      } else if (current !== undefined && current !== null) {
        console.log("Changed image to: ", current.image);
      } else {
        console.log("Changed detected");
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
