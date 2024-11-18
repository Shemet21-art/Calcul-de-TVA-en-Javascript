let listInputs = document.querySelectorAll('input[name=appliqueTauxTVA]');
let inputTva = document.querySelector('input[name=tauxTVA]');

let mhtValue = document.getElementById('montantHT');
let tvaValue = document.getElementById('montantTVA');
let ttcValue = document.getElementById('montantTTC');


let currentTva  = 20;

let mhtValueCurent ;
let tvaValueCurent ;
let ttcValueCurent ;



 

   listInputs.forEach(inp => {
      inp.addEventListener('click', function(){
         currentTva = parseFloat(inp.value.replace("%","")); 
         inputTva.value = currentTva;
         tvaValueCurent = mhtValueCurent * (currentTva/100) ;
        tvaValue.value = tvaValueCurent;
        ttcValueCurent = tvaValueCurent + mhtValueCurent;
        ttcValue.value = ttcValueCurent;
      })        
     });


   inputTva.addEventListener("blur", function(){
      currentTva = inputTva.value
      tvaValueCurent = mhtValueCurent * (currentTva/100) ;
      tvaValue.value = tvaValueCurent;
      ttcValueCurent = tvaValueCurent + mhtValueCurent;
      ttcValue.value = ttcValueCurent;
   });

  
  
   mhtValue.addEventListener("blur", function(){
      mhtValueCurent = parseFloat(mhtValue.value.replace("€", ""))
      tvaValueCurent = mhtValueCurent * (currentTva/100) ;
      tvaValue.value = tvaValueCurent;
      ttcValueCurent = tvaValueCurent + mhtValueCurent;
      ttcValue.value = ttcValueCurent;
   });
  
   tvaValue.addEventListener("blur", function(){
      tvaValueCurent = parseFloat(tvaValue.value.replace("€", ""));
      mhtValueCurent = tvaValueCurent/(currentTva/100);
      mhtValue.value = mhtValueCurent;
      ttcValueCurent = mhtValueCurent + tvaValueCurent;
      ttcValue.value = ttcValueCurent;
   });
  
   ttcValue.addEventListener("blur", function(){
      ttcValueCurent = parseFloat(ttcValue.value.replace("€", ""));
      mhtValueCurent = ttcValueCurent/(1+(currentTva/100));
      mhtValue.value = mhtValueCurent;
      tvaValueCurent = ttcValueCurent - mhtValueCurent;
      tvaValue.value = tvaValueCurent;
   })

 



