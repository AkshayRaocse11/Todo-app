document.addEventListener("click",function(e){

if(e.target.classList.contains("edit-me")) {
let userInput = prompt("Enter Your Desired text")
axios.post('/update-item',{text:userInput, id:e.target.getAttribute("")}).then(function(){

//do something here

}).catch(function(){

console.log("please try agian later")

})

}


})

