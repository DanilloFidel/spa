export class Rodape{

    private nomeDoComponente: string = 'rodape'

    criarElemento(){
        const cabecalho = document.createElement('div');
        cabecalho.id= this.nomeDoComponente;
        document.body.appendChild(cabecalho);
        console.log('criando elemento...')
    }
}
