// Função para escalar um jogador
function escalarJogador() {
  const posicaoInput = document.getElementById('posicao');
  const nomeInput = document.getElementById('nome');
  const numeroInput = document.getElementById('numero');
  const confirmar = confirm(`Deseja confirmar a escalação de ${nomeInput.value}?`);

  if (confirmar) {
    const jogador = `${posicaoInput.value} - ${nomeInput.value} (${numeroInput.value})`;
    const listaJogadores = document.getElementById('listaJogadores');
    const novoItem = document.createElement('li');
    novoItem.textContent = jogador;
    listaJogadores.appendChild(novoItem);

    posicaoInput.value = '';
    nomeInput.value = '';
    numeroInput.value = '';
  }
}

// Função para remover um jogador
function removerJogador() {
  const numeroInput = document.getElementById('numeroRemover');
  const confirmar = confirm(`Deseja confirmar a remoção do jogador com número ${numeroInput.value}?`);

  if (confirmar) {
    const listaJogadores = document.getElementById('listaJogadores');
    const itens = listaJogadores.getElementsByTagName('li');

    for (let i = 0; i < itens.length; i++) {
      const jogador = itens[i].textContent;
      if (jogador.includes(numeroInput.value)) {
        listaJogadores.removeChild(itens[i]);
        break;
      }
    }

    numeroInput.value = '';
  }
}