let balancim1 ;
let balancim1m;
let balancim2;
let balancim3;
let balancim4;
let balancim5;
let balancim6;

function teste(gg, mm){
   if (document.getElementById(gg).style.display == `flex`) {
      document.getElementById(gg).style.display = `none`;
   } else {
      document.getElementById(gg).style.display = `flex`;
   }
  if (document.getElementById(gg).style.display == `flex`) {
      document.getElementById(mm).style.backgroundColor = `#6D8C7B`;
   } else {
      document.getElementById(mm).style.backgroundColor = `#fff`;
  }
   
}

function calcularBalancim1() {
  balancim1 = document.getElementById("blc1").value;
  document.getElementById('gcorpoinex').innerHTML = balancim1 + " Par de G. Corpo";
document.getElementById('piso').innerHTML = balancim1 + " Pisos";
document.getElementById('afastador').innerHTML = balancim1*2 + " Afastador";
document.getElementById('guincho').innerHTML = balancim1*2 + " Guincho";
document.getElementById('cabide').innerHTML = balancim1*2 + " Cabide";
document.getElementById('cabos').innerHTML = balancim1*4 + " Cabos";
document.getElementById('clipes').innerHTML = balancim1*16 + " Clipes";
document.getElementById('parafusos').innerHTML = balancim1*12 + " Parafusos";
}

function calcularBalancim1M() {
  balancim1m = document.getElementById("blc1m").value;
  document.getElementById('gcorpoinex1m').innerHTML = balancim1m + " Par de G. Corpo";
document.getElementById('piso1m').innerHTML = balancim1m + " Pisos";
document.getElementById('afastador1m').innerHTML = balancim1m*2 + " Afastador";
document.getElementById('guincho1m').innerHTML = balancim1m*2 + " Guincho";
document.getElementById('cabide1m').innerHTML = balancim1m*2 + " Cabide";
document.getElementById('cabos1m').innerHTML = balancim1m*4 + " Cabos";
document.getElementById('clipes1m').innerHTML = balancim1m*16 + " Clipes";
document.getElementById('parafusos1m').innerHTML = balancim1m*12 + " Parafusos";
}

function calcularBalancim2M() {
  balancim2 = document.getElementById("blc2m").value;
  document.getElementById('gcorpoinex2M').innerHTML = balancim2 + " Par de G. Corpo";
document.getElementById('piso2M').innerHTML = balancim2 + " Pisos";
document.getElementById('afastador2M').innerHTML = balancim2*2 + " Afastador";
document.getElementById('guincho2M').innerHTML = balancim2*2 + " Guincho";
document.getElementById('cabide2M').innerHTML = balancim2*2 + " Cabide";
document.getElementById('cabos2M').innerHTML = balancim2*4 + " Cabos";
document.getElementById('clipes2M').innerHTML = balancim2*16 + " Clipes";
document.getElementById('parafusos2M').innerHTML = balancim2*12 + " Parafusos";
}

function calcularBalancim3() {
  balancim3 = document.getElementById("blc3").value;
  document.getElementById('gcorpoinex3').innerHTML = `${balancim3} Par de G. Corpo`;
document.getElementById('piso3').innerHTML = `${balancim3} Pisos`;
document.getElementById('afastador3').innerHTML = balancim3*2 + " Afastador";
document.getElementById('guincho3').innerHTML = balancim3*2 + " Guincho";
document.getElementById('cabide3').innerHTML = balancim3*2 + " Cabide";
document.getElementById('cabos3').innerHTML = balancim3*4 + " Cabos";
document.getElementById('clipes3').innerHTML = balancim3*16 + " Clipes";
document.getElementById('parafusos3').innerHTML = balancim3*12 + " Parafusos";
}

function calcularBalancim4() {
  balancim4 = document.getElementById("blc4").value;
  document.getElementById('gcorpoinex4').innerHTML = `${balancim4*2} Pares de G. Corpo`;
document.getElementById('piso4').innerHTML = `${balancim4*2} Pisos`;
document.getElementById('afastador4').innerHTML = balancim4*2 + " Afastador";
document.getElementById('guincho4').innerHTML = balancim4*2 + " Guincho";
document.getElementById('cabide4').innerHTML = balancim4*2 + " Cabide";
document.getElementById('uniao4').innerHTML = balancim4 + " União";
document.getElementById('cabos4').innerHTML = balancim4*4 + " Cabos";
document.getElementById('clipes4').innerHTML = balancim4*16 + " Clipes";
document.getElementById('parafusos4').innerHTML = balancim4*20 + " Parafusos";
}

function calcularBalancim5() {
  balancim5 = document.getElementById("blc5").value;
  document.getElementById('gcorpoinex5').innerHTML = `${balancim5} Par de G. Corpo de 2M e ${balancim5} de 3M`;
document.getElementById('piso5').innerHTML = `${balancim5} Piso de 2M e ${balancim5} Pisos de 3M`;
document.getElementById('afastador5').innerHTML = balancim5*2 + " Afastador";
document.getElementById('guincho5').innerHTML = balancim5*2 + " Guincho";
document.getElementById('cabide5').innerHTML = balancim5*2 + " Cabide";
document.getElementById('uniao5').innerHTML = balancim5 + " União";
document.getElementById('cabos5').innerHTML = balancim5*4 + " Cabos";
document.getElementById('clipes5').innerHTML = balancim5*16 + " Clipes";
document.getElementById('parafusos5').innerHTML = balancim5*20 + " Parafusos";
}

function calcularBalancim6() {
  balancim6 = document.getElementById("blc6").value;
  document.getElementById('gcorpoinex6').innerHTML = `${balancim6*2} Pares de G. Corpo`;
document.getElementById('piso6').innerHTML = `${balancim6*2} Pisos de 3M`;
document.getElementById('afastador6').innerHTML = balancim6*2 + " Afastador";
document.getElementById('guincho6').innerHTML = balancim6*2 + " Guincho";
document.getElementById('cabide6').innerHTML = balancim6*2 + " Cabide";
document.getElementById('uniao6').innerHTML = balancim6 + " União";
document.getElementById('cabos6').innerHTML = balancim6*4 + " Cabos";
document.getElementById('clipes6').innerHTML = balancim6*16 + " Clipes";
document.getElementById('parafusos6').innerHTML = balancim6*20 + " Parafusos";
}