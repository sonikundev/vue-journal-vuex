<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1 class="">Hola Mundo</h1>

    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success">Sucesss</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'daybook' })
    }
  }
}
</script>
