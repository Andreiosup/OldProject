<template>
    <div class="buttons-container">
      <button v-for="n in 9" :key="n" @click="$emit('event',n)">
        {{ n }}
      </button>
      <button class="delete-button" @click="$emit('event',0)">
        DEL
      </button>
    </div>
</template>
  
<script>
  export default {
    name: 'SudokuButtons'
  }
</script>
  
<style scoped>
  .buttons-container{
    height: 400px;
    width: 300px;
    margin : 50px;

    display: grid;
    grid-template-columns:1fr 1fr 1fr ;
    grid-gap:30px;
  }
  .delete-button{
    grid-column-end:span 3;
  }
  button{
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
  }

</style>