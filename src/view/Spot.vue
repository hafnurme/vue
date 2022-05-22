<template>
    <ul v-for="item in data.spots" :key="item.id">
        <li>{{ item }}</li>
    </ul>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Spot',
    data() {
        return {
            data: []
        }
    },
    mounted() {
        axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/v1/spots`,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            this.data = response.data
            console.log(response.data)
        })
    }
}
</script>

<style>
</style>