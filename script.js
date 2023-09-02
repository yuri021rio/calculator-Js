/* O const de resultado está intrisicamente ligado ao .result do html. que nada mais é confirmar
que quer que a conta continue; o mesmo serve para o igual.  */
const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.igual');
/* Todo botão quando clicaco vai gerar uma ação, de inserir o valor no <p> */
/* Em suma, todo onClick irá ter uma função JS que representa uma ação  */
function insert ( valor ) {
  resultado.innerHTML += valor;
}

function clean () {
  resultado.innerHTML = ' ';
}

function backspace () {
   if(resultado.textContent){
     let result = document.getElementById('resultado').innerHTML
     resultado.innerHTML = result.substring(0, result.length - 1);
   }
}

function confirm() {
  if(resultado.textContent != 'Erro')
  document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
}