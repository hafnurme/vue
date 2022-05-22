<template>
    <div class="card p-3 border-3">
        <form class="mb-2 ">
            <label for="id_card_number" class="d-block">ID Card: </label>
            <input type="number" ref="id_card_number" class="rounded-3 border-1" id="id_card_number">
            <label for="password" class="d-block">Password: </label>
            <input type="password" ref="password" class="rounded-3 border-1" id="password">
        </form>
        <button @click="login" class="btn btn-primary">Login</button>
    </div>
</template>

<script>
export default {
    name: 'Login'

}
</script>

<style>
.card {
    width: 300px;
    height: fit-content;
    background-color: cadetblue;
}
</style>