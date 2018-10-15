

export class Cabecalho{

    private nomeDoComponente: string = 'cabecalho'

    criarElemento(){
        const cabecalho = document.createElement('div');
        cabecalho.id= this.nomeDoComponente;
        cabecalho.style.height = '300px';
        cabecalho.style.backgroundColor = 'red'
        document.body.appendChild(cabecalho);
        console.log('criando elemento...')
    }
}


