function estado(This) {
    var content = This.previousElementSibling;


    if (content.innerHTML === "Vazio") {
        content.innerHTML = "Ocupado";
        content.style.backgroundColor = 'rgb(145, 143, 143)';
    }
    else if (content.innerHTML === "Ocupado") {
        content.innerHTML = "Manutenção";
        content.style.backgroundColor = 'rgb(196, 0, 0)';
    }
    else if (content.innerHTML === "Manutenção") {
        content.innerHTML = "Desocupado";
        content.style.backgroundColor = 'rgb(60, 161, 2)';
    }
    else {
        content.innerHTML = "Ocupado";
        content.style.backgroundColor = 'rgb(145, 143, 143)';
    }
}

