import {useEffect} from 'react'
import Image from 'next/image'

export default function Index() {

  const date = new Date();
  const Yer = date.getFullYear();
  var link = "https://api.whatsapp.com/send?phone=+55"

  
 
  useEffect(() => {})

  return (
    <>
        {/* <div className='absolute footer-bg'/> */}
        <div className='footer-layout'>
          <div className='fl-top'>
              <h1>FALE COM A GENTE</h1>
              <p>
                Faça-nos uma visita, clique nos números de telefone ou na logo do Whatsapp para conversar com um dos nossos 
                consultores ou se preferir pode nos ligar para saber mais sobre nossos produtos. Não perca tempo,
                estamos esperando por você!
              </p>
          </div>
          <div className='fl-middle'>
            <div className='fl-middle-contact'>
              <h3>Cabo Frio</h3>
              <div className='flm-contact-info'>
                <img src="/assets/location-arrow.webp" alt="Local" />
                <p>
                  <strong>Endereço:</strong><br/>
                  <a href={"https://g.page/onbytecabofriohttps://www.google.com/search?q=grafica%20impacto%20visual&rlz=1C1FCXM_pt-PTBR988BR990&oq=gr%C3%A1fica+impacto+visual+&aqs=chrome.1.69i57j0i22i30j69i60j69i61l2.23056j0j7&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14&tbm=lcl&rflfq=1&num=10&rldimm=3860985265260819815&lqi=ChZncmFmaWNhIGltcGFjdG8gdmlzdWFsWhgiFmdyYWZpY2EgaW1wYWN0byB2aXN1YWySARBncmFwaGljX2Rlc2lnbmVyqgEPEAEqCyIHZ3JhZmljYSgM&ved=2ahUKEwiEi42m7uz6AhUOpZUCHRnvDD4QvS56BAgOEAE&sa=X&rlst=f#rlfi=hd:;si:3860985265260819815,l,ChZncmFmaWNhIGltcGFjdG8gdmlzdWFsWhgiFmdyYWZpY2EgaW1wYWN0byB2aXN1YWySARBncmFwaGljX2Rlc2lnbmVyqgEPEAEqCyIHZ3JhZmljYSgM;mv:[[-22.8349823,-42.0273253],[-22.893804900000003,-42.03887050000001]]?share"}>
                    Av. Joaquim Nogueira, 354 - Loja 01 - São Cristóvão, Cabo Frio - RJ, 28909-490</a>
                </p>
              </div>
              <div className='flm-contact-info'>
                <img src="/assets/zap-arrow.webp" alt="Whatsapp"/>
                  <p>
                    <strong>Whatsapp:</strong><br/>
                    <a href={link+"22981591576"}>(22) 98159-1576 / </a>
                    <a href={link+"22992158462"}>(22) 99215-8462</a>
                  </p>
              </div>
              <div className='flm-contact-info'>
                <img src="/assets/email-arrow.webp" alt="Email"/>
                <p>
                  <strong>Email:</strong><br/>
                  <a href={"mailto:contato.impactocf@gmail.com"}>contato.impactocf@gmail.com</a>
                </p>
              </div>
              <div className='flm-contact-info'>
                <img src="/assets/hor-arrow.webp" alt="horario"/>
                <p>
                  <strong>Horário:</strong><br/>
                  <a href={""}>Segunda à sexta-feira de 9h às 18h</a>
                </p>
              </div>
              <div className='flm-contact-info'>
                <div className='fl-bottom-social'>
                  <a href='https://www.facebook.com/graficarapida.impactovisual/'><i className="fi fi-brands-facebook"></i></a>
                  <a href='https://www.instagram.com/impacto.graficarapida/'><i className="fi fi-brands-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className='fl-middle-contact'>
              <h3>Jardim Esperança</h3>
              <div className='flm-contact-info'>
                <img src="/assets/location-arrow.webp" alt="Local"/>
                <p>
                  <strong>Endereço:</strong><br/>
                  <a href={"https://www.google.com/search?q=grafica%20impacto%20visual&rlz=1C1FCXM_pt-PTBR988BR990&oq=gr%C3%A1fica+impacto+visual+&aqs=chrome.1.69i57j0i22i30j69i60j69i61l2.23056j0j7&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14&tbm=lcl&rflfq=1&num=10&rldimm=3860985265260819815&lqi=ChZncmFmaWNhIGltcGFjdG8gdmlzdWFsWhgiFmdyYWZpY2EgaW1wYWN0byB2aXN1YWySARBncmFwaGljX2Rlc2lnbmVyqgEPEAEqCyIHZ3JhZmljYSgM&ved=2ahUKEwiEi42m7uz6AhUOpZUCHRnvDD4QvS56BAgOEAE&sa=X&rlst=f#rlfi=hd:;si:9652287966566962171,l,ChZncmFmaWNhIGltcGFjdG8gdmlzdWFsWhgiFmdyYWZpY2EgaW1wYWN0byB2aXN1YWySARJjb21tZXJjaWFsX3ByaW50ZXKqAQ8QASoLIgdncmFmaWNhKAw;mv:[[-22.8349823,-42.0273253],[-22.893804900000003,-42.03887050000001]]"}>
                    Av. Ézio Cardoso da Fonseca, 68 - Jardim Esperança, Cabo Frio - RJ, 28921-000</a>
                </p>
              </div>
              <div className='flm-contact-info'>
                <img src="/assets/zap-arrow.webp" alt="Whatsapp"/>
                  <p>
                    <strong>Whatsapp:</strong><br/>
                    <a href={link+"22999722326"}>(22) 99972-2326 / </a>
                    <a href={"tel:222041-0568"}>(22) 2041-0568</a>
                  </p>
              </div>
              <div className='flm-contact-info'>
                <img src="/assets/email-arrow.webp" alt="Email"/>
                <p>
                  <strong>Email:</strong><br/>
                  <a href={"mailto:graficaimpactojardim@gmail.com"}>graficaimpactojardim@gmail.com</a>
                </p>
              </div>
              <div className='flm-contact-info'>
                <img src="/assets/hor-arrow.webp" alt="horario"/>
                <p>
                  <strong>Horário:</strong><br/>
                  <a href={""}>Segunda à sexta-feira de 9h às 18h30 e Sábado de 9h à 13h</a>
                </p>
              </div>
              <div className='flm-contact-info'>
                <div className='fl-bottom-social'>
                  <a href='https://www.facebook.com/graficarapida.impactovisual/'><i className="fi fi-brands-facebook"></i></a>
                  <a href='https://www.instagram.com/impactograficarapida/'><i className="fi fi-brands-instagram"></i></a>
                </div>
              </div>
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
    