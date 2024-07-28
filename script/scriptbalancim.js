contagem = 0;
quantia = [0,0,0,0,0,0,0];
piso2m = [0,0,0];
piso3m = [0,0,0];
function total(posicao, quantiaa){
   if (posicao == 2){
      if (quantiaa >0){
         piso2m[0] = quantiaa;
      } else if (quantia[2] != typeof number){
         piso2m[0] = 0;
      }
   } else if(posicao == 4){
      if (quantiaa >0){
      piso2m[1] = quantiaa*2;
         } else if (quantia[4] != typeof number){
         piso2m[1] = 0;
         }
   } else if(posicao == 5){
      if (quantiaa >0){
      piso2m[2] = quantiaa;
      piso3m[1] = quantiaa;
         } else if (quantia[5] != typeof number) {
         piso2m[2] = 0;
         piso3m[1] = 0;
         }
   } else if(posicao == 3){
      if (quantiaa >0){
      piso3m[0] = quantiaa;
         } else if (quantia[3] != typeof number){
         piso3m[0] = 0;
         }
   } else if(posicao == 6){
      if (quantiaa >0){
      piso3m[2] = quantiaa*2;
      } else if (quantia[6] != typeof number){
         piso3m[2] = 0;
         }
   }
   if (quantia[0] > 0){
      document.getElementById("gcorpototal0").innerHTML = `${quantia[0]} Par de G. Corpo de 1m`;
      document.getElementById("pisototal0").innerHTML = `${quantia[0]} Piso de 1m`;
      
   } else if (quantia[0] != typeof number) {
      document.getElementById("gcorpototal0").innerHTML = ``;
      document.getElementById("pisototal0").innerHTML = ``;
   }
   if (quantia[1] > 0){
      document.getElementById("gcorpototal1").innerHTML = `${quantia[1]} Par de G. Corpo de 1,5m`;
      document.getElementById("pisototal1").innerHTML = `${quantia[1]} Piso de 1,5m`;
   } else if (quantia[1] != typeof number) {
      document.getElementById("gcorpototal1").innerHTML = ``;
      document.getElementById("pisototal1").innerHTML = ``;
   }
   if ((piso2m[0]+piso2m[1]+piso2m[2]) != 0){
   document.getElementById("gcorpototal2").innerHTML = `${piso2m[0]+piso2m[1]+piso2m[2]} Par de G. Corpo de 2m`;
      document.getElementById("pisototal2").innerHTML = `${piso2m[0]+piso2m[1]+piso2m[2]} piso de 2m`;
   } else if ((piso2m[0]+piso2m[1]+piso2m[2]) == 0){
      document.getElementById("gcorpototal2").innerHTML = ``;
      document.getElementById("pisototal2").innerHTML = ``;
   }
if ((piso3m[0]+piso3m[1]+piso3m[2]) != 0){
   document.getElementById("gcorpototal3").innerHTML = `${piso3m[0]+piso3m[1]+piso3m[2]} Par de G. Corpo de 3m`;
      document.getElementById("pisototal3").innerHTML = `${piso3m[0]+piso3m[1]+piso3m[2]} piso de 3m`;
   } else if ((piso3m[0]+piso3m[1]+piso3m[2]) == 0){
      document.getElementById("gcorpototal3").innerHTML = ``;
      document.getElementById("pisototal3").innerHTML = ``;
}
   document.getElementById("afastadortotal").innerHTML = `${(quantia[0]+quantia[1]+quantia[2]+quantia[3]+quantia[4]+quantia[5]+quantia[6])*2} Afastadores`;
   document.getElementById("guinchototal").innerHTML = `${(quantia[0]+quantia[1]+quantia[2]+quantia[3]+quantia[4]+quantia[5]+quantia[6])*2} Guinchos`;
   document.getElementById("cabidetotal").innerHTML = `${(quantia[0]+quantia[1]+quantia[2]+quantia[3]+quantia[4]+quantia[5]+quantia[6])*2} Cabides`;
   document.getElementById("cabostotal").innerHTML = `${(quantia[0]+quantia[1]+quantia[2]+quantia[3]+quantia[4]+quantia[5]+quantia[6])*4} Cabos`;
   document.getElementById("clipestotal").innerHTML = `${(quantia[0]+quantia[1]+quantia[2]+quantia[3]+quantia[4]+quantia[5]+quantia[6])*12} Clipes`;

document.getElementById("parafusostotal").innerHTML = `${((quantia[0]+quantia[1]+quantia[2]+quantia[3])*12)+((quantia[4]+quantia[5]+quantia[6])*20)} Parafusos`;
   document.getElementById("uniaototal").innerHTML = `${(quantia[4]+quantia[5]+quantia[6])} União`;
}

