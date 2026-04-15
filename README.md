# Teste Prático de JavaScript

Este projeto contém exercícios práticos de lógica de programação em JavaScript.

## Como executar

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado (versão 14 ou superior).

```bash
npm run iniciar
```

Para trocar a questão sendo executada, edite o final do arquivo `index.js`:

```js
// Descomente a questão que deseja rodar:
// questoes.q1()
// questoes.q2()
// questoes.q3()
// ...
```

---

## Questões

### Exemplo — Soma de dois números (já implementada)
Lê dois números do teclado e exibe a soma entre eles. Serve como referência para as demais questões.

---

### Questão 1 — Par ou Ímpar
Lê um número inteiro e informa se ele é **par** ou **ímpar**.

- Retorna: `"par"` ou `"ímpar"`

---

### Questão 2 — Maior de idade
Lê a idade do usuário e informa se é **menor** ou **maior** de idade.

- Menor de idade: abaixo de 18 anos
- Maior de idade: 18 anos ou mais
- Retorna: `"Menor de idade"` ou `"Maior de idade"`

---

### Questão 3 — Contagem até N
Lê um número **N** e imprime todos os números de **1 até N** separados por espaço.

- Exemplo: N=5 → `1 2 3 4 5`
- Retorna: a sequência como string

---

### Questão 4 — Soma acumulada
Lê números repetidamente até que o usuário digite **0**. Ao final, exibe a soma total de todos os números digitados (excluindo o 0).

- Retorna: soma total como número

---

### Questão 5 — Fatorial de N
Lê um número inteiro **N** e calcula o **fatorial** dele (N!).

- O fatorial de N é o produto de todos os inteiros de 1 até N
- Exemplo: `5! = 5 x 4 x 3 x 2 x 1 = 120`
- Considere que `0! = 1`
- Retorna: fatorial de N como número

---

### Questão 6 — Média de 3 números
Lê 3 números e calcula a **média aritmética** entre eles.

- Fórmula: `(n1 + n2 + n3) / 3`
- Retorna: média como número

---

### Questão 7 — Tabuada
Lê um número e exibe a **tabuada de multiplicação** de 1 a 10.

- Exemplo (tabuada do 3):
  ```
  3 x 1 = 3
  3 x 2 = 6
  ...
  3 x 10 = 30
  ```

---

### Questão 8 — Inverter número/string
Lê uma string ou número e exibe o valor **invertido**.

- Exemplo: `"1234"` → `"4321"`, `"hello"` → `"olleh"`
- Retorna: string invertida

---

### Questão 9 — Contar vogais
Lê uma palavra e conta quantas **vogais** ela possui (considera maiúsculas e minúsculas).

- Vogais: `a, e, i, o, u`
- Retorna: quantidade de vogais como número

---

### Questão 10 — Maior número de uma lista
Lê **5 números** e exibe qual é o **maior** entre eles.

- Retorna: o maior número
