// Classe do Jogo
class TicTacToe {
  constructor(player1, player2) {
    // Array para representar o tabuleiro
    this.board = ["", "", "", "", "", "", "", "", ""];
    
    // Jogador atual
    this.currentPlayer = player1;
    
    // Jogadores
    this.players = [player1, player2];
    
    // Variável para indicar se o jogo acabou
    this.gameOver = false;
    
    // Combinações vencedoras
    this.winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    // Elemento de texto para indicar a vez do jogador
    this.turnElement = document.getElementById("turn");
    
    // Elemento de texto para exibir o resultado do jogo
    this.resultElement = document.getElementById("result");
    
    // Seleciona todas as células do tabuleiro
    this.cells = document.querySelectorAll(".cell");
    
    // Atualiza a vez do jogador e adiciona um evento de clique para cada célula do tabuleiro
    this.updateTurn();
    this.cells.forEach((cell, index) => {
      cell.addEventListener("click", () => this.makeMove(index));
    });
  }

  // Realiza uma jogada em uma determinada célula
  makeMove(index) {
    // Verifica se o jogo já acabou ou se a célula já está preenchida
    if (this.gameOver || this.board[index] !== "") {
      return;
    }

    // Atualiza o tabuleiro e exibe a jogada na célula
    this.board[index] = this.currentPlayer.marker;
    this.cells[index].innerText = this.currentPlayer.marker;

    // Verifica se houve vitória ou empate
    if (this.checkWin()) {
      this.endGame();
    } else if (this.checkDraw()) {
      this.endGame(true);
    } else {
      // Passa a vez para o próximo jogador
      this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
      this.updateTurn();
    }
  }

  // Atualiza o elemento de texto para indicar a vez do jogador atual
  updateTurn() {
    this.turnElement.innerText = `Vez de ${this.currentPlayer.name}`;
  }

  // Verifica se houve uma combinação vencedora no tabuleiro
  checkWin() {
    for (let combination of this.winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.board[a] !== "" &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        // Destaca as células da combinação vencedora
        this.highlightCells([a, b, c]);
        return true;
      }
    }
    return false;
  }

  // Verifica se houve um empate
  checkDraw() {
    return this.board.every(cell => cell !== "");
  }

  // Destaca as células da combinação vencedora
  highlightCells(cells) {
    for (let cell of cells) {
      this.cells[cell].classList.add("highlight");
    }
  }

  // Finaliza o jogo, exibindo o resultado
  endGame(draw = false) {
    this.gameOver = true;
    if (draw) {
      this.resultElement.innerText = "Empate!";
    } else {
      this.resultElement.innerText = `Vitória de ${this.currentPlayer.name}!`;
      // Destaca as células da combinação vencedora
      this.highlightCells(
        this.winningCombinations.find(combination => {
          const [a, b, c] = combination;
          return (
            this.board[a] !== "" &&
            this.board[a] === this.board[b] &&
            this.board[a] === this.board[c]
          );
        })
      );
    }
  }

  // Reinicia o jogo, restaurando os valores iniciais
  restartGame() {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.currentPlayer = this.players[0];
    this.gameOver = false;
    this.resultElement.innerText = "";
    this.cells.forEach(cell => {
      cell.innerText = "";
      cell.classList.remove("highlight");
    });
    this.updateTurn();
  }
}

// Classe do Jogador
class Player {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
  }
}

// Criação do jogo quando o conteúdo HTML estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  const player1Input = document.getElementById("player1");
  const player2Input = document.getElementById("player2");
  const restartBtn = document.getElementById("restartBtn");

  restartBtn.addEventListener("click", () => {
    game.restartGame();
  });

  // Criação dos jogadores e início do jogo
  const player1 = new Player("Jogador 1", "X");
  const player2 = new Player("Jogador 2", "O");
  const game = new TicTacToe(player1, player2);
});
