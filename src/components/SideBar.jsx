import './SideBar.css'

function SideBar(){

    return(
    <div>
      <aside className='onde-estamos'>
        <h2>Onde Estamos</h2>
        <p>Rua Tito, nª54 - Vila Romana - São Paulo - SP - Brasil</p>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0971374763362!2d-46.6936393021301!3d-23.52900842743574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1678296425608!5m2!1spt-BR!2sbr"
        style={{border: 'none'}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h2>Contatos</h2>
        <ul>
        <li><i class="fa-solid fa-phone"></i> (11) 45423025</li>
        <li><i class="fa-brands fa-whatsapp"></i> (11) 961546325</li>
        <li><i class="fa-solid fa-envelope"></i>lojainfobama@gmail.com</li>
        </ul>
      </aside>
    </div>
  )
}

export default SideBar