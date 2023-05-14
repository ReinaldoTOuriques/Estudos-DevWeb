// Função que, por meio das estruturas condicionais de IF e ELSE, compara os dados obtidos através dos inputs do usuário para verificar qual é o piloto com o carro mais rápido e mostra uma mensagem contendo o nome e o modelo do piloto que ganhou.
function speedTest() {
  // Obtém os valores digitados pelo usuário.
  const firstPilotName = document.getElementById('firstPilotsNameInput').value;
  const firstPilotCarModelName = document.getElementById('firstPilotsCarModelNameInput').value;
  const firstPilotCarTopSpeed = document.getElementById('firstPilotsCarTopSpeedInput').value;

  const secondPilotName = document.getElementById('secondPilotsNameInput').value;
  const secondPilotCarModelName = document.getElementById('secondPilotsCarModelNameInput').value;
  const secondPilotCarTopSpeed = document.getElementById('secondPilotsCarTopSpeedInput').value;

  // Verifica qual piloto tem o carro mais rápido.
  if (firstPilotCarTopSpeed > secondPilotCarTopSpeed) {
    alert(`${firstPilotName} with the ${firstPilotCarModelName} is the fastest pilot.`);
  } else if (secondPilotCarTopSpeed > firstPilotCarTopSpeed) {
    alert(`${secondPilotName} with the ${secondPilotCarModelName} is the fastest pilot.`);
  } else {
    alert("Both pilots have the same car top speed.");
  }
}

/* Explicação: Essa função começa obtendo os valores dos inputs do usuário e, em seguida, utiliza uma estrutura condicional para verificar qual piloto tem o carro mais rápido. Se o carro do primeiro piloto tiver uma velocidade maior do que o carro do segundo piloto, uma mensagem será exibida na tela indicando que o primeiro piloto é o mais rápido. O mesmo acontece se o segundo piloto tiver o carro mais rápido. Se ambos os carros tiverem a mesma velocidade máxima, uma mensagem indicando isso será exibida. */