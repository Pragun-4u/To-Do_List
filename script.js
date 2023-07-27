const inputtext=document.getElementById('inputtext');
const ListContainer=document.getElementById('listcontainer'); 
const warn=document.getElementById('warn'); 


function addTask(){
    if(!inputtext.value){
        warn.innerHTML="Invalid! Add a Task."
        saveData();
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputtext.value;
        ListContainer.appendChild(li);
        warn.innerHTML='';

        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
        saveData();
    }
    inputtext.value='';
    saveData();
}

ListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

window.addEventListener('load', showData());
// showData();

function showData(){
    ListContainer.innerHTML=localStorage.getItem("data");
}