<template>
  <div class="detail">
    <h1>This is a details page</h1>
    <button @click="returnHome()">Retour</button>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  methods: {
    returnHome() {
      this.$router.push('/')
    }
  }
}
</script>

