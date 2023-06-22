<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <div>
    <h1>{{ video.nombre }}</h1>
    <p>{{ video.descripcion }}</p>
    <a :href="video.url">Ver video</a>
  </div>
</template>

<script>


export default {
  data() {
    return {
      video: null
    }
  },
  async created() {
    const response = await fetch(`http://localhost:3000/videos/${this.$route.params.id}`)
    this.video = await response.json()
  }
}
</script>

