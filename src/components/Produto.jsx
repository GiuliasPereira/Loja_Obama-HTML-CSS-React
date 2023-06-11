import './Produto.css'
import Twitter from '../assets/icon-twitter50.svg'
import Facebook from '../assets/icon-facebook.svg'
import Google from '../assets/icon-google.svg'
import foneGamer from '../assets/fone-gamer.jpg'
import monitorGamer from '../assets/monitor-gamer.jpg'
import notebookGamer from '../assets/notebook-gamer.jpg'
import memoriaHusky from '../assets/memoria-husky.jpg'
import mouseGamer from '../assets/mouse-gamer.jpg'
import tecladoGamer from '../assets/teclado-gamer.jpg'
import headsetHyperx from '../assets/headset-hyperx.jpg'
import ssd256 from '../assets/ssd-256.jpg'
 

function Produto(){
    
    return(
<div class="principal">    
        <h2>Produtos em Destaque</h2>
        <div class="produtos">
            <img src={foneGamer} alt="Imagem de um fone gamer preto com detalhes em azul"/>
            <p>Headset Gamer Logitech<br/> R$ 299,99</p>
            <button>Ver Produto</button>
        </div>

        <article class="produtos">
            <img src={monitorGamer} alt="Imagem de um monito gamer, na tela existe a foto de um jogo de tiro"/>
            <p>Monitor Gamer LG Ultra Gear<br/> R$1.399,99</p>
            <button>Ver Produto</button>
        </article>

        <article class="produtos">
            <img src={notebookGamer} alt="Imagem de um notebook"/>
            <p>Notebook Gamer Lenovo<br/> R$ 3.999,99</p>
            <button>Ver Produto</button>
        </article>

        <article class="produtos">
            <img src={memoriaHusky} alt="Imagem de um memória"/>
            <p>Memória Gamer Husky 4GB<br/> R$105,99</p>
            <button>Ver Produto</button>
        </article>

        <h2>Mais Vendidos</h2>
        <article class="produtos">
            <img src={mouseGamer} alt="Imagem de um mouse"/>
            <p>Mouse Gamer Logitech<br/>R$289,99</p>
            <button>Ver Produto</button>
        </article>

        <article class="produtos">
            <img src={tecladoGamer} alt="Imagem de um teclado"/>
            <p>Teclado Mecânico Gamer<br/>R$299,99</p>
            <button>Ver Produto</button>
        </article>

        <article class="produtos">
            <img src={headsetHyperx} alt="Imagem de um headset"/>
            <p>Headset Sem Fio Hyper<br/> R$439,99</p>
            <button>Ver Produto</button>
        </article>

        <article class="produtos">
            <img src={ssd256} alt="Imagem de um ssd"/>
            <p>SSD 256 GB Husky Gaming<br/> R$199,99</p>
            <button>Ver Produto</button>
        </article>
<p class="numeros">1, 2, 3, 4 ... 50, 51, 52</p>
    </div>
    )
}


export default Produto
