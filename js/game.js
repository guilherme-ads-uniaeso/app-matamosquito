//Identificar largura da janela
function ajustaLargura() {
  return window.innerWidth;
}
//Identificar altura da janela
function ajustaAltura() {
  return window.innerHeight;
}

//Ajustar largura e altura ao redimensionar a janela do browser
function ajustaPalcoJogo() {
  let x = ajustaLargura();
  let y = ajustaAltura();

}

//Gerar posição aleatória na horizontal da janela
// function gerarPosicaoAleatoriaLargura() {
//   return Math.floor(Math.random() * ajustaLargura());
// }
// //Gerar posição aleatória na vertical da janela
// function gerarPosicaoAleatoriaAltura() {
//   return Math.floor(Math.random() * ajustaAltura());
// }

// //Definir posição aleatória para inserção do mosquito na janela
// function definePosAleatLarguraAltura() {
//   let x = gerarPosicaoAleatoriaLargura();
//   let y = gerarPosicaoAleatoriaAltura();
//   console.log(x, y);
// }
// ajustaPalcoJogo();
// definePosAleatLarguraAltura();

//Gerar posição aleatória na horizontal da janela
function gerarPosicaoAleatoriaLargura() {
  let posAleatoriaLargura = Math.floor(Math.random() * ajustaLargura() - 150);
  if (posAleatoriaLargura < 0) {
    return 0;
  } else {
    return posAleatoriaLargura;
  }
}
//Gerar posição aleatória na vertical da janela
function gerarPosicaoAleatoriaAltura() {
  let posAleatoriaAltura = Math.floor(Math.random() * ajustaAltura() - 150);
  if (posAleatoriaAltura < 0) {
    return 0;
  } else {
    return posAleatoriaAltura;
  }
}

//Gerar um tamanho aleatório para o mosquito
function tamanhoAleatorio() {
  let tamanhoMosquito = Math.floor(Math.random() * 3);
  switch (tamanhoMosquito) {
    case 0:
      return "mosquito-p";
    case 1:
      return "mosquito-m";
    case 2:
      return "mosquito-g";
    default:
      break;
  }
}

//Escolher um lado aleatório para o posicionamento do mosquito
function ladoAleatorio() {
  let ladoMosquito = Math.floor(Math.random() * 2);

  switch (ladoMosquito) {
    case 0:
      return "lado-a";
    case 1:
      return "lado-b";
    default:
      break;
  }
}

var vidas = 1;
//Criar e inserir o elemento HTML que representa o mosquito
function criarMosquitoAleatorio() {
  //Caso já exista um um mosquito, removê-lo
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    if (vidas < 3) {
      document.getElementById("vida-" + vidas).src =
        "../assets/img/coracao_vazio.png";
      vidas++;
    } else {
      window.location.href = "../html/game_over.html";
    }
  } else {
    //Cria um novo mosquito
    let mosquito = document.createElement("img");
    mosquito.src = "../assets/img/mosquito.png";
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosquito.id = "mosquito";
    mosquito.onclick = function () {
      this.remove();
      console.log("elemento removido");
    };
    //Define a posição posição aleatória
    mosquito.style.left = gerarPosicaoAleatoriaLargura() + "px";
    mosquito.style.top = gerarPosicaoAleatoriaAltura() + "px";
    mosquito.style.position = "absolute";
    //Anexa o mosquito criado ao documento
    document.body.appendChild(mosquito);
  }
}

//Cronômetro de 10s
var tempo = 11;
var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    window.location.href = "../html/vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);
ajustaPalcoJogo();

setInterval(() => {
  criarMosquitoAleatorio();
}, 1000);

