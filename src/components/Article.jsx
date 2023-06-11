import './article.css'
import ImagemCentro from '../assets/ImagemCentro.png'
import SideBar from './SideBar'

function Article(){

    return (
      <div className='principal'>
        <article className='sobre'>
            <h2>Sobre nós</h2>
            <img
          src={ImagemCentro}
          alt="Imagem de uma loja de informática com três pessoas, sendo dois homens e uma mulher. Mulher vestida com social azul clara, sendo abraçada por homem branco com camiza social azul escuro e o homem com camisa social branca com perfil de vendedor."
        />

            <p>
          Nossa loja foi fundada com a missão de oferecer soluções eficientes e
          acessíveis para todas as necessidades de tecnologia de nossos
          clientes.
        </p>
        <p>
          <br />Nós oferecemos uma ampla variedade de produtos de informática,
          desde computadores de mesa, laptops, tablets, smartphones,
          periféricos, até impressoras e outros equipamentos de escritório.
          Nossa equipe está sempre atualizada sobre as últimas tendências e
          novidades do mercado de tecnologia, e estamos prontos para ajudá-lo a
          encontrar os melhores produtos que atendam às suas necessidades e
          orçamento.
        </p>
        <p>
          <br />Além de oferecermos produtos de alta qualidade, também nos
          orgulhamos de nosso excelente atendimento ao cliente. Nós acreditamos
          que a satisfação do cliente é a chave para o sucesso de qualquer
          negócio, e por isso, estamos comprometidos em fornecer um atendimento
          personalizado e profissional a todos os nossos clientes.
        </p>
        <p>
          <br />Estamos localizados em um local de fácil acesso e com
          estacionamento gratuito. Na Loja de Informática do Obama, você
          encontrará um ambiente amigável e acolhedor para ajudá-lo a escolher
          os melhores produtos de informática.
        </p>
        <p>
          <br />Obrigado por visitar a Loja de Informática do Obama. Estamos
          ansiosos para ajudá-lo a encontrar tudo o que você precisa em
          tecnologia.
        </p>
        </article>
        <SideBar/>
        </div>

    )
}

export default Article