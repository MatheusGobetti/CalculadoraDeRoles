let mensagemTexto = localStorage.getItem("mykey");
let orcamento = localStorage.getItem("mykey2");
let valorTotalRole = Number(localStorage.getItem("mykey3"));
let filename = String(localStorage.getItem("mykey4"));

document.getElementById("total-role").innerHTML = localStorage.getItem("mykey");

let fotoRole = filename.replace(/^.*\\/, "");

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

function criaDiv() {
  const div = document.createElement('div'); 
  return div;
}

function setOrcamento(orcamento, isValid){
  const resultado = document.querySelector('#orcamento-role');;
  resultado.innerHTML = '';

  const div = criaDiv();

  if (isValid) {
      div.classList.add('paragrafo-resultado');
  } else {
      div.classList.add('bad');
  }
  div.innerHTML = orcamento;
  resultado.appendChild(div);
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