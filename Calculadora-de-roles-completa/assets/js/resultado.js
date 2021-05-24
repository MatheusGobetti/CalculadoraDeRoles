document.getElementById("total-role").innerHTML = localStorage.getItem("mykey");

mensagemTexto = localStorage.getItem("mykey");
orcamento = localStorage.getItem("mykey2");
valorTotalRole = Number(localStorage.getItem("mykey3"));
filename = String(localStorage.getItem("mykey4"));

let path = filename;
let fotoRole = path.replace(/^.*\\/, "");

if(localStorage.getItem("mykey4") == "") {
  localStorage.setItem("mykey4", "https://source.unsplash.com/collection/1484593/338x191");
  fotoRole = localStorage.getItem("mykey4");
  let imgRole = document.createElement("IMG");
  imgRole.setAttribute("src", fotoRole);
  imgRole.setAttribute("width", "50%");
  imgRole.setAttribute("height", "50%");
  imgRole.setAttribute("alt", "foto-antes-role");
  document.getElementById('foto-role').appendChild(imgRole);

} else {
  let imgRole = document.createElement("IMG");
  imgRole.setAttribute("src", "C:/Users/mathe/OneDrive/Imagens/" + fotoRole);
  imgRole.setAttribute("width", "50%");
  imgRole.setAttribute("height", "50%");
  imgRole.setAttribute("alt", "foto-antes-role");
  document.getElementById('foto-role').appendChild(imgRole);

}

function criaDiv(className) {
  // Cria uuma div
  const div = document.createElement('div'); 
  return div;
}

// Nesta função, o que for enviado de texto será adicionado na div resultado
function setOrcamento(orcamento, isValid){
  // Capturar evento do resultado no HTML
  const resultado = document.querySelector('#orcamento-role');;
  // Limpa o que estiver dentro da variável resultado
  resultado.innerHTML = '';
  // Coloca a função criaParagrafo em uma função 'p'
  const div = criaDiv();
  // Trocando a cor do fundo buscando a classe criada no CSS de acordo com a validez 
  if (isValid) {
      div.classList.add('paragrafo-resultado');
  } else {
      div.classList.add('bad');
  }
  // Colocando o parágrafo com a mensagem do resultado no HTML
  div.innerHTML = orcamento;
  // Inserir o elemento 'p' na div 
  resultado.appendChild(div);
}

function fazImagem() {
  
}

function validacao() {
  if(mensagemTexto !== "É necessário inserir pelo menos um bar ou balada") {
    if (orcamento >= valorTotalRole) {
      setOrcamento("Passe livre pra night!<br><br>" +
      "Seu orçamento pra essa noite é de: R$ " + orcamento + ", então aproveita, mas sem aglomeração!", true);
    } else {
      setOrcamento("Hoje é melhor curtir uma Netflix e assaltar a geladeira!<br><br>" + 
      "Seu orçamento pra essa noite é de: R$ " + orcamento + ", então não vai querer estourar o limite do cartão né?", false);
    }
  }
  
}

validacao();