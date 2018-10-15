export class Rodape{

    private nomeDoComponente: string = 'rodape'

    criarElemento(){
        const cabecalho = document.createElement('div');
        cabecalho.id= this.nomeDoComponente;
        cabecalho.style.height = '300px';
        cabecalho.style.backgroundColor = 'blue'
        document.body.appendChild(cabecalho);
        console.log('criando elemento...')
    }
}