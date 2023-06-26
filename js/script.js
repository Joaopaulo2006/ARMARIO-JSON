const Armarios = './dados/armarios.json';

function estado(This) {
    fetch(Armarios)
        .then(response => response.json())
        .then(data => {
            const arms = data.Armas;
            var content = This.previousElementSibling;
            arms.forEach(arma => {
                const estados = arma.estados;
                const D = estados.find(estado => estado === 'Desocupado');
                const O = estados.find(estado => estado === 'Ocupado');
                const M = estados.find(estado => estado === 'Manutenção');
                const CD = estados.find(estado => estado === 'corD');
                const CO = estados.find(estado => estado === 'rgb(145, 143, 143)');
                const CM = estados.find(estado => estado === 'corM');
                if (content.textContent === "Desocupado" && D) {
                    content.textContent = O;
                    content.style.backgroundColor = CO;
                }
                else if (content.textContent === "Ocupado" && O) {
                    content.textContent = M;
                }
                else {
                    content.textContent = D;
                }
            });
        })
}
function carregarNumero() {
    var ids = "Nº";
    ids += document.querySelector('.id');
    for(i = 0; i < ids.length; i++) {
        ids = ids + i;
    }
    
}

// Chamar a função ao carregar a página
window.addEventListener('load', carregarNumero);
