import { Observable, Subject } from 'rxjs';


export class Cabecalho{

    private nomeDoComponente: string = 'cabecalho';
    private subjectSearch: Subject<string> = new Subject<string>();

    constructor(){
        
    }


    public criarElemento(){
        let cabecalho = document.createElement('div');
        let barra = document.createElement('input');
        barra.type = 'text';
        barra.id = "barra";
        barra.addEventListener('keyup', function(){
            console.log(barra.value)
        })
        cabecalho.id = this.nomeDoComponente;
        document.body.appendChild(cabecalho);
        cabecalho.appendChild(barra)


        console.log('criando elemento...')
    }

    public exibeNumero(){
        let observable = Observable.create(function (observer: any) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(() => {
            observer.next(4);
            observer.complete();
            }, 1000);
        });
        
        console.log('just before subscribe');
        
        observable.subscribe({
          next: (x: string) => console.log('got value ' + x),
          error: (err: any)=> console.error('something wrong occurred: ' + err),
          complete: () => console.log('done'),
        });
        console.log('just after subscribe');
    }

    public pesquisar(valor: string): void{
        console.log("caractere digitado :", valor);
        this.subjectSearch.next(valor);
    }
    

}




