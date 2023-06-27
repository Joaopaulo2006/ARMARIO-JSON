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
                const D = estados.find(estados => estados === 'Desocupado');
                const O = estados.find(estados => estados === 'Ocupado');
                const M = estados.find(estados => estados === 'Manutenção');
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
        .catch(error => {
            console.log("Erro ao fazer a requisição ou fazer parsing do JSON: " + error);
          });
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
                for(let i=0; i<elmnt.length; i++) {
                    elmnt[i].innerHTML = D; 
                }
            });
        })
        .catch(error => {
            console.log("Erro ao fazer a requisição ou fazer parsing do JSON: " + error);
          });
}
