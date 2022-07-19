<script>
</script>
<template>
<body>
    <header>
 <h1>Report Card</h1>
    </header>
    <main>
      
     <RouterLink to="/grades">Report Card</RouterLink>

    </main>


</body>


</template>
<style lang="scss" scoped>

   header{
        display: flex;
        justify-content: center;
   }
    main{
        display: flex;
        justify-content: center;
        align-items:center;
        button{
            padding: calc(1vw + 1vh);
            a{
                text-decoration: none;
                font-size: large;
            }
        }
    }
</style>