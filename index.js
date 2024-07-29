//detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //this.style.color ="white";
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
//detecting Keypress
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){


    switch (key) {
        case "w":
            var tom1 =new Audio('./sounds/tom-1.mp3')
            tom1.play()
        break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3")
            audio.play()
        break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3")
            audio.play()
        break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3")
            audio.play()
        break;
        case "j":
            var audio = new Audio("./sounds/kick-bass.mp3")
            audio.play()
        break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3")
            audio.play()
        break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3")
            audio.play()
        break;

        default: console.log(key);
            break;
    }

}
function buttonAnimation(currentKey){
    var active = document.querySelector("."+currentKey);
    active.classList.add("pressed");
    setTimeout (function(){
        active.classList.remove("pressed");
    },100);
}
