// Ao clicar no título, ele muda de cor
document.getElementById("titulo").onclick = function() {
    this.style.color = "red";
}

// Quando passar o mouse sobre a imagem, exibe um alerta
document.getElementById("capitao").onmouseover = function() {
    alert("chana");
}

document.getElementById("botao").onmouseover = function() {
    let largura = window.innerWidth;
    let altura = window.innerHeight;
    let x = Math.random() * (largura - this.offsetWidth);
    let y = Math.random() * (altura - this.offsetHeight);
    this.style.left = x + "px";
    this.style.top = y + "px";
}