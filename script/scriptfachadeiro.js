let inputmetragem ;
let fachadeiro ;
let pisos ;
let bl;
let dx;
function calcularFachadeiro() {
  inputmetragem = document.getElementById("metragem").value
  if (inputmetragem % 2 != 0) {
    inputmetragem = parseInt(inputmetragem)+1
  }
  
  fachadeiro = (inputmetragem/2)+1;
  pisos = (inputmetragem/2)*3;
  dx = inputmetragem/2;
  bl = inputmetragem;
  document.getElementById('quantfachadeiro').innerHTML = fachadeiro + " fachadeiros";
  document.getElementById('quantpisos').innerHTML = pisos + " pisos";

  document.getElementById('quantbldx').innerHTML = dx + " DX e, " + bl + " BL";
  
}
