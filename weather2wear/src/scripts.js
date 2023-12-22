window.addEventListener("load",function(){
    console.log('Page loaded');
    init();
});

function init(){
    let logInButton= document.getElementById("logInButton");
    let createAccountButton= document.getElementById("createAccountButton");
    let altColor = "rgb(156, 10, 63)";


    logInButton.addEventListener("mouseover", function(){
logInButton.style.backgroundColor=altColor;
    });

    logInButton.addEventListener("onclick", function(){
        
    })

    createAccountButton.addEventListener("mouseover", function(){
        createAccountButton.style.backgroundColor= altColor;
 })
}