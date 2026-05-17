// 🗄️ Objeto de dados contendo todos os passos da caça ao tesouro
const passos = {
    0: {
        texto: "Enquanto explorava o porão de um museu no Cairo, encontrei um fragmento de papiro escondido dentro de uma estátua quebrada. O texto falava de uma tumba jamais catalogada, repleta de relíquias de um 'Faraó das Estrelas'. Decidi que não poderia deixar esse mistério para trás e comecei minha busca.",
        imagem: "passo_0.png",
        escolhas: [
            { texto: "Iniciar Jornada", proximoPasso: 1 }
        ]
    },
    1: {
        texto: "Sua jornada começa nas Grandes Pirâmides de Gizé. Segundo o papiro, a primeira pista está gravada em uma pedra solta na base da Esfinge, visível apenas sob a luz da lua cheia.",
        imagem: "passo_1.png",
        escolhas: [
            { texto: "Investigar a pista e ir para Luxor", proximoPasso: 2 }
        ]
    },
    2: {
        texto: "A pista da Esfinge leva você até o Templo de Karnak, em Luxor. Entre as centenas de colunas, o papiro indica que a entrada para a próxima etapa está escondida em um hieróglifo específico. Por onde você vai investigar?",
        imagem: "passo_2.png",
        escolhas: [
            { texto: "Procurar o hieróglifo no topo do Obelisco", proximoPasso: 3 },
            { texto: "Desistir e voltar para casa", proximoPasso: 4 }
        ]
    },
    3: {
        texto: "No topo do obelisco de Hatshepsut, você encontra uma inscrição que, quando iluminada pelo sol, projeta uma sombra indicando a localização de um mapa de couro no Vale dos Reis.",
        imagem: "passo_3.png",
        escolhas: [
            { texto: "Seguir o mapa até o Vale dos Reis", proximoPasso: 5 }
        ]
    },
    4: {
        texto: "Você sentiu medo da maldição e pegou o primeiro voo de volta para casa. A aventura terminou mais cedo para você.",
        imagem: "passo_4.png",
        escolhas: [
            { texto: "Recomeçar do Início", proximoPasso: 0 }
        ]
    },
    5: {
        texto: "No Vale dos Reis, decifrando o mapa de couro, você descobre pistas que apontam que a localização exata da tumba secreta está mais ao sul, na região do Rio Nilo em Aswan.",
        imagem: "passo_5.png",
        escolhas: [
            { texto: "Explorar tumbas ao redor antes", proximoPasso: 6 },
            { texto: "Seguir direto para o Rio Nilo em Aswan", proximoPasso: 7 }
        ]
    },
    6: {
        texto: "Ao explorar as tumbas menores ao redor do Vale, você entra em uma câmara escondida que parecia promissora, mas ela se revela uma armadilha para ladrões e termina em um beco sem saída.",
        imagem: "passo_6.png",
        escolhas: [
            { texto: "Retornar e seguir a rota do mapa", proximoPasso: 8 }
        ]
    },
    7: {
        texto: "Com o mapa de couro em mãos, você navega pelo Nilo em uma embarcação tradicional (felucca). Ao chegar perto de Aswan, o rio se divide em uma bifurcação perigosa entre rochas altas.",
        imagem: "passo_7.png",
        escolhas: [
            { texto: "Seguir pelo rio à esquerda", proximoPasso: 9 },
            { texto: "Seguir pelo rio à direita", proximoPasso: 11 }
        ]
    },
    8: {
        texto: "De volta ao caminho principal após o beco sem saída, você analisa as coordenadas novamente. Suas buscas confirmam que o próximo destino é mesmo o Rio Nilo.",
        imagem: "passo_8.png",
        escolhas: [
            { texto: "Viajar para o Rio Nilo", proximoPasso: 7 }
        ]
    },
    9: {
        texto: "O rio à esquerda leva você a uma ilha isolada com ruínas submersas. Ao mergulhar, você encontra inscrições antigas que brilham sob a água e revelam o mecanismo de entrada da tumba oculta.",
        imagem: "passo_9.png",
        escolhas: [
            { texto: "Ativar o mecanismo", proximoPasso: 12 }
        ]
    },
    11: {
        texto: "O rio à direita leva a uma forte correnteza que joga seu barco contra as rochas, impedindo a passagem. Você precisa retornar.",
        imagem: "passo_11.png",
        escolhas: [
            { texto: "Retornar e escolher o rio à esquerda", proximoPasso: 12 }
        ]
    },
    12: {
        texto: "Ao acionar as inscrições corretas, a água ao redor recua de forma mágica, revelando uma imensa escadaria dourada que leva à entrada da Cidade de Ouro do faraó esquecido!",
        imagem: "passo_12.png",
        escolhas: [
            { texto: "✨ Explorar a Tumba e o Tesouro", proximoPasso: 0 } // Reinicia o loop ao clicar no botão final
        ]
    }
};

// 🧭 Função que renderiza o estado atual do jogo na tela
function iniciarPasso(idPasso) {
    const passoAtual = passos[idPasso];

    // Atualiza elementos de texto e imagem do DOM
    document.getElementById("texto-historia").innerText = passoAtual.texto;
    document.getElementById("imagem-passo").src = passoAtual.imagem;

    // Seleciona e limpa a área de botões
    const containerBotoes = document.getElementById("botoes-escolha");
    containerBotoes.innerHTML = "";

    // Cria novos botões dinamicamente com base nas escolhas do passo
    passoAtual.escolhas.forEach(escolha => {
        const botao = document.createElement("button");
        botao.innerText = escolha.texto;
        botao.addEventListener("click", () => iniciarPasso(escolha.proximoPasso));
        containerBotoes.appendChild(botao);
    });
}

// 🚀 Inicialização automática do jogo no Passo 0 ao carregar a página
window.onload = () => {
    iniciarPasso(0);
};