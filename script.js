const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");//list-container for li

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // get li value from inputbox
        listcontainer.appendChild(li); // display li
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();  // call the saved data in the browser which will also be the updated version of the li
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){                    //if li was clicked
        e.target.classList.toggle("checked");         //if it was there already the checked mark it will remove it
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();              //remove the li that was added
        saveData();
    }
}, false);

function saveData(){             
    localStorage.setItem("data", listcontainer.innerHTML); // save the data enterd from the list container
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data"); // show the data that was store from the local storage
}
showTask(); // call the function