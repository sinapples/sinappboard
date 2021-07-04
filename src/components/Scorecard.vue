<template>
  <v-container>
    <v-flex>
      <v-btn height="700" width="600px" :color="color" @click="count++">
        <h1 style="font-size: 700px;">{{ count }}</h1>
      </v-btn>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  props: {
    color: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.big {
  font-size: 800px;
}
</style>
