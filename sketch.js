let tela = "inicio";
let telaAnterior = null;

let perguntas = [
  {
    pergunta: "1. Onde geralmente há mais barulho?",
    opcoes: ["Campo", "Cidade", "Fazenda", "Sítio"],
    correta: 1
  },
  {
    pergunta: "2. Qual ambiente tem mais natureza?",
    opcoes: ["Shopping", "Avenida", "Campo", "Rodoviária"],
    correta: 2
  },
  {
    pergunta: "3. Onde encontramos plantações?",
    opcoes: ["Cidade", "Campo", "Centro comercial", "Rodovia"],
    correta: 1
  },
  {
    pergunta: "4. O que é comum na cidade?",
    opcoes: ["Animais soltos", "Tratores", "Arranha-céus", "Pasto"],
    correta: 2
  },
  {
    pergunta: "5. Qual lugar tem mais tranquilidade?",
    opcoes: ["Campo", "Centro urbano", "Estação de metrô", "Shopping"],
    correta: 0
  },
  {
    pergunta: "6. Qual lugar tem mais trânsito?",
    opcoes: ["Fazenda", "Cidade", "Vila rural", "Plantação"],
    correta: 1
  },
  {
    pergunta: "7. Onde geralmente há escolas e hospitais próximos?",
    opcoes: ["Sítio", "Campo", "Cidade", "Floresta"],
    correta: 2
  },
  {
    pergunta: "8. Onde o contato com a natureza é maior?",
    opcoes: ["Cidade", "Campo", "Subúrbio", "Avenida"],
    correta: 1
  },
  {
    pergunta: "9. Qual ambiente tem prédios altos e ruas asfaltadas?",
    opcoes: ["Campo", "Cidade", "Interior", "Zona rural"],
    correta: 1
  },
  {
    pergunta: "10. Onde as pessoas vivem com mais espaço e menos vizinhos?",
    opcoes: ["Centro urbano", "Campo", "Shopping", "Prédio"],
    correta: 1
  }
];

let perguntaAtual = 0;
let pontuacao = 0;
let mostrandoFeedback = false;
let acertou = false;
let respostaSelecionada = -1;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background('#F0F8FF'); // Fundo azul claro

  if (tela === "inicio") {
    mostrarTelaInicial();
  } 
  else if (tela === "apoio") {
    mostrarTextoApoio();
    mostrarBotaoVoltar();
  }
  else if (tela === "quiz") {
    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
      mostrarBotaoVoltar();
      if (mostrandoFeedback) {
        mostrarFeedback();
      }
    } else {
      mostrarTelaFinal();
      mostrarBotaoVoltar();
    }
  }
  else if (tela === "creditos") {
    mostrarCreditos();
    mostrarBotaoVoltar();
  }
}

function mostrarTelaInicial() {
  textSize(26);
  fill('#333');
  text("Campo e Cidade", width / 2, 80);

  textSize(18);
  text(
    "O campo e a cidade são espaços diferentes. O campo tem mais natureza,\n" +
    "plantações e tranquilidade. Já a cidade tem prédios, movimento e serviços.",
    width / 2, 180
  );

  desenharBotao(width / 2 - 100, 300, "Ver Texto de Apoio");
  desenharBotao(width / 2 - 100, 380, "Iniciar Quiz");
  desenharBotao(width / 2 - 100, 460, "Créditos");
}

function mostrarTextoApoio() {
  textSize(22);
  fill('#333');
  text("Texto de Apoio", width / 2, 50);

  textSize(16);
  textAlign(LEFT, TOP);
  let texto = 
    "CIDADE:\n" +
    "• Muitos prédios, carros, pessoas e serviços.\n" +
    "• Trânsito intenso e poluição.\n" +
    "• Acesso fácil a escolas, hospitais, mercados.\n\n" +
    "CAMPO:\n" +
    "• Ambiente tranquilo, com plantações e criação de animais.\n" +
    "• Menos barulho, menos pessoas e mais contato com a natureza.\n" +
    "• Menos acesso a serviços públicos.";
  
  fill('#333');
  text(texto, 50, 100, width - 100, height - 150);
  textAlign(CENTER, CENTER);
}

