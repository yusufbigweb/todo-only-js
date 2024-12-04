
// mini proj - todo simple 

const container = document.createElement('div');
const input = document.createElement('input')
const btnCreateTasks = document.createElement('button')
const maindisplayContainer = document.createElement('div')
const displayContainer = document.createElement('div')
const iconX = document.createElement('i')

btnCreateTasks.addEventListener('click', function () {
    // Input Data
    const iconX = document.createElement('i')
    const dataInput = input.value; // 1
    iconX.className = "fa-solid fa-xmark"; //2

    // Row
    const rowCon = document.createElement('div')
    rowCon.id = "row";
    rowCon.style.cssText = "display: flex; justify-content: space-between; padding: 10px; margin-top: 15px; align-items: center; border: 1px solid black;"
    container.appendChild(rowCon)

    // Column
    rowCon.append(dataInput)
    rowCon.appendChild(iconX)

    //Remove Tasks 
    const removeBtn = document.createElement('button');
    rowCon.appendChild(removeBtn)
    removeBtn.appendChild(iconX)
    

    removeBtn.addEventListener('click', function () {
        rowCon.remove()
    })
})

btnCreateTasks.innerText = "ADD";
input.style.marginBottom = "10px"
btnCreateTasks.style.padding = "8px 17px"
btnCreateTasks.style.border = "none"
container.className = "container";
document.body.appendChild(container);
container.appendChild(input)
container.style.cssText = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);";
input.style.padding = "10px";
input.style.width = "100%"
const inputName = document.createAttribute('name');
inputName.value = "add-tasks";
input.setAttributeNode(inputName)

const inputVal = document.createAttribute('value')
inputVal.value = "Add Tasks";

const inputId = document.createAttribute('id');
inputId.value = "inputId"
input.setAttributeNode(inputId)

const inputPlaceholder = document.createAttribute('placeholder')
inputPlaceholder.value = "add task..."
input.setAttributeNode(inputPlaceholder, inputVal)
container.appendChild(btnCreateTasks)
container.appendChild(maindisplayContainer);
container.appendChild(displayContainer)
maindisplayContainer.appendChild(displayContainer)