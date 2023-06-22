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