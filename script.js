const buttonCalcular = document.getElementById('buttonCalcular');

buttonCalcular.addEventListener('click', () => {  

  let custoDeAlcool = document.getElementById('custoDeAlcool').value.replace(',','.');
  let custoDeGasolina = document.getElementById('custoDeGasolina').value.replace(',','.');

  custoDeAlcool = parseFloat(custoDeAlcool).toFixed(2);
  custoDeGasolina = parseFloat(custoDeGasolina).toFixed(2);  
  let mostrarResultado = document.getElementById('resultado');


  const resultado = (custoDeAlcool / custoDeGasolina).toFixed(2);

  if (isNaN(resultado) || custoDeAlcool < 0 || custoDeGasolina < 0)  {
    mostrarResultado.value = "Use valores acima de zero!!";
  } else if (resultado > 0.7) {
    mostrarResultado.value =  'Gasolina!';
  } else if (resultado < 0.7) {
    mostrarResultado.value =  'Álcool!';
  } else {
    mostrarResultado.value = 'Use qualquer um :)';
  }

  console.log(`O resultado é: ${resultado}`);  
});

const buttonLimpar = document.getElementById('buttonLimpar');

buttonLimpar.addEventListener('click', () => {
  let custoDeAlcoolEmpty = document.getElementById('custoDeAlcool');
  let custoDeGasolinaEmpty = document.getElementById('custoDeGasolina');
  let mostrarResultadoEmpty = document.getElementById('resultado');

  custoDeAlcoolEmpty.value = "";
  custoDeGasolinaEmpty.value = "";
  mostrarResultadoEmpty.value = "";
})