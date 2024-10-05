<template>
    <div class="cell-container">
        <div :class="[ 'cell',isSelected ? 'selected' : '',isValid?'':'incorrect',canChange?'placed':'']" >
            <div :style=" num? '' :{opacity:0} ">
                {{num}}
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:"SudokuCell",
        props: {
            num: Number,
            row:Number,
            col:Number,
            isSelected: Boolean,
            canChange:Boolean,
            isValid:Boolean,
        },
    }
</script>
<style scoped>
    .cell-container{
        display: inline-block;
        border: 1px solid rgb(151, 151, 151);
    }
    :nth-child(3), :nth-child(6){
        border-right-width:4px;
    }
    :nth-child(3) .cell-container,  :nth-child(6) .cell-container {
        border-bottom-width:4px;
    }   
    .cell{
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Oswald', sans-serif;
        font-size: 40px;
    }
    .placed{
        color: rgb(58, 58, 255);
    }
    .incorrect{
        color: red;
    }
    .selected{
        background-color: yellow;
    }

    
</style>