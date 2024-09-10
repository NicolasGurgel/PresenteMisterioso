// Ao clicar no título, ele muda de cor
document.getElementById("titulo").onclick = function() {
    this.style.color = "red";
}

// Quando passar o mouse sobre a imagem, exibe um alerta
document.getElementById("capitao").onmouseover = function() {
    alert("Talvez fudendo, talvez não!");
}
