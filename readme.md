# Jogo da Forca: Refatoração com Padrões de Projeto

## Grupo
- **Felippe Negrão** - 2372517
- **Pedro Andreis**  - 2372649
- **Roberto Goz**    - 2372665

## Descrição
O projeto consiste em um jogo da forca desenvolvido em JavaScript, refatorado para utilizar padrões de projeto que melhoram a organização, a reutilização e a manutenção do código.

## Fonte do Código
O código original foi modificado para aplicar boas práticas de design e facilitar a escalabilidade. A lógica principal foi reorganizada para separar as responsabilidades de verificação de letras e atualização da interface. o código modificado pode ser encontrado nesse repositorio com o nome `scripts.js`, já o código original é encontrado no repositorio [jogo-da forca](https://github.com/AndressaDaCosta/jogo-da-forca)

## Padrões de Projeto Utilizados

### 1. Strategy
- **Objetivo:** Permitir a troca flexível das estratégias de verificação das letras sem modificar a estrutura principal do código.
- **Implementação:**
    - Criada a interface `VerificationStrategy`, que define o método `verify()`.
    - Duas estratégias concretas foram implementadas:
        - `BasicVerification`: verifica a presença da letra de forma sensível a maiúsculas/minúsculas.
        - `CaseInsensitiveVerification`: faz a verificação ignorando diferenças de maiúsculas/minúsculas.
    - A classe `HangmanGame` permite definir qual estratégia de verificação será utilizada.

### 2. Observer
- **Objetivo:** Atualizar automaticamente a interface do usuário sempre que o estado do jogo mudar.
- **Implementação:**
    - Criada a interface `Observer`, que define o método `update()`.
    - Implementada a classe `UIObserver` para atualizar a interface do jogo, exibindo a palavra mascarada e o número de tentativas restantes.
    - A classe `HangmanGame` notifica os observadores sempre que o estado do jogo é alterado.

## Conclusão
A aplicação dos padrões **Strategy** e **Observer** torna o código mais modular, reutilizável e fácil de manter. Isso facilita futuras extensões, como adicionar novas estratégias de verificação ou novos componentes de interface sem alterar a estrutura principal do `HangmanGame`.

