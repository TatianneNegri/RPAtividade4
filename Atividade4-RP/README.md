# Atividade 4: Refatoração com Padrões de Projeto

Grupo:
Júlia Cardozo Cavalcante - 2372584
Eduardo Viega - 2386380

## Descrição
O projeto escolhido para a atividade consiste em um parser de arquivos em Java, ele foi refatorado para utilizar padrões de projeto que melhoram a organização, a reutilização e a manutenção do código.


## Fonte do código
O projeto escolhido foi clonado do github: https://github.com/yegor256/quiz. Foi criado oum package com o arquivo originaal e um pckage para o código refatorado.

## Padrões de Projeto Utilizados

### 1. Singleton
- **Objetivo:** Garantir que apenas uma instância da classe `original.Parser` seja utilizada ao longo da execução do programa, evitando múltiplas instâncias desnecessárias.
- **Implementação:**
    - O construtor da classe `original.Parser` foi tornado privado.
    - Criado um método `getInstance()` que retorna sempre a mesma instância da classe.
    - Isso garante um único ponto de acesso ao objeto `original.Parser`.

### 2. Strategy
- **Objetivo:** Permitir a troca flexível das estratégias de leitura do arquivo sem modificar a estrutura principal do código.
- **Implementação:**
    - Criada a interface `ReadStrategy`, que define o método `read(File file)`.
    - Duas estratégias concretas foram implementadas:
        - `FullReadStrategy`: lê o conteúdo completo do arquivo.
        - `NonUnicodeReadStrategy`: lê apenas caracteres ASCII (excluindo Unicode).
    - A classe `original.Parser` permite definir qual estratégia de leitura será utilizada.

## Conclusão
A aplicação dos padrões **Singleton** e **Strategy** torna o código mais modular, reutilizável e fácil de manter. Isso facilita futuras extensões, como adicionar novas estratégias de leitura sem modificar a estrutura principal do `original.Parser`.
