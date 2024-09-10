document.getElementById("titulo").onclick = function() {
    if (this.style.color === "rgb(0, 0, 255)") { 
        this.style.color = "rgb(255, 0, 0)"; 
    } else if (this.style.color === "rgb(255, 0, 0)") { 
        this.style.color = "rgb(0, 0, 255)"; 
    } else {
        
        this.style.color = "rgb(0, 0, 255)"; 
    }
};

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
    alert("Vou reprovar em calculo 2 socorro");
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

function agachar(){
    mario.classList.add("agachar");
}

function levantar(){
    mario.classList.remove("agachar");
}

document.addEventListener("keydown", (event)=>{
    if(event.code === 'Space'){
        jump();
    }else if(event.code === 'KeyD'){
        walkR();
    }else if(event.code === 'KeyA'){
        walkL();
    }else if(event.code === 'KeyS'){
        agachar();
    }
});

document.addEventListener("keyup", (event)=>{
    if(event.code === 'KeyS'){
        levantar();
    }
})