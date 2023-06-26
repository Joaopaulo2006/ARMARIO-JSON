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
                if (content.textContent === "Desocupado" && D) {
                    content.textContent = O;
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
