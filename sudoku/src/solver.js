import isValid from "./isValid"

const solveSudoku=(bo)=>{

    let find = find_empty(bo)
    console.log(find)
    let row=null
    let col=null
    if ( !find){
        return true
    }
    else{
            row=find[0]
            col=find[1]
    }
    
    for (let i=0;i<=9;i++){
        if (isValid(bo, i, (row, col))){
            bo[row][col] = i

            if (solveSudoku(bo))return true

            bo[row][col] = 0
        }
    }
    return false
}
const find_empty=(bo)=>{
    for (let i=0;i<=9;i++){
        for (let j=0;j<=9;j++){
            if (bo[i][j] == 0)
                return (i, j)  
        }
    }
}

export default solveSudoku