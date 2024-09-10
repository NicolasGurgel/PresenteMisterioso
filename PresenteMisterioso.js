#capitao{
    width: 270px;
}

.titulo1{
    font-size: 40px;
    color: blue;
}

#segredo{
    color: white;
}

#botao{
    position:absolute;
}

#mario{
    position: absolute;
    height: 250px;
    top: 200px;
    left: 400px;
    transition: left 0.3s ease;

}

.faceR{
    transform: scaleX(1);
    transition: none;
}

.faceL{
    transform: scaleX(-1);
    transition: none;
}

.jump{
    animation: pulo 0.5s ease-out;
}
@keyframes pulo {
    0%{top: 200px;}
    50%{top: 50px;}
    100%{top: 200px;}
}

.agachar{
    animation: agachamento 0.2s ease;
}
@keyframes agachamento{
    0%{height: auto;}
    100%{height: 50%;}
}
