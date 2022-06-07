


document.querySelector('#push').onclick=function(){
    if(document.querySelector('#newtask input').value.length==0){
        alert("Please Enter a Task");
    }else{

    // //    local storage
    //    localStorage.setItem('toDoItems',JSON.stringify
    //     (document.querySelector('#newtask input').value));
        // let theList=document.querySelector('#newtask input').value
        // const toDoList=JSON.parse(localStorage.getItem('toDoItems'))
        // if(toDoList){
            // toDoList.unshift(theList);

        
                
        document.querySelector('#tasks').innerHTML
        +=`<div class="task"><span id="taskname">
        ${document.querySelector("#newtask input").value}
        </span><button class="delete">X</button></div>`;
        

        let currentTasks=document.querySelectorAll('.delete');
        for (let i=0; i < currentTasks.length; i++){
            currentTasks[i].onclick=function(){
                this.parentNode.remove();
            }
        }
        let AllTasks=document.querySelectorAll('#taskname');
        for (let i=0; i < AllTasks.length; i++){
            AllTasks[i].onclick=function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector('#newtask input').value="";
    }

    
}
