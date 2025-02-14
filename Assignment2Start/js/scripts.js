// constants for query selector
var studentID = document.getElementById("myStudentId");
var customColorBtn = document.querySelector(".custColor");
var randomColorBtn = document.querySelector(".randColor");
var userInput=document.getElementById("customNumber");
var selectElement = document.getElementById("imageSelect");
// function to change bg color from user input and add student id
function changeCustomColor() {
    studentID.textContent=("200595789");

    let inputValue = Number(userInput.value);  // Convert input to a number
    
    console.log(inputValue); // Debugging: Check the value in the console

    
    if (inputValue >= 1 && inputValue < 10) {
        document.body.style.backgroundColor = "lightblue";
    } else if (inputValue >= 10 && inputValue < 20) {
        document.body.style.backgroundColor = "yellow";
    } else if (inputValue >= 20 && inputValue < 30) {
        document.body.style.backgroundColor = "orange";
    } else if (inputValue >= 30 && inputValue < 40) {
        document.body.style.backgroundColor = "red";
    } else if (inputValue >= 40 && inputValue < 50) {
        document.body.style.backgroundColor = "purple";
    } else if (inputValue >= 50 && inputValue < 60) {
        document.body.style.backgroundColor = "green";
    } else if (inputValue >= 60 && inputValue < 70) {
        document.body.style.backgroundColor = "pink";
    } else if (inputValue >= 70 && inputValue < 80) {
        document.body.style.backgroundColor = "brown";
    } else if (inputValue >= 80 && inputValue < 90) {
        document.body.style.backgroundColor = "gray";
    } else if (inputValue >= 90 && inputValue <= 100) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"; // Make text visible on black
    } else {
        alert("Please enter a number between 1 and 100.");
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    studentID.textContent=("200595789");
    let value1 = Math.floor(Math.random()*256);
    let value2 = Math.floor(Math.random()*256);
    let value3 = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = "rgb("+value1+", "+value2+", "+value3+")";

}

// function to generate options for select list
function addList() {
    
    // Prevent adding duplicate options
    while (selectElement.options.length > 1) {
        selectElement.remove(1);
    }
    for(let i=1;i<=5;i++){
        var newOption = document.createElement("option");
        newOption.setAttribute("value",i);
        newOption.textContent = "Image "+i;
        selectElement.appendChild(newOption);

    };
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    
}

// function to change image
function changeImage() {
    let imageElement = document.getElementById("images");
    let selectedValue = selectElement.value;
    if(selectedValue){
        imageElement.src = "img/img"+selectedValue+".jpg";
        imageElement.alt = "Image "+selectedValue;
    } else {
        imageElement.src = ""; // Clear image if no selection
        imageElement.alt = "No image selected";
    }
}

// event listeners for on click event of buttons and select
customColorBtn.addEventListener("click",changeCustomColor);
randomColorBtn.addEventListener("click",changeRandomColor);
selectElement.addEventListener("click",addList);
selectElement.addEventListener("change", changeImage);

// event listeners for on change event of select