// const Armarios = './dados/armarios.json';

// function estado(This) {
//   fetch(Armarios)
//     .then(response => response.json())
//     .then(data => {

//       const arms = data.Armas;
//       var content = This.previousElementSibling;
      
//       arms.forEach(arma => {
//         const estado = arma.estados;
//         const D = arm.estado.find(arma => arma.estados === 'Desocupado');
//         const O = arm.estado.find(arma => arma.estados === 'Ocupado');
//         const M = arm.estado.find(arma => arma.estados === 'Manutenção');

//         if (content.textContent === "Desocupado") {
//           console.log(O);
//         }
//         else if (content.textContent === "Ocupado") {
//           console.log(M);
//         }
//         else {
//           console.log(D);
//         }
//       });
//     })


// }
/-----------------/
// const Armarios = './dados/armarios.json';
// function estado(This) {
//   fetch(Armarios)
//     .then(response => response.json())
//     .then(data => {

//       const arms = data.Armas;
//       var content = This.previousElementSibling;
      
//       arms.forEach(arma => {
//         const estado = arma.estados;
  
//         if (content === "Desocupado" && estado === "Desocupado") {
//           console.log(arma);
//         }
//         else if (content === "Ocupado" && estado === "Ocupado") {
//           console.log(arma);
//         }
//         else if (content === "Manutenção" && estado === "Manutenção") {
//           console.log(arma);
//         }
//       });
//     })


// }