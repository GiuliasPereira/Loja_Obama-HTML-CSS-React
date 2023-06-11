import './section.css'

function Section(){

    return ( 
        <section className='newsletter'>  
        <h3>News Letter</h3>
        <p>receba nossas promoções por e-mail</p>
        <form action="" method="post">
        <input type="text" placeholder="Insira seu nome" />
        <input type="text" placeholder="Insira seu e-mail" />
        <button>Cadastrar</button>
        </form>
        </section>
    )
}

export default Section