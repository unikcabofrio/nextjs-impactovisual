import {useEffect} from 'react'
import Image from 'next/image'

export default function Index(props) {

  const date = new Date();
  const Yer = date.getFullYear();
  var link = "https://api.whatsapp.com/send?phone=+55"

  
 
  useEffect(() => {

    var form = document.getElementById("my-form");
    var infotext = document.getElementsByClassName("fl-form-info");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        infotext[0].classList.add("fl-form-infoshow")
        if (response.ok) {
            infotext[0].classList.add("fl-form-info-ok")
            status.innerHTML = "Recebemos sua mensagem!";
            form.reset()
        } else {
            infotext[0].classList.remove("fl-form-info-ok")
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            //   status.innerHTML = "Oops! Tivemos um problema, verifique todos os campos"
            } else {
              status.innerHTML = "Oops! Tivemos um problema no envio da mensagem!"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! Tivemos um problema no envio da mensagem!"
      });
    }
    form.addEventListener("submit", handleSubmit)
  })

  return (
    <>
        {/* <div className='absolute footer-bg'/> */}
        <div className='footer-layout' id={props.id}>
            <div className='fl-top'>
                <h1>FALE COM A GENTE</h1>
                <p>
                    Faça-nos uma visita, clique nos números de telefone ou na logo do Whatsapp para conversar com um dos nossos 
                    consultores ou se preferir pode nos ligar ou mandar um e-mail para saber mais sobre nossos cursos. Não perca tempo,
                    estamos esperando por você!
                </p>
            </div>
            <div className='fl-middle'>
                <div className='fl-middle-contact'>
                    <div className='flm-contact-info'>
                        <Image src="/assets/location-arrow.webp" alt="Local" width={45} height={45} quality={100}/>
                        <p>
                        <strong>Endereço:</strong><br/>
                        <a href={"https://g.page/onbytecabofrio?share"}>Av. Teixeira e Souza, 49 – Sala 101 à 103, Centro, Cabo Frio, RJ 28907-410</a>
                        </p>
                    </div>
                    <div className='flm-contact-info'>
                        <Image src="/assets/zap-arrow.webp" alt="Whatsapp" width={45} height={45} quality={100}/>
                        <p>
                        <strong>Whatsapp:</strong><br/>
                        <a href={link+"22974002820"}>(22) 97400-2820 / </a>
                        <a href={link+"22974006116"}>(22) 97400-6116</a>
                        </p>
                    </div>
                    <div className='flm-contact-info'>
                        <Image src="/assets/tel-arrow.webp" alt="Contato" width={45} height={45} quality={100}/>
                        <p>
                        <strong>Telefone:</strong><br/>
                        <a href={"tel:2226451912"}>(22) 2645-1912</a>
                        </p>
                    </div>
                </div>
                <div className='fl-middle-form'>
                    <form id="my-form" action="https://formspree.io/f/xvoyaroa" method="POST">
                        <div>
                            <input id="name" type="text" name="name" placeholder="Nome Completo" required/>
                            <input id="email" type="email" name="email" placeholder="E-mail" required/>
                        </div>
                        <input type="text" id="subject" placeholder="Assunto" required/>
                        <textarea id="message" name="message" placeholder="Mensagem" required/>
                        <button id="my-form-button">Enviar</button>
                        <div className='fl-form-info'><p id="my-form-status"></p></div>
                    </form>
                </div>
            </div>
            <div className='fl-bottom'>
                <Image src="/assets/selos.webp" alt="Selos OnByte" width={400} height={130} quality={100}/>
                <div className='fl-bottom-social'>
                  <a href='https://www.facebook.com/OnByteCaboFrio/'><i className="fi fi-brands-facebook"></i></a>
                <a href='https://www.instagram.com/onbytecabofrio/'><i className="fi fi-brands-instagram"></i></a>
                </div>
            </div>
        </div>
        <div className='footer-copy'>
        <p>
            © {Yer} - Todos os direitos reservados a
            <a href='https://www.unikcabofrio.com.br/'> Unik Cabo Frio </a>.
        </p>
        </div>
    </>
  )
}
    