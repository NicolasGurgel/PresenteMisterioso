document.addEventListener("DOMContentLoaded", function(){
    const titulo = document.getElementById("titulo");
    let corAtual = "rgb(0, 0, 255)";

    setInterval(function() {
        if(corAtual === "rgb(0, 0, 255)"){
            titulo.style.color = "rgb(255, 0, 0)";
            corAtual = "rgb(255, 0, 0)";
        }else{
            titulo.style.color = "rgb(0, 0, 255)";
            corAtual = "rgb(0, 0, 255)";
        }
    }, 245);
})

document.getElementById("troca").onclick = function(){
    document.getElementById("original").style.display = "none";
    document.getElementById("novo").style.display = "block";
}

document.getElementById("retroca").onclick = function(){
    document.getElementById("novo").style.display = "none";
    document.getElementById("original").style.display = "block";
}

const segredo = document.getElementById("segredo");

document.getElementById("subtitulo").onclick = function() {
    const cor = window.getComputedStyle(segredo).color;
    if (cor === "rgb(255, 255, 255)") { 
        segredo.style.color = "rgb(0, 0, 0)"; 
    } else if (cor === "rgb(0, 0, 0)") { 
        segredo.style.color = "rgb(255, 255, 255)"; 
    }
};

document.getElementById("capitao").onclick = function() {
    alert("vou me matar as 23:99");
}

document.getElementById("botao").onmouseover = function() {
    let largura = window.innerWidth;
    let altura = window.innerHeight;
    let x = Math.random() * (largura - this.offsetWidth);
    let y = Math.random() * (altura - this.offsetHeight);
    this.style.left = x + "px";
    this.style.top = y + "px";
}

const mario = document.getElementById("mario");
mario.classList.add("faceR");
let timer;
const jumpsound = document.getElementById("jumpsound");
const left = document.getElementById("esq");
const down = document.getElementById("baixo");
const up = document.getElementById("cima");
const right = document.getElementById("dir");

function inatividade(){
    clearTimeout(timer);
    mario.id = "mario";
    mario.src = "mario.gif";
    timer = setTimeout(()=>{
        mario.id = "parado";
        mario.src = "parado.webp";
    }, 500);
}

function jump(){
    if(!mario.classList.contains("jump")){
        mario.classList.add("jump");
        jumpsound.currentTime = 0;
        jumpsound.play();
        setTimeout(function(){
            mario.classList.remove("jump");
        }, 500);
    }
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

function agachar(){
    if(mario.classList.contains("faceR") && !mario.classList.contains("agachar")){
        mario.classList.add("agachar", "faceR");
    }else if(mario.classList.contains("faceL") && !mario.classList.contains("agachar")){
        mario.classList.add("agachar", "faceL");
    }
}

function levantar(){
    mario.classList.remove("agachar");
}

document.addEventListener("keydown", (event)=>{
    if(event.code === 'Space'){
        jump();
    }else if(event.code === 'KeyD'){
        walkR();
        right.style.display = "block";
    }else if(event.code === 'KeyA'){
        walkL();
        left.style.display = "block";
    }else if(event.code === 'KeyS'){
        agachar();
        down.style.display = "block";
    }else if(event.code === 'KeyW'){
        up.style.display = "block";
    }

    inatividade();

});

document.addEventListener("keyup", (event)=>{
    if(event.code === 'KeyD'){
        right.style.display = "none";
    }else if(event.code === 'KeyA'){
        left.style.display = "none";
    }else if(event.code === 'KeyS'){
        levantar();
        down.style.display = "none";
    } else if(event.code === 'KeyW'){
        up.style.display = "none";
    }
})

inatividade();