function mostrarPergunta() {
  let p = perguntas[perguntaAtual];

  fill('#333');
  textSize(24);
  text(p.pergunta, width / 2, 80);

  textSize(20);
  for (let i = 0; i < 4; i++) {
    let y = 150 + i * 70;
    fill('#00BFFF');
    rect(200, y, 400, 50, 10);
    fill('white');
    text(p.opcoes[i], 400, y + 25);
  }
}

function mostrarFeedback() {
  let p = perguntas[perguntaAtual];

  if (acertou) {
    fill('#32CD32');
    text("✔️ Correto! Resposta: " + p.opcoes[p.correta], width / 2, height - 50);
  } else {
    fill('#FF6347');
    text("❌ Errado! Sua resposta: " + p.opcoes[respostaSelecionada], width / 2, height - 80);
    fill('#1E90FF');
    text("Resposta certa: " + p.opcoes[p.correta], width / 2, height - 50);
  }
}

function mostrarTelaFinal() {
  textSize(30);
  fill('#333');
  text("Quiz finalizado!", width / 2, height / 2 - 30);
  text("Você acertou " + pontuacao + " de " + perguntas.length + " perguntas.", width / 2, height / 2 + 20);
  
  desenharBotao(width / 2 - 100, height / 2 + 80, "Reiniciar");
}

function mostrarCreditos() {
  textSize(26);
  fill('#333');
  text("Créditos / Desenvolvedor", width / 2, 80);

  textSize(18);
  textAlign(LEFT, TOP);
  text(
    "Desenvolvedor: Guilherme C. " +
    "\nQuiz simples sobre Campo e Cidade\n\n" +
    "Obrigado por jogar!",
    50, 150, width - 100, height - 150
  );
  textAlign(CENTER, CENTER);
}

function mostrarBotaoVoltar() {
  fill('#9370DB'); // Roxo médio
  rect(20, 20, 120, 40, 10);
  fill('white');
  textSize(18);
  text("← Voltar", 80, 40);
}

function desenharBotao(x, y, texto) {
  fill('#00BFFF'); // Azul vibrante
  rect(x, y, 200, 50, 10);
  fill('white');
  textSize(20);
  text(texto, x + 100, y + 25);
}

function mousePressed() {
  if (tela === "inicio") {
    if (mouseDentro(width / 2 - 100, 300, 200, 50)) tela = "apoio";
    else if (mouseDentro(width / 2 - 100, 380, 200, 50)) tela = "quiz";
    else if (mouseDentro(width / 2 - 100, 460, 200, 50)) tela = "creditos";
  }

  else if (tela === "apoio" || tela === "creditos") {
    if (mouseDentro(20, 20, 120, 40)) tela = "inicio";
  }

  else if (tela === "quiz") {
    if (mouseDentro(20, 20, 120, 40)) {
      tela = "inicio";
      perguntaAtual = 0;
      pontuacao = 0;
      mostrandoFeedback = false;
      respostaSelecionada = -1;
      acertou = false;
      return;
    }

    if (mostrandoFeedback) {
      mostrandoFeedback = false;
      perguntaAtual++;
      return;
    }

    if (perguntaAtual >= perguntas.length) {
      if (mouseDentro(width / 2 - 100, height / 2 + 80, 200, 50)) {
        perguntaAtual = 0;
        pontuacao = 0;
        tela = "inicio";
        mostrandoFeedback = false;
      }
      return;
    }

    let p = perguntas[perguntaAtual];
    for (let i = 0; i < 4; i++) {
      let y = 150 + i * 70;
      if (mouseDentro(200, y, 400, 50)) {
        respostaSelecionada = i;
        acertou = i === p.correta;
        if (acertou) pontuacao++;
        mostrandoFeedback = true;
      }
    }
  }
}

function mouseDentro(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
