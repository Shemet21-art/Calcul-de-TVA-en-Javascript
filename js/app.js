let listInputs = document.querySelectorAll('input[name=appliqueTauxTVA]');
let inputTva = document.querySelector('input[name=tauxTVA]');

let mhtValue = document.getElementById('montantHT');
let tvaValue = document.getElementById('montantTVA');
let ttcValue = document.getElementById('montantTTC');


let currentTva  = 20/100;

let mhtValueCurent ;
let tvaValueCurent ;
let ttcValueCurent ;



console.log(inputTva)

 


listInputs.forEach(inp => {
 inp.addEventListener('click', function(){
    currentTva = inp.value; 
    inputTva.value = currentTva
    console.log(currentTva)
 })
    
});

inputTva.addEventListener("blur", function(){
    currentTva = inputTva.value

 });

 mhtValue.addEventListener("blur", function(){
    mhtValueCurent = parseFloat(mhtValue.value.replace("€", ""))
    tvaValueCurent = mhtValueCurent * currentTva ;
    tvaValue.value = tvaValueCurent;
    ttcValueCurent = tvaValueCurent + mhtValueCurent;
    ttcValue.value = ttcValueCurent
 });

 tvaValue.addEventListener("blur", function(){
    tvaValueCurent = parseFloat(tvaValue.value.replace("€", ""));
    mhtValueCurent = tvaValueCurent/currentTva;
    mhtValue.value = mhtValueCurent;
    ttcValueCurent = mhtValueCurent + tvaValueCurent;
    ttcValue.value = ttcValueCurent;
 });

 ttcValue.addEventListener("blur", function(){
    ttcValueCurent = parseFloat(ttcValue.value.replace("€", ""));
    mhtValueCurent = ttcValueCurent/(1+currentTva);
    mhtValue.value = mhtValueCurent;
    tvaValueCurent = ttcValueCurent - mhtValueCurent;
    tvaValue.value = tvaValueCurent;
 })

 function calculator (){

 }