let inputlargura ;
let inputaltura ;
let fachadeiro ;
let eve ;
let evs ;
let lances;
let pisos ;
let bl;
let dx;
function calcularFachadeiro(largura, altura) {
  inputlargura = document.getElementById(largura).value
  if (inputlargura % 2 != 0) {
    inputlargura = parseInt(inputlargura)+1
  }

  inputaltura = document.getElementById(altura).value
  if (inputaltura % 2 != 0) {
    inputaltura = parseInt(inputaltura)+1
  }
  lances = inputaltura / 2;
  fachadeiro = ((inputlargura/2)+1) * lances;
  pisos = ((inputlargura/2)*3);
  dx = (inputlargura/2) * lances;
  bl = inputlargura * lances;
  eve = (lances * 2);
  evs = fachadeiro - (lances * 2);

  
  
document.getElementById('lances').innerHTML = `<b>${lances} lances</b>`;
  document.getElementById('quantfachadeiro').innerHTML = `${fachadeiro} fachadeiros</br> (${eve} EVE e ${evs} EVS)`;
  document.getElementById('quantpisos').innerHTML = pisos + " pisos";

  document.getElementById('quantbldx').innerHTML = dx + " DX e, " + bl + " BL";
  
}
