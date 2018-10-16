import { Cabecalho } from './app/cabecalho/cabecalho.componente';
import { Rodape } from './app/rodape/rodape.componente';
import './app/index.scss';


let x = new Cabecalho();
let y = new Rodape();


x.criarElemento();
x.exibeNumero()
y.criarElemento();

import '@webcomponents/custom-elements';
