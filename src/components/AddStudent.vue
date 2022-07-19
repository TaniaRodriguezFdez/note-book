<script>

</script>


<template>
    
<div class="input-container">
<p>Name: {{ message }}</p>
<input v-model="message" placeholder="name" class="input" id="input-name"> 
</div>
</template>

<style scoped>
 .input{
    width: 90%;
 }
 .input-container{
    margin: 2%;
    padding: 2%;
    background-color: aquamarine;
    color: black;
 }
</style>