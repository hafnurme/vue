<template>

  <button @click="click">Click</button>

</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      data: new FormData()
    }
  },
  mounted() {
    // dataAdd()
    login()
    async function login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', {
          body: {
            id_card_number: 1234567890123456,
            password: '123abc'
          }
        });
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    click() {
      console.log(this.data)
    }
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
