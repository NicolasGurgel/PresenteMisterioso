document.getElementById("titulo").onclick = function() {
    this.style.color = "red";
}
/*
document.getElementById("capitao").onmouseover = function() {
    alert("chana");
}
*/
document.getElementById("botao").onmouseover = function() {
    let largura = window.innerWidth;
    let altura = window.innerHeight;
    let x = Math.random() * (largura - this.offsetWidth);
    let y = Math.random() * (altura - this.offsetHeight);
    this.style.left = x + "px";
    this.style.top = y + "px";
}

const mario = document.getElementById("mario");

function jump(){
    mario.classList.add("jump");
    setTimeout(function(){
        mario.classList.remove("jump");
    }, 500);
}

function walkR(){
    let atual = parseInt(window.getComputedStyle(mario).left, 10);
    mario.classList.remove("faceL");
    mario.classList.add("faceR");
    mario.style.left = (atual+50) + "px";
    
}

function walkL(){
    let atual = parseInt(window.getComputedStyle(mario).left, 10);
    mario.classList.remove("faceR");
    mario.classList.add("faceL");
    mario.style.left = (atual-50) + "px";
    
}

document.addEventListener("keydown", (event)=>{
    if(event.code === 'Space'){
        jump();
    }else if(event.code === 'KeyD'){
        walkR();
    }else if(event.code === 'KeyA'){
        walkL();
    }
});