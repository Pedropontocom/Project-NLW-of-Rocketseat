const perguntas = [
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Selecionar elementos HTML pelo nome da classe",
        "Selecionar elementos HTML pelo nome da tag",
        "Selecionar elementos HTML pelo seletor CSS",
      ],
      correta: 2
    },
    {
      pergunta: "O que é 'NaN' em JavaScript?",
      respostas: [
        "Um número negativo",
        "Um valor que representa 'Nada'",
        "Um valor que não é um número",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        "==="
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
        "/* Este é um comentário de uma linha */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'map' em JavaScript?",
      respostas: [
        "Iterar sobre os elementos de um array e executar uma função em cada elemento",
        "Filtrar elementos de um array com base em uma condição",
        "Ordenar os elementos de um array em ordem crescente",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara o valor e o tipo dos operandos",
        "Compara apenas o valor dos operandos",
        "Compara apenas o tipo dos operandos",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável 'const' em JavaScript?",
      respostas: [
        "Uma variável que pode ser reatribuída",
        "Uma variável que não pode ser reatribuída",
        "Uma variável que é automaticamente inicializada com 'undefined'",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma 'arrow function' em JavaScript?",
      respostas: [
        "Uma função que aponta para outra função",
        "Uma função definida usando a palavra-chave 'arrow'",
        "Uma função que não precisa de parâmetros",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o operador '&&' em JavaScript?",
      respostas: [
        "Operador de concatenação de strings",
        "Operador de incremento",
        "Operador lógico 'E'",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'push' em JavaScript?",
      respostas: [
        "Remover um elemento de um array",
        "Adicionar um elemento ao final de um array",
        "Inverter a ordem dos elementos de um array",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
    //loop ou laço de repetição
    for(const item of perguntas){
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').addEventListener('change', (event) => {
      const estaCorreta = event.target.value == item.correta;
      corretas.delete(item);
      if (estaCorreta) {
          corretas.add(item);
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
  });
        
        quizItem.querySelector('dl').appendChild(dt)
      }
  
      quizItem.querySelector('dl dt').remove()
  
      // coloca a pergunta na tela
      quiz.appendChild(quizItem)
  }
  