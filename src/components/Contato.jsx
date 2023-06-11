import './Contato.css'

function Contato(){
    return(
        <div class="fora">
      <div class="container">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <div class="topic">Endereço</div>
              <div class="text-one">Rua Tito, nª54 - Vila Romana <br/> São Paulo - SP - Brasil</div>
            </div>
            <div class="phone details">
              <div class="topic">Telefone</div>
              <div class="text-one">(11) 45423025</div>
              <div class="text-two">(11) 961546325</div>
            </div>
            <div class="email details">
              <div class="topic">E-mail</div>
              <div class="text-one">lojainfobama@gmail.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Entre em contato conosco</div>
            <p>Ficamos à disposição para atendê-lo(a). Entre em contato conosco para qualquer necessidade ou consulta que possa ter.</p>
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Nome e sobrenome"/>
            </div>
            <div class="input-box">
              <input type="text" placeholder="E-mail"/>
            </div>
            <div class="input-box message-box"></div>
            <div class="button">
              <input type="button" value="Enviar"/>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
        )
}
export default Contato