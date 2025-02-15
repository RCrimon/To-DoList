


let input = document.querySelector('.input');
let addBtn = document.querySelector('.addBtn');
let tasks = document.querySelector('#tasks');






addBtn.addEventListener('click',()=>{
 
if(input.value.length === 0){
    alert("plaese enter a task")
}
else{ 

 tasks.innerHTML += `
    <div class="list">
    <span> ${input.value}</span>
    <button class="dlt"> <i class="fa-solid fa-trash-can"></i> </button> 
     <hr> <br>
    </div>`;
    tasks.appendChild(task);
    let dlt = document.querySelectorAll(".dlt")
    for(let i = 0 ;i<dlt.length; i++){
        dlt[i].addEventListener('click',()=>{
            dlt[i].parentElement.remove()
        })
    }
    
}
   
})

