(function calculadora(){
    const display = document.querySelector('#campo');
    const botaoHistorico = document.querySelector('#container #botao-historico button');
    const conteudo = document.querySelector('.conteudo');
    const historico = document.querySelector('.historico');

    
        document.addEventListener('click', function(e) {
            const elemento = e.target;

            if(elemento.classList.contains('btn-numero')){
                btnParaDisplay(elemento.innerText);
            };

            if(elemento.classList.contains('btn-limpar')){
                btnLimpar();
            };

            if(elemento.classList.contains('btn-apagar')){
                btnApagar();
            };

            if(elemento.classList.contains('btn-igual')){
                btnRealizaConta();
            };

            if(elemento.classList.contains('limpar-historico')){
                limparHistorico();
            }

            if(elemento.classList.contains('limpar-historico')){
                limparHistorico();
            }

            if(elemento === botaoHistorico){
                mostraEOcultaHistorico();
            }

        });
        

        function btnParaDisplay(valor){
            display.value += valor;
        };

        function btnLimpar(){
            display.value = '';
        };

        function btnApagar(){
            display.value = display.value.slice(0,-1);
           /*
           const textoInput = this.display.value.split('');
           textoInput.pop('');
           this.display.value = textoInput.join('');
           */
        };

        
        function btnRealizaConta(){
            try{
                let conta = display.value;
                console.log(`conta = ${conta}`);
                console.log(`typeof conta = ${typeof conta}`); 

                if(!(conta.indexOf('×') === -1)){
                    conta = conta.replace(/×/g, '*');
                }
                if(!(conta.indexOf('÷') === -1)){
                    conta = conta.replace(/÷/g, '/');
                }
                

                console.log(`conta = ${conta}`);
                console.log(`typeof conta = ${typeof conta}`);

                const resultadoFinal = eval(conta);

                const p = document.createElement('p');
                p.innerText = conta + '=' + resultadoFinal;
                conteudo.appendChild(p);
                        
                display.value = resultadoFinal;
            
                if(!conta){
                    alert('Conta inválida!');
                    return
                };
 
         

            } catch(e){
                alert('Conta inválida!');
            }
            
        };


        function limparHistorico(){
            const p = conteudo.querySelectorAll('p');
            for(paragrafo of p){
                paragrafo.remove();
            }
        }

        function mostraEOcultaHistorico(){
                const hst = historico.getAttribute('id');
                if(hst === null){
                    historico.setAttribute('id', 'controlador');
                }else{
                    historico.removeAttribute('id');
                }
            
        };

})();
