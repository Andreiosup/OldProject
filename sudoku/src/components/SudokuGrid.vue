<template>
  <div class="grid">
    <div class="row" v-for="row in grid" :key="row" >
        <SudokuCell v-for="cell in row" :key="cell" v-bind="cell" @click="selectCell(cell.row,cell.col)">
         </SudokuCell>
    </div>
  </div>
  <div>
    <SudokuButtons @event="addNum"></SudokuButtons>
  </div>
</template>

<script lang="js">
import SudokuCell from './SudokuCell.vue'
import SudokuButtons from './SudokuButtons.vue';
import isValid from "../isValid.js"
import solveSudoku from "../solver.js"


export default {
  name: 'SudokuGrid',
  components: {
    SudokuCell,
    SudokuButtons
  },
  data(){
    return {
      grid:[[]],
      sudokusList:[],
      sudoku:[],
      selectedCell:null,
      solved:[[]]
    }
  },
  created(){
    this.sudokusList=[

      //  [[8,3,0,0,0,7,0,2,4],
      //   [7,4,0,2,0,8,0,0,6],
      //   [0,0,0,0,0,5,0,9,7],
      //   [2,0,0,1,5,0,0,3,0],
      //   [0,0,1,9,8,0,4,0,0],
      //   [4,9,6,0,0,2,0,8,0],
      //   [9,8,0,0,4,0,2,0,0],
      //   [0,6,4,0,0,0,7,0,3],
      //   [0,0,7,5,6,0,0,0,8]],
       
       [[2,9,0,0,0,0,0,7,0],
        [3,0,6,0,0,8,4,0,0],
        [8,0,0,0,4,0,0,0,2],
        [0,2,0,0,3,1,0,0,7],
        [0,0,0,0,8,0,0,0,0],
        [1,0,0,9,5,0,0,6,0],
        [7,0,0,0,9,0,0,0,1],
        [0,0,1,2,0,0,3,0,6],
        [0,3,0,0,0,0,0,5,9]],

        [[1,0,0,0,0,7,0,9,0],
         [0,3,0,0,2,0,0,0,8],
         [0,0,9,6,0,0,5,0,0],
         [0,0,5,3,0,0,9,0,0],
         [0,1,0,0,8,0,0,0,2],
         [6,0,0,0,0,4,0,0,0],
         [3,0,0,0,0,0,0,1,0],
         [0,4,0,0,0,0,0,0,7],
         [0,0,7,0,0,0,3,0,0]]
    ]
    this.sudoku=this.sudokusList[0]
  },
  mounted(){
    this.grid=this.generateGrid()
  },
  methods:{
    selectCell(row,col){

      if (this.selectedCell){
        let [selectCellRow,selectCellCol]=this.selectedCell
        this.grid[selectCellRow][selectCellCol].isSelected=false
      }
      this.selectedCell=[row,col]
      this.grid[row][col].isSelected=true
      
    },
    generateGrid(){
      const newGrid=[]
      for (let row = 0; row < 9; row++) {
          const currentRow = [];
          for (let col = 0; col < 9; col++) {
            currentRow.push(this.getCell(row,col,this.sudoku[row][col]));
          }
          newGrid.push(currentRow);
        }
      return newGrid
    },
    getCell(row,col,num){
      return{
        row,
        col,
        num:num,
        isValid:true,
        isSelected:false,
        // if the number is not initialy it can't be changed to another number by the user
        canChange:!num
      }
    },
  
    addNum(n){
      // console.log(n)
      if (!this.selectedCell) return 

      let [row,col]=this.selectedCell
      let cell=this.grid[row][col]

      if (!cell.canChange) return
      if (!isValid(this.sudoku,row,col,n)) {
        cell.isValid=false
      }else{
        cell.isValid=true
      }
      // console.log(n)

      cell.num=n

      if (this.isGridFull()){ 
        console.log("no")
        return
      }
      let solve= solveSudoku(this.sudoku)
      console.log(solve)
    },
    isGridFull(){
      for (let row of this.grid){
        for (let cell of row){
          if (cell.num==0 || !cell.isValid) return false
        }
      }
      return true
    }
  }



}
</script>

<style >
    .grid{
      height: auto;
      width: auto;
      border: 4px solid black;
    }
</style>
