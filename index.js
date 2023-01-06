var num=document.querySelectorAll(".drum").length;
for(let i=0;i<num;i++){
document.querySelectorAll("button")[i].addEventListener("click"  ,w);
function w(){
  (this.style.color="black");
  buttonInnerHTML=this.innerHTML;

  make(buttonInnerHTML);
}
}

document.addEventListener("keypress",function(event){
  make(event.key);
});

function make(key){
  switch(key){
    case "w":
    var aud=new Audio("sounds/tom-1.mp3");
    aud.play();
    break;

    case "a":
    var aud=new Audio("sounds/tom-2.mp3");
    aud.play();
    break;

    case "s":
    var aud=new Audio("sounds/tom-3.mp3");
    aud.play();
    break;

    case "d":
    var aud=new Audio("sounds/tom-4.mp3");
    aud.play();
    break;

    case "j":
    var aud=new Audio("sounds/snare.mp3");
    aud.play();
    break;

    case "k":
    var aud=new Audio("sounds/crash.mp3");
    aud.play();
    break;

    case "l":
    var aud=new Audio("sounds/kick-bass.mp3");
    aud.play();
    break;
  }
}
