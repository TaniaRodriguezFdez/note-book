<script setup>

</script>
<template>
    
<div class="input-container">

<p>Materia: {{ message }}</p>
<input v-model="message" placeholder="materia" class="input"> 
</div>
</template>

<style scoped>
 .input{
    width: 90%;
 }
 .input-container{
    margin: 2%;
    padding: 2%;
    background-color: rgb(68, 146, 120);
    color: black;
 }
</style>