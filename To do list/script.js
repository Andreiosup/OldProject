const listInput=document.querySelector('.input')
const addButton=document.querySelector('.add-button')
const listContainer=document.querySelector('.list-container')

addButton.addEventListener('click', addToList )

function addToList(){
    if (listInput.value=="")return

    const item=document.createElement('div')
    item.classList.add('list-item')
    item.addEventListener

    const itemText=document.createElement('span')
    itemText.innerHTML=listInput.value
    item.appendChild(itemText)

    const deleteButton=document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML='X'
    item.appendChild(deleteButton)

    item.addEventListener('click',deleteList)

    listInput.value=""

    listContainer.appendChild(item)
}
function deleteList(event){
    const item=event.target.parentElement
    console.log(item)
    const deleteButton=document.querySelector('.delete-button');
    if (event.target==deleteButton) item.remove()
}