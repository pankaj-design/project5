var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    if (input.value.length > 0){
    let li= document.createElement("li");
    let img = document.createElement("img");
    img.src ="https://cdn-icons.flaticon.com/png/512/3102/premium/3102186.png?token=exp=1642183513~hmac=3a7abe3354e05a177248ae18ded6b377";

    li.append(document.createTextNode(input.value)); 
    li.append(img); 

    ul.appendChild(li); 
    img.addEventListener('click',()=>{
        ul.removeChild(li);
    })
    input.value = "";
    }
})
