// Strategy Pattern - Para diferentes estratégias de verificação da palavra
class VerificationStrategy {
  verify(word, guess) {
    throw new Error('Método verify deve ser implementado');
  }
}

class BasicVerification extends VerificationStrategy {
  verify(word, guess) {
    return word.includes(guess);
  }
}

class CaseInsensitiveVerification extends VerificationStrategy {
  verify(word, guess) {
    return word.toLowerCase().includes(guess.toLowerCase());
  }
}

// Observer Pattern - Para atualizar a interface com base no estado do jogo
class Observer {
  update(gameState) {
    throw new Error('Método update deve ser implementado');
  }
}

class UIObserver extends Observer {
  update(gameState) {
    document.getElementById('word').innerText = gameState.maskedWord;
    document.getElementById('attempts').innerText = `Tentativas restantes: ${gameState.attemptsLeft}`;
  }
}

// Jogo da Forca
class HangmanGame {
  constructor(word, strategy) {
    this.word = word;
    this.strategy = strategy;
    this.observers = [];
    this.maskedWord = '_'.repeat(word.length);
    this.attemptsLeft = 6;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this));
  }

  guess(letter) {
    if (this.strategy.verify(this.word, letter)) {
      this.revealLetter(letter);
    } else {
      this.attemptsLeft--;
    }
    this.notifyObservers();
  }

  revealLetter(letter) {
    let newMasked = '';
    for (let i = 0; i < this.word.length; i++) {
      newMasked += this.word[i] === letter ? letter : this.maskedWord[i];
    }
    this.maskedWord = newMasked;
  }
}

// Inicialização do jogo
document.addEventListener('DOMContentLoaded', () => {
  const game = new HangmanGame('javascript', new CaseInsensitiveVerification());
  const uiObserver = new UIObserver();

  game.addObserver(uiObserver);
  game.notifyObservers();

  document.getElementById('guess-btn').addEventListener('click', () => {
    const guessInput = document.getElementById('guess-input');
    const guess = guessInput.value;
    guessInput.value = '';
    game.guess(guess);
  });
});
