const readline = require("readline");

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

    return resposta;
  },

  q1: async function () {
    const numero = Number(await lerTeclado("Digite um número"));

    const resposta =
      numero % 2 === 0
        ? "O número digitado é par"
        : "O número digitado é ímpar";

    console.log(resposta);

    return resposta;
  },

  q2: async function () {
    const idade = Number(await lerTeclado("Digite sua idade"));

    const resposta =
      idade < 18 ? "O usuário é menor de idade" : "O usuário é maior de idade";

    console.log(resposta);

    return resposta;
  },

  q3: async function () {
    const n = Number(await lerTeclado("Digite o número N"));

    const resultado = [];

    for (let i = 1; i <= n; i++) {
      resultado.push(i);
    }

    const resposta = resultado.join(" ");

    console.log(resposta);

    return resposta;
  },

  q4: async function () {
    let soma = 0;

    while (true) {
      const numero = Number(
        await lerTeclado("Digite um número (0 para encerrar)"),
      );

      if (numero === 0) break;

      soma += numero;
    }

    console.log("Soma total:", soma);

    return soma;
  },

  q5: async function () {
    const n = Number(await lerTeclado("Digite o número N"));

    function fatorial(numero) {
      if (numero === 0 || numero === 1) return 1;

      return numero * fatorial(numero - 1);
    }

    const resposta = fatorial(n);

    console.log(resposta);

    return resposta;
  },

  q6: async function () {
    const n1 = Number(await lerTeclado("Digite o 1º número"));

    const n2 = Number(await lerTeclado("Digite o 2º número"));

    const n3 = Number(await lerTeclado("Digite o 3º número"));

    const resposta = (n1 + n2 + n3) / 3;

    console.log("Média:", resposta);

    return resposta;
  },

  q7: async function () {
    const numero = Number(await lerTeclado("Digite um número"));

    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;

      const linha = `${numero} x ${i} = ${resultado}`;

      console.log(linha);
    }
  },

  q8: async function () {
    const valor = await lerTeclado("Digite um valor");

    const resposta = String(valor).split("").reverse().join("");

    console.log("Original: ", valor);

    console.log("Invertido:", resposta);

    return resposta;
  },

  q9: async function () {
    const palavra = await lerTeclado("Digite uma palavra");

    const vogais = "aeiouAEIOU";

    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
      if (vogais.includes(palavra[i])) contador++;
    }

    console.log("Quantidade de vogais:", contador);

    return contador;
  },

  q10: async function () {
    const numeros = [];

    for (let i = 1; i <= 5; i++) {
      const digitado = await lerTeclado(`Digite o ${i}º número`);

      const num = Number(digitado);

      numeros.push(num);
    }

    const maior = Math.max(...numeros);

    console.log("Maior número:", maior);

    return maior;
  },
};

questoes.exemplo();
