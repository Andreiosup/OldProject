
const isValid =(grid,row,col,num)=>{
    // console.log(grid)
    for(let i=0;i<9;i++){
        if (grid[row][i]===num && row!=i) return false
        if (grid[i][col]===num && col!=i) return false
    }
    let boxRow=Math.floor(row/3)
    let boxCol=Math.floor(col/3)
    // console.log(boxCol*3,boxCol*3+3)
    for (let i=boxRow*3;i<boxRow*3+3;i++){
        for (let j=boxCol*3;j<boxCol*3+3;j++){
            // console.log(grid[i][j].num)
            if (grid[i][j]===num) return false
        }
    }
    return true
}
module.exports=isValid
