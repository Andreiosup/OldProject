<template>
  <div class="container">
    <SudokuGrid></SudokuGrid>
  </div>
</template>

<script>
import SudokuGrid from './components/SudokuGrid'


export default {
  name: 'App',
  components: {
    SudokuGrid,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    height: 100vh;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

</style>
