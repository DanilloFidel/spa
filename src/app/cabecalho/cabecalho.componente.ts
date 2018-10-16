import { Observable, Subject, Observer } from 'rxjs';


export class Cabecalho{
    
    private nomeDoComponente: string = 'cabecalho';
    private subjectSearch: Subject<string> = new Subject<string>();
    
    
    constructor(){
        this.criarElemento();
    }
    
    
    public criarElemento(){
        let cabecalho = document.createElement('div');
        let barra = document.createElement('input');
        barra.type = 'text';
        barra.id = "barra";
        cabecalho.id = this.nomeDoComponente;
        document.body.appendChild(cabecalho);
        cabecalho.appendChild(barra)
        
        console.log('criando elemento...')
    }
    
    public exibeNumero(){
        let observable = Observable.create((observer: Observer<string>)=>{
            observer.next('primeiro evento da stream');
            observer.next('segundo evento da stream');
            observer.next('terceiro evento da stream');
            setTimeout(() => {
                observer.next('quarto evento da stream');
                observer.complete();
            }, 5000);
        })
        
        console.log('apenas antes do subscribe');
        
        observable.subscribe({
            next: (x: string) => console.log(x),
            error: (err: any)=> console.error('something wrong occurred: ' + err),
            complete: () => console.log('stream finalizada'),
        });
        console.log('apenas depois do subscribe');
    }
    
    public pesquisar(valor: string): void{
        /* console.log("caractere digitado :", valor);
        this.subjectSearch.next(valor);*/
    }
    
    public eventoDoTeclado(event: KeyboardEvent): void{
        console.log(event)
    }
    
}




