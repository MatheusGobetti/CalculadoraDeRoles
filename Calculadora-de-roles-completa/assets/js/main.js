function main () {
    // Caputrar evento de submit do formulário
    const form = document.querySelector('#formulario');
    // 'Escuta' a ação do botão de submit do formulário
    form.addEventListener('submit', function(evento) {
        // Previne o envio do formulário
        evento.preventDefault(); 
        // Informa o elemento que recebe o evento no input
        const inputNB = evento.target.querySelector('#NB').value;
        const inputNBA = evento.target.querySelector('#NBA').value;
        const inputKM = evento.target.querySelector('#KM').value;
        const inputO = evento.target.querySelector('#O').value;
        const inputOrcamento = evento.target.querySelector('#orcamento').value;
        const IMG = evento.target.querySelector('#imagemUsuario').value; // Dessa forma não tem o fakepath 

        const NB = inputNB;
        const NBA = inputNBA;
        const KM = inputKM;
        const O = Number(inputO); // Recebe o valor transformando para number e armazenando em uma variável. Ele não permite que deixe de ser feita a conversão por conta do .toFixed(2)
        const ORC = Number(inputOrcamento);

        localStorage.setItem("mykey2", ORC);
        localStorage.setItem("mykey4", IMG); 

        let selectNIB = document.getElementById('NIB');
        let NIB = Number(selectNIB.options[selectNIB.selectedIndex].value);

        let selectNIBA = document.getElementById('NIBA');
        let NIBA = Number(selectNIBA.options[selectNIBA.selectedIndex].value);

        let selectNIS = document.getElementById('NIS');
        let NIS = Number(selectNIS.options[selectNIS.selectedIndex].value);

        let selectD = document.getElementById('D');
        let D = Number(selectD.options[selectD.selectedIndex].value);


        // Se o usuário não colocar nenhum bar ou balada...
        if((!NB && !NBA) || (NB == 0 && NBA == 0)) {
            // Chama a função para exibir na tela
            setResultado('É necessário inserir pelo menos um bar ou balada', false); // No parâmetro isValid retorna falso
            // Para o código
            return;
        }

        // Chamando função getValorRole e armazenando na função valorRole
        const valorRole = getValorRole(NB, NBA, NIB, NIS, NIBA, KM, D, O);
        localStorage.setItem("mykey3", valorRole);
        // Exibindo o valor do rolê e armazenando na função mensagem
        const mensagem = `O valor do rolê será de: R$ ${valorRole}.`;
        // Caso for válido, exibe a mensagem do valor do rolê
        setResultado(mensagem, true);
    });

    // Função que calcula o valor do rolê
    function getValorRole(NB, NBA, NIB, NIS, NIBA, KM, D, O) {
        const valorDoRole = (NB * NIB * NIS * 5 * 9) + (NBA * NIBA * NIS * 5 * 9) + (KM * D * 4) + (O);
        return valorDoRole.toFixed(2);
    }

    function setResultado(mensagem) {
        localStorage.setItem("mykey", mensagem);
    }
}

main();