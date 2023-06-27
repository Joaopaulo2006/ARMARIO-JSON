const Armarios = './dados/armarios.json';
function estado(This) {
    fetch(Armarios)
        .then(response => response.json())
        .then(data => {
            const arms = data.Armas;
            var content = This.previousElementSibling;
            arms.forEach(arma => {
                const cores = arma.cor;
                const estados = arma.estados;
                const D = estados.find(estado => estado === 'Desocupado');
                const O = estados.find(estado => estado === 'Ocupado');
                const M = estados.find(estado => estado === 'Manutenção');
                if (content.textContent === "Desocupado" && D) {
                    content.textContent = O;
                    content.style.backgroundColor = cores[1];
                }
                else if (content.textContent === "Ocupado" && O) {
                    content.textContent = M;
                    content.style.backgroundColor = cores[2];
                }
                else {
                    content.textContent = D;
                    content.style.backgroundColor = cores[0];
                }
            });
        })
}
window.onload = function nums() {
    fetch(Armarios)
        .then(response => response.json())
        .then(data => {
            const arms = data.Armas;
            let Idarm = arms[0].numeros;
            const idmnts = document.querySelectorAll('.id');
            idmnts.forEach(idmnts => {
                idmnts.textContent = `Nº${Idarm.toString().padStart(3, '0')}`;
                Idarm++;
            });
            arms.forEach(arma => {
               
                const estados = arma.estados;
                const D = estados.find(estado => estado === 'Desocupado');
               
                var elmnt = document.getElementsByClassName("nms");
                for(let i = 0; i < elmnt.length; i++) {
                    elmnt[i].innerHTML = D; 
                }
            });
        }
        )
}
