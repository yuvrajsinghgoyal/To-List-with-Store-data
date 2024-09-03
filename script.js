let inputBox=document.getElementById('input-box')
let listContainer=document.getElementById('list-container')
let unList=document.getElementById('ulList')

function addTask(){
    if(inputBox.value===''){
        alert('please enter some your task , can not be empty')
    }
    else{
        let li = document.createElement('li')
        // li.className = "checked";
        li.innerHTML=inputBox.value;
        unList.appendChild(li)
        let span =document.createElement('span')
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value=''
    saveData()

}


// this code i do understand by me i have to see this topic on youtube

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)
// ***



// this code for to save the data in local storage 
function saveData(){
    localStorage.setItem('data',unList.innerHTML);
}

// this code to display the saved data on the webpage
function showTask(){
    unList.innerHTML=localStorage.getItem('data');
}
showTask();

