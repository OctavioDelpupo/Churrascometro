// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");

const resultado = document.getElementById("resultado")

function carnePP(duracao) {
  
  if(duracao >= 6) {
    return 650;
  }else{
    return 400;
  }
}

function cervejaPP(duracao) {
  
  if(duracao >= 6) {
    return 2000;
  }else{
    return 1200;
  }
}

function bebidasPP(duracao) {
  
  if(duracao >= 6) {
    return 1500;
  }else{
    return 1000;
  }
}

function calcular() {
  const adultos = inputAdultos.value;
  const criancas = inputCriancas.value;
  const duracao = inputDuracao.value;

  const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  const qdtTotalCerveja = cervejaPP(duracao) * adultos;
  const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  //coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mais de um innerHTML
  resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`
 
  resultado.innerHTML += `     
      <p>🥩 ${qdtTotalCarne/1000} Kg de Carne</p>   
  `
  resultado.innerHTML += `      
      <p>🍹 ${Math.ceil(qdtTotalCerveja/355)} latas de Cerveja</p>
  `
  resultado.innerHTML += `   
      <p> 🍺 ${Math.ceil(qdtTotalBebidas/2000)} garrafas de Bebidas</p>
  `
}

