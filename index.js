//for all buttons
var sizeofquery = document.querySelectorAll(".drum").length;


for (var i = 0; i < sizeofquery; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHtml = this.innerHTML;
        makesound(buttonInnerHtml);

        animationButton(buttonInnerHtml);

    });
}

//for keypress
document.addEventListener("keypress", function(event) {
    makesound(event.key);

    animationButton(event.key);
});

function makesound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log(this.innerHTML);
    }
}

//for a=animation of buttons
function animationButton(ButtonKey) {

    var activekey = document.querySelector("." + ButtonKey);

    activekey.classList.add("pressed");

    setTimeout(function() {
        activekey.classList.remove("pressed")
    }, 200);
}

// in place of making this function we can use anonymous funcion without naming that
// function handleClick() {
//     alert("Clicked");
// }