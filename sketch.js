let campoIdade;
let campoRockPesado; // Campo para rock pesado
let campoSeriesAcao; // Campo para séries de ação

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de conteúdo"); // Título abrangente
  createSpan("Sua idade:");
  campoIdade = createInput("16"); // Idade padrão já mais alta, pensando nas novas recomendações
  campoRockPesado = createCheckbox("Gosta de rock pesado (Skillet)?"); // Checkbox para Skillet
  campoSeriesAcao = createCheckbox("Gosta de séries de ação (Invencível/TWD)?"); // Checkbox para Invencível/TWD
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeRockPesado = campoRockPesado.checked();
  let gostaDeSeriesAcao = campoSeriesAcao.checked();

  let recomendacao = geraRecomendacao(idade, gostaDeRockPesado, gostaDeSeriesAcao);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(32);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeRockPesado, gostaDeSeriesAcao) {
  // Converte a idade para número inteiro
  idade = parseInt(idade);

  // Lógica principal: foca nas novas recomendações
  if (gostaDeSeriesAcao) {
    if (idade >= 16) { // Apenas para idade apropriada
      return "Para séries de ação/suspense, assista: The Walking Dead ou Invencível!";
    } else {
      return "The Walking Dead e Invencível são para maiores de 16. Que tal algo mais leve?";
    }
  }

  if (gostaDeRockPesado) {
    if (idade >= 10) { // Skillet pode ser apreciado por um público um pouco mais jovem
        return "Para rock pesado, ouça a banda Skillet!";
    } else {
        return "Skillet é uma banda mais intensa. Que tal explorar outros gêneros?";
    }
  }

  // Se nenhuma das opções acima for marcada ou a idade não for compatível
  if (idade >= 16) {
    return "Que tal explorar séries de ação ou bandas de rock pesado?";
  } else if (idade >= 10) {
    return "Descubra novas bandas ou séries de acordo com seu gosto!";
  } else {
    return "Divirta-se com o que você já gosta!";
  }
}
