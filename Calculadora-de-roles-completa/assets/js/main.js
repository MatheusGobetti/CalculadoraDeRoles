function main () {
    const form = document.querySelector('#formulario');
    form.addEventListener('submit', function(evento) {
        evento.preventDefault(); 
 
        const inputNB = evento.target.querySelector('#NB').value;
        const inputNBA = evento.target.querySelector('#NBA').value;
        const inputKM = evento.target.querySelector('#KM').value;
        const inputO = evento.target.querySelector('#O').value;
        const inputOrcamento = evento.target.querySelector('#orcamento').value;
        const IMG = evento.target.querySelector('#imagemUsuario').value;
        const NB = inputNB;
        const NBA = inputNBA;
        const KM = inputKM;
        const O = Number(inputO);
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

        if((!NB && !NBA) || (NB == 0 && NBA == 0)) {
            setResultado('É necessário inserir pelo menos um bar ou balada', false); 
            return; // Para o código
        }

        const valorRole = getValorRole(NB, NBA, NIB, NIS, NIBA, KM, D, O);
        localStorage.setItem("mykey3", valorRole);
        const mensagem = `O valor do rolê será de: R$ ${valorRole}.`;
        setResultado(mensagem, true);
    });

    function getValorRole(NB, NBA, NIB, NIS, NIBA, KM, D, O) {
        const valorDoRole = (NB * NIB * NIS * 5 * 9) + (NBA * NIBA * NIS * 5 * 9) + (KM * D * 4) + (O);
        return valorDoRole.toFixed(2);
    }

    function setResultado(mensagem) {
        localStorage.setItem("mykey", mensagem);
    }
}

main();