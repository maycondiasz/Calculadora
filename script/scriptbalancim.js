contagem = 0;
fff = [0,0];
function total(posicao, quantiaa){
   ddd = parseInt(quantiaa)
   if (posicao == 2 || posicao == 5 && quantiaa > 0){
      fff[0] = fff[0] + quantiaa;
   }
   if(posicao == 0 && quantiaa > 0){
      document.getElementById("gcorpototal0").innerHTML = `${quantiaa} Par de G. corpo de 1m`; 
   } else if(posicao == 1 && quantiaa > 0){
      document.getElementById("gcorpototal1").innerHTML = `${quantiaa} Par de G. corpo de 1,5m`; 
   }
}

function teste(gg, mm){
   if (document.getElementById(gg).style.display == `flex`) {
      document.getElementById(gg).style.display = `none`;
      contagem = contagem - 1;
   } else {
      document.getElementById(gg).style.display = `flex`;
      contagem = contagem + 1;
   }
         if (document.getElementById(gg).style.display == `flex`){
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
if (contagem < 8){
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
quantia = parseInt(document.getElementById(input).value);
   
   if (posicao == 4 || posicao == 6){
      document.getElementById(gcorpo).innerHTML = `${quantia*2} Par de G. Corpo de ${posicao/2}m`;
      document.getElementById(piso).innerHTML = `${quantia*2} Piso de ${posicao/2}m`;
      document.getElementById(parafusos).innerHTML = `${quantia*20} Parafusos`;
      document.getElementById(uniao).innerHTML = `${quantia} União`;
   } else if (posicao == 5) {
      document.getElementById(gcorpo).innerHTML = `${quantia} Par de G. Corpo de 2m e ${quantia} de 3m`;
      document.getElementById(piso).innerHTML = `${quantia} Piso de 2m e ${quantia} de 3m`;
      document.getElementById(parafusos).innerHTML = `${quantia*20} Parafusos`;
      document.getElementById(uniao).innerHTML = `${quantia} União`;
   } else if (posicao == 0){
      document.getElementById(gcorpo).innerHTML = `${quantia} Par de G. Corpo de 1m`;
      document.getElementById(piso).innerHTML = `${quantia} Piso de 1m`;
      document.getElementById(parafusos).innerHTML = `${quantia*12} Parafusos`;
      }
   else if (posicao == 1){
      document.getElementById(gcorpo).innerHTML = `${quantia} Par de G. Corpo de 1,5m`;
      document.getElementById(piso).innerHTML = `${quantia} Piso de 1,5m`;
      document.getElementById(parafusos).innerHTML = `${quantia*12} Parafusos`;
      } else {
      document.getElementById(gcorpo).innerHTML = `${quantia} Par de G. Corpo de ${posicao}m`;
      document.getElementById(piso).innerHTML = `${quantia} Piso de ${posicao}m`;
      document.getElementById(parafusos).innerHTML = `${quantia*12} Parafusos`;
      }

document.getElementById(afastador).innerHTML = `${quantia*2} Afastador`;
document.getElementById(guincho).innerHTML = `${quantia*2} Guincho`;
document.getElementById(cabide).innerHTML = `${quantia*2} Cabide`;
document.getElementById(cabos).innerHTML = `${quantia*4} Cabos`;
document.getElementById(clipes).innerHTML = `${quantia*12} Clipes`;

total(posicao, quantia);
})
}