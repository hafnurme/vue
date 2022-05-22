<template>
    <ul v-for="item in data.spots" :key="item.id" class="list-group">
        <li class="list-group-item">{{ item.id }}</li>
        <li class="list-group-item">{{ item.name }}</li>
        <li class="list-group-item">{{ item.address }}</li>
        <li class="list-group-item">{{ item.serve }}</li>
        <li class="list-group-item">{{ item.capacity }}</li>
        <li class="list-group-item">
            <ul class="list-group">
                <li class="list-group-item">{{ item.vaccines.Sinovac }}</li>
                <li class="list-group-item">{{ item.vaccines.AstraZennecca }}</li>
                <li class="list-group-item">{{ item.vaccines.Moderna }}</li>
                <li class="list-group-item">{{ item.vaccines.Pfizer }}</li>
                <li class="list-group-item">{{ item.vaccines.Sinnopharm }}</li>
            </ul>
        </li>
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