function teste(gg, mm){
   if (document.getElementById(gg).style.display == `flex`) {
      document.getElementById(gg).style.display = `none`;
      contagem = contagem - 1;
   } else {
      document.getElementById(gg).style.display = `flex`;
      contagem = contagem + 1;
   }
         if (document.getElementById(gg).style.display == `none`){
quantia[mm] = 0;
   total(mm, quantia[mm]);
      document.getElementById(`blc${mm}`).value = ``;
         document.getElementById(`gcorpo${mm}`).innerHTML = ``
         document.getElementById(`piso${mm}`).innerHTML = ``
         document.getElementById(`afastador${mm}`).innerHTML = ``
         document.getElementById(`guincho${mm}`).innerHTML = ``
         document.getElementById(`cabide${mm}`).innerHTML = ``
         document.getElementById(`cabos${mm}`).innerHTML = ``
         document.getElementById(`clipes${mm}`).innerHTML = ``
         document.getElementById(`parafusos${mm}`).innerHTML = ``
   if(document.getElementById(`uniao${mm}`) != null){
         document.getElementById(`uniao${mm}`).innerHTML = ``
   }
         }
if (contagem < 2){
         document.getElementById("total").style.display = `none`;
      } else {
         document.getElementById("total").style.display = `flex`;
   }
 if (document.getElementById(gg).style.display == `flex`) {
      document.getElementById(mm).style.backgroundColor = `#2C593C`;
    document.getElementById(mm).style.color = `#fff`;
   } else {
      document.getElementById(mm).style.backgroundColor = `#fff`;
    document.getElementById(mm).style.color = `black`;
  }
}

function calcularBalancim(posicao, input, gcorpo, piso, afastador, guincho, cabide, cabos, clipes, parafusos, uniao) {
entInput = document.getElementById(input);
entInput.addEventListener("input", () => {
   quantia[posicao] = parseInt(document.getElementById(input).value);
   if(isNaN(quantia[posicao])){
      quantia[posicao] = 0;
   }

   
   if (posicao == 4 || posicao == 6){
      document.getElementById(gcorpo).innerHTML = `${quantia[posicao]*2} Par de G. Corpo de ${posicao/2}m`;
      document.getElementById(piso).innerHTML = `${quantia[posicao]*2} Piso de ${posicao/2}m`;
      document.getElementById(parafusos).innerHTML = `${quantia[posicao]*20} Parafusos`;
      document.getElementById(uniao).innerHTML = `${quantia[posicao]} União`;
   } else if (posicao == 5) {
      document.getElementById(gcorpo).innerHTML = `${quantia[posicao]} Par de G. Corpo de 2m e ${quantia[posicao]} de 3m`;
      document.getElementById(piso).innerHTML = `${quantia[posicao]} Piso de 2m e ${quantia[posicao]} de 3m`;
      document.getElementById(parafusos).innerHTML = `${quantia[posicao]*20} Parafusos`;
      document.getElementById(uniao).innerHTML = `${quantia[posicao]} União`;
   } else if (posicao == 0){
      document.getElementById(gcorpo).innerHTML = `${quantia[posicao]} Par de G. Corpo de 1m`;
      document.getElementById(piso).innerHTML = `${quantia[posicao]} Piso de 1m`;
      document.getElementById(parafusos).innerHTML = `${quantia[posicao]*12} Parafusos`;
      }
   else if (posicao == 1){
      document.getElementById(gcorpo).innerHTML = `${quantia[posicao]} Par de G. Corpo de 1,5m`;
      document.getElementById(piso).innerHTML = `${quantia[posicao]} Piso de 1,5m`;
      document.getElementById(parafusos).innerHTML = `${quantia[posicao]*12} Parafusos`;
      } else {
      document.getElementById(gcorpo).innerHTML = `${quantia[posicao]} Par de G. Corpo de ${posicao}m`;
      document.getElementById(piso).innerHTML = `${quantia[posicao]} Piso de ${posicao}m`;
      document.getElementById(parafusos).innerHTML = `${quantia[posicao]*12} Parafusos`;
      }

document.getElementById(afastador).innerHTML = `${quantia[posicao]*2} Afastador`;
document.getElementById(guincho).innerHTML = `${quantia[posicao]*2} Guincho`;
document.getElementById(cabide).innerHTML = `${quantia[posicao]*2} Cabide`;
document.getElementById(cabos).innerHTML = `${quantia[posicao]*4} Cabos`;
document.getElementById(clipes).innerHTML = `${quantia[posicao]*12} Clipes`;
 
total(posicao, quantia[posicao]);
})
}