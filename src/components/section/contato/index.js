// Contato
import { useEffect } from 'react'
import Link from 'next/link'
import * as S from './style'

// Imports Components
import { TitlesTop } from 'components/text'
// import Forms from 'components/forms'
// import { InputEmail, InputText } from 'components/forms/inputs'
// import { TextArea } from 'components/forms/textarea'
// import { Button } from 'components/buttons'
import InfoContact from 'components/infoContact'

function Contato({ id }) {
  const Data = new Date()
  const Year = Data.getFullYear()
  // const [submited, setSubmited] = useState(['', '#fff'])

  useEffect(() => {}, [])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   const res = await fetch('/api/contact', {
  //     body: JSON.stringify({
  //       name: e.target[0].value,
  //       email: e.target[1].value,
  //       subject: e.target[2].value,
  //       message: e.target[3].value
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST'
  //   })

  //   await res
  //     .json()
  //     .then((result) => {
  //       console.log(result)
  //       // if (result.response.includes('received')) {
  //       //   Message(['Recebemos sua menssagem com sucesso!', '#fff'])
  //       //   e.target[0].value = ''
  //       //   e.target[1].value = ''
  //       //   e.target[2].value = ''
  //       //   e.target[3].value = ''
  //       // } else {
  //       //   Message(['Desculpe, estamos com problema no envio!', '#000'])
  //       // }
  //     })
  //     .catch((result) => {
  //       // Message(['Desculpe, estamos com problema no envio!', '#000'])
  //       console.log(result)
  //     })
  // }

  // function Message(array) {
  //   setSubmited(array)
  //   var div = document.getElementById('msgInfor')
  //   div.style = 'opacity: 1'
  //   setTimeout(function () {
  //     div.style = 'opacity: 0'
  //   }, 6000)
  // }

  return (
    <>
      <S.container id={id}>
        <TitlesTop
          titles={'FALE COM A GENTE'}
          description={
            'Faça-nos uma visita, clique nos números de telefone ou na logo do Whatsapp para conversar com um dos nossos consultores ou se preferir pode nos ligar ou mandar um e-mail para saber mais sobre nossos cursos. Não perca tempo, estamos esperando por você!'
          }
        />
        <S.middle>
          <div className="social">
            <h3>Cabo Frio</h3>
            <InfoContact
              title="Endereço"
              Img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                </svg>
              }
            >
              <Link href="https://goo.gl/maps/4VaJ4dkJ3JhGd1hr8">
                Av. Joaquim Nogueira, 354 - Loja 01 - São Cristóvão, Cabo Frio -
                RJ, 28909-490
              </Link>
            </InfoContact>
            <InfoContact
              title="Whatsapp"
              Img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              }
            >
              <Link href="https://api.whatsapp.com/send?phone=+5522981591576">
                (22) 98159-1576 /
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=+5522992158462">
                (22) 99215-8462
              </Link>
            </InfoContact>
            <InfoContact
              title="E-mail"
              Img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              }
            >
              <Link href="mailto:contato.impactocf@gmail.com">
                contato.impactocf@gmail.com
              </Link>
            </InfoContact>
            <InfoContact
              title="Horário"
              Img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
              }
            >
              <Link href="https://impactovisual.vercel.app/">
                Segunda à sexta-feira de 9h às 18h
              </Link>
            </InfoContact>
            <S.socialContainer>
              <Link
                href={'https://www.facebook.com/graficarapida.impactovisual/'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/impacto.graficarapida/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </Link>
            </S.socialContainer>
          </div>
          <div className="social">
            <h3>Jardim Esperança</h3>
            <InfoContact
              title="Endereço"
              Img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                </svg>
              }
            >
              <Link href="https://goo.gl/maps/j8VvkjupjGjQ5SB49">
                Av. Ézio Cardoso da Fonseca, 68 - Jardim Esperança, Cabo Frio -
                RJ, 28921-000
              </Link>
            </InfoContact>
            <InfoContact
              title="Whatsapp"
              Img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              }
            >
              <Link href="https://api.whatsapp.com/send?phone=+5522999722326">
                (22) 99972-2326 /
              </Link>
              <Link href="tel:552220410568">(22) 2041-0568</Link>
            </InfoContact>
            <InfoContact
              title="E-mail"
              Img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              }
            >
              <Link href="mailto:graficaimpactojardim@gmail.com">
                graficaimpactojardim@gmail.com
              </Link>
            </InfoContact>
            <InfoContact
              title="Horário"
              Img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
              }
            >
              <Link href="https://impactovisual.vercel.app/">
                Segunda à sexta-feira de 9h às 18h30 e Sábado de 9h à 13h
              </Link>
            </InfoContact>
            <S.socialContainer>
              <Link
                href={'https://www.facebook.com/graficarapida.impactovisual/'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/impactograficarapida/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </Link>
            </S.socialContainer>
          </div>
          {/* <Forms onSubmit={handleSubmit}>
            <div>
              <InputText id="name" placeholder="Seu Nome" required={true} />
              <InputEmail
                id="email"
                placeholder="mail@mail.com"
                required={true}
              />
            </div>
            <InputText id="subject" placeholder="Assunto" required={true} />
            <TextArea
              id="messagen"
              placeholder="Digite sua Menssagem"
              required={true}
            />
            <Button
              id="btn-contact"
              placeholder="Enviar"
              width="50%"
              fontSize="1rem"
              color="#fff"
              backgroundColor="#dd262b"
            />
            <InforMsg id="msgInfor" text={submited[0]} color={submited[1]} />
          </Forms> */}
        </S.middle>
        <S.bottom></S.bottom>
        <S.copy>
          <p>
            &copy; {Year} - Todos os direitos reservados a -
            <Link href={'https://www.unikcabofrio.com.br/'}>
              Unik Cabo Frio
            </Link>
          </p>
        </S.copy>
      </S.container>
    </>
  )
}

export default Contato
