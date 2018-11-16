document.addEventListener('DOMContentloaded',onDOMloaded())
let todos;
let content;
let input;
function onDOMloaded(){

    
        content = document.getElementById('todos')
        input = document.getElementById('input')


    todos = []
    loaddatabase()

    input.addEventListener('keyup', (event)=>{
        if (event.key === 'Enter') {
            todos.push({
                text : input.value,
                status:'unchecked'
            })
            
        }
        localStorage.setItem('database', JSON.stringify(todos) )
        updateui(todos)
    })
    

    function loaddatabase(){
        todos = JSON.parse(localStorage.getItem('database'))
    }

    updateui(todos)

function removeitem(list , id){
    list.splice(id,1)
    localStorage.setItem('database', JSON.stringify(list))
    updateui(list)
}



       /* for (let index = 0; index < buttons.length; index++) {
            buttons[index].addEventListener('click', ()=>{
                console.log(event.target)
                todos.splice(event.target.id , 1)
                updateui()
            })
            
        }*/

        

function updateui(todos){
    console.log(todos)
    let html = todos.map((todo , i)=>{
        return `
        
        <div class="todo">
            
            <div class="text  ${ todo.status === 'unchecked' ? 'unchecked' : 'checked' } ">${todo.text}</div>
            <button id="${i}" class="remove">
                <img width="20px" src="${require('./assets/mag.png')}" alt="">
            </button>
        </div>

        `
    }).join('\n')

    console.log(html)

//    let todolist = document.getElementById('todos')
    content.innerHTML = html

    

    let buttons = document.getElementsByClassName('remove')

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click' , (event)=>{
            console.log(event.target.id)
            removeitem(todos , event.target.id) //when i call this function i put todos value in the list parameter that is declare in the same function above
        })
        
    }


    
}
}
