// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var studentIdbtn = document.getElementById("studentIdbtn");
var noun1 = document.getElementById("noun1");
var verb = document.getElementById("verb");
var adjective = document.getElementById("adjective");
var noun2 = document.getElementById("noun2");
var setting = document.getElementById("setting");
var resetBtn= document.getElementById("ResetBtn");

// Constants for p tag to display query selectors
var studentId = document.querySelector("#studentId");
var choosenNoun1 =document.getElementById("choosenNoun1");
var choosenVerb =document.getElementById("choosenVerb");
var choosenAdjective =document.getElementById("choosenAdjective");
var choosenNoun2 =document.getElementById("choosenNoun2");
var choosenSetting =document.getElementById("choosenSetting");

// Constants for final buttons and p tags
var playback =document.getElementById("playback");
var random =document.getElementById("random");
var story =document.getElementById("story");


// Variables for pre-defined arrays
var noun1Array=["The turkey","Mom","Dad","The Dog","My teacher","The eleplent","The Cat"];
var verbArray=["sat on","ate","dancing with","saw","doesn't like","kissed"];
var adjectiveArray=["a funny","a scary","a goofy","a slimy","a barking","a fat"];
var noun2Array = ["goat","monkey","fish","cow","frog","bug","worm"];
var settingArray = ["on the moon", "on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];


// Variables for count to grab array elements

var noun1Count=0;
var verbCount = 0;
var adjectiveCount=0;
var noun2Count =0;
var settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    choosenNoun1.textContent=(noun1Array[noun1Count]);
    // if-else to change count setting
    if(noun1Count>=noun1Array.length-1){
        noun1Count=0;
    }
    else{
        noun1Count+=1;
    }
    
}

function verb_on_click() {
        // variable to get array element and displaying it
        choosenVerb.textContent=(verbArray[verbCount]);
        // if-else to change count setting
        if(verbCount>=verbArray.length-1){
            verbCount=0;
        }
        else{
            verbCount+=1;
        }
            
}

function adjective_on_click() {
        // variable to get array element and displaying it
        choosenAdjective.textContent=(adjectiveArray[adjectiveCount]);
        // if-else to change count setting
        if(adjectiveCount>=adjectiveArray.length-1){
            adjectiveCount=0;
    }
        else{
            adjectiveCount+=1;
        }
        
    
}

function noun2_on_click() {
        // variable to get array element and displaying it
        choosenNoun2.textContent=(noun2Array[noun2Count]);
        // if-else to change count setting
        if(noun2Count>=noun2Array.length-1){
            noun2Count=0;
        }
        else{
            noun2Count+=1;
        }
        
    
}

function setting_on_click() {
      // variable to get array element and displaying it
      choosenSetting.textContent=(settingArray[settingCount]);
      // if-else to change count setting
      if(settingCount>=settingArray.length-1){
          settingCount=0;
      }
      else{
          settingCount+=1;
      }
      
    
}

// concatenate the user story and display
function playback_on_click() {
    story.textContent=`${noun1Array[noun1Count-1]} ${verbArray[verbCount-1]} ${adjectiveArray[adjectiveCount-1]} ${noun2Array[noun2Count-1]}  ${settingArray[settingCount-1]}.`;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
console.log(findARandom());
    story.textContent=`${noun1Array[findARandom()]} ${verbArray[findARandom()]} ${adjectiveArray[findARandom()]} ${noun2Array[findARandom()]}  ${settingArray[findARandom()]}.`;
}
function showStudentID(){
    studentId.textContent = " Tanzilur Rahman || 200595789";

}
function findARandom(){
    return Math.floor(Math.random() * 6);
}
function reset_in_click(){
    choosenNoun1.textContent=(null);
    choosenVerb.textContent=(null);
    choosenAdjective.textContent=(null);
    choosenNoun2.textContent=(null);
    story.textContent=(null);
    studentId.textContent=(null);
    choosenSetting.textContent=(null);
    noun1Count=0;
    verbCount = 0;
    adjectiveCount=0;
    noun2Count =0;
    settingCount = 0;


}

/* Event Listeners
-------------------------------------------------- */
studentIdbtn.addEventListener("click",showStudentID);
noun1.addEventListener("click",noun1_on_click);
verb.addEventListener("click",verb_on_click);
adjective.addEventListener("click",adjective_on_click);
noun2.addEventListener("click",noun2_on_click);
setting.addEventListener("click",setting_on_click);
playback.addEventListener("click",playback_on_click);
random.addEventListener("click",random_on_click);
resetBtn.addEventListener("click",reset_in_click);