const readline = require("readline");

/**
 *
 * @param {string} pergunta
 * @description
 *  Não se esqueça de usar "await" antes da função.
 *  Em caso de duvidas, olhe questao exemplo
 * @returns input do teclado
 */
async function lerTeclado(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pergunta + ": ", (resposta) => {
      rl.close();
      resolve(resposta);
    });
  });
}

const questoes = {
  exemplo: async function () {
    let numeroPrimeiro = await lerTeclado("Digite um número");

    let numeroSegundo = await lerTeclado("Digite outro número");

    console.warn(
      "Note que o tipo retornado é sempre string",
      numeroPrimeiro,
      typeof numeroPrimeiro,
    );

    const inteiroPrimeiro = Number(numeroPrimeiro);
    const inteiroSegundo = Number(numeroSegundo);

    const resposta = inteiroPrimeiro + inteiroSegundo;
    console.log("O resultado é:", resposta);

    // Não se esqueça de retornar a resposta
    return resposta;
  },

  /**
   * Questão 1 - Par ou Ímpar
   * @description Lê um número inteiro do usuário e informa se é par ou ímpar.
   * Um número é par se o resto da divisão por 2 for 0; caso contrário, é ímpar.
   * @returns {string} "par" ou "ímpar"
   */
  q1: async function () {},

  /**
   * Questão 2 - Maior de idade
   * @description Lê a idade do usuário e informa se é menor ou maior de idade.
   * Menor de idade: abaixo de 18 anos.
   * Maior de idade: 18 anos ou mais.
   * @returns {string} "Menor de idade" ou "Maior de idade"
   */
  q2: async function () {},

  /**
   * Questão 3 - Contagem até N
   * @description Lê um número N e imprime todos os números de 1 até N separados por espaço.
   * Exemplo: N=5 → "1 2 3 4 5"
   * @returns {string} sequência de números de 1 a N
   */
  q3: async function () {},

  /**
   * Questão 4 - Soma acumulada
   * @description Lê números do usuário repetidamente até que seja digitado "0".
   * Ao final, exibe a soma total de todos os números digitados (excluindo o 0).
   * @returns {number} soma total dos números digitados
   */
  q4: async function () {},

  /**
   * Questão 5 - Fatorial de N
   * @description Lê um número inteiro N do usuário e calcula o fatorial dele.
   * O fatorial de N (escrito N!) é o produto de todos os inteiros de 1 até N.
   * Exemplo: 5! = 5 x 4 x 3 x 2 x 1 = 120
   * Considere que 0! = 1.
   * @returns {number} fatorial de N
   */
  q5: async function () {},

  /**
   * Questão 6 - Média de 3 números
   * @description Lê 3 números do usuário e calcula a média aritmética entre eles.
   * Fórmula: (n1 + n2 + n3) / 3
   * @returns {number} média dos três números
   */
  q6: async function () {},

  /**
   * Questão 7 - Tabuada
   * @description Lê um número e exibe a tabuada de multiplicação dele de 1 a 10.
   * Exemplo: tabuada do 3 → "
   *  3 x 1 = 3
   *  3 x 2 = 6
   * ...
   * @returns {void}
   */
  q7: async function () {},

  /**
   * Questão 8 - Inverter número (string)
   * @description Lê uma string ou número do usuário e exibe ele invertido.
   * A inversão é feita tratando o valor como string e revertendo os caracteres.
   * Exemplo: "1234" → "4321", "hello" → "olleh"
   * @returns {string} valor invertido
   */
  q8: async function () {},

  /**
   * Questão 9 - Contar vogais
   * @description Lê uma palavra do usuário e conta quantas vogais ela possui.
   * Considera as vogais: a, e, i, o, u (maiúsculas e minúsculas).
   * @returns {number} quantidade de vogais encontradas
   */
  q9: async function () {},

  /**
   * Questão 10 - Maior número de uma lista
   * @description Lê 5 números do usuário e exibe qual é o maior entre eles.
   * @returns {number} o maior número digitado
   */
  q10: async function () {},
};

// Para executar:
questoes.exemplo();
// questoes.q1()

export default questoes;
