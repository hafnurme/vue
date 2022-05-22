<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">

            <a class="nav-link active" aria-current="page" href="#">
              <router-link to="/" class="nav-link active">Home</router-link>
            </a>
          </li>
          <li class="nav-item">

            <a class="nav-link" href="#">
              <router-link to="/consultation" class="nav-link">Consultation</router-link>

            </a>
          </li>
          <li class="nav-item">

            <a class="nav-link" href="#">
              <router-link to="/spot" class="nav-link">Spot</router-link>

            </a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view />

  </div>
</template>

<script>
import Home from './view/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {

  }

}
</script>

<style>
</style>
