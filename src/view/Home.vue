<template>
    <h1>Ini Home</h1>
        <Login />
    <div class="box">
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import axios from 'axios'
import Login from '../components/Login.vue'

export default {
    name: 'Home',
    components: {
        Login
    },
    methods: {
        login() {
            let data = new FormData();
            data.append('id_card_number', this.$refs.id_card_number.value);
            data.append('password', this.$refs.password.value);

            axios({
                method: 'post',
                url: `http://127.0.0.1:8000/api/v1/auth/login`,
                data: data,
                headers: {
                    "Content-Type": "form-data"
                }
            })
                .then(response => {
                    // JSON responses are automatically parsed
                    localStorage.setItem('token', response.data.token)
                    console.log(response.data)
                    console.log(localStorage.getItem('token'))
                })
                .catch(e => {
                    console.log(e)
                })
        },
        logout() {
            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/v1/auth/logout',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(response => {
                localStorage.removeItem('token')
                this.$router.push({ name: 'About' })
            })
        }
    }

}
</script>

<style>
.box {
    width: 300px;
    height: 400px;
    border: 1px solid black;
}
</style>