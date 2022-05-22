<template>
  <h1>Ini Consultation</h1>
  <ul v-for="item of data" :key="item.id" class="card list-group border-2 border-dark my-3">
    <li class="list-group-item">ID : {{ item.id }}</li>
    <li class="list-group-item">Status : {{ item.status }}</li>
    <li class="list-group-item">Disease History : {{ item.disease_history }}</li>
    <li class="list-group-item">Current Symptoms : {{ item.current_symptoms }}</li>
    <li class="list-group-item">Doctor Notes : {{ item.doctor_notes }}</li>
    <li class="list-group-item">Doctor : {{ item.doctor }}</li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Consultation',
    data() {
      return {
          data: []
      }  
    },
    created() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/v1/consultations',
            headers: {
                "Authorization" : 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            this.data = response.data.consultations
            console.log(this.data[0].id)
        })
    }
}

</script>

<style>

</style>