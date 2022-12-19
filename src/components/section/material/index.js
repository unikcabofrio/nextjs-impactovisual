// Material
import { useEffect, useState } from 'react'
import * as S from './style'

// Import Components
import JMaterial from 'Json/material.json'
import { TitlesTop } from 'components/text'

function Material({ id }) {
  const [divs] = useState(JMaterial)
  let CountBox = 5

  useEffect(() => {
    setRandoZap(Math.floor(Math.random() * Whatsapp.length))
    if (window.screen.width > 800) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      CountBox = 8
    }
    showDivs()
  })

  // function handleClick() {
  //   var count = 0
  //   const items = document.getElementById('ItemsDivs').children

  //   for (let index = 0; index < items.length; index++) {
  //     const element = items[index]

  //     if (element.className != 'none') {
  //       if (!element.className.includes('showdivs')) {
  //         element.classList.add('showdivs')
  //         count++
  //         if (count == CountBox) break
  //       }
  //     }
  //   }
  // }

  function showDivs() {
    const items = document.getElementById('ItemsDivs').children
    for (let index = 0; index < CountBox; index++) {
      const element = items[index]

      if (element.className != 'none') {
        element.classList.add('showdivs')
      }
    }
  }

  const Whatsapp = ['22981591576', '22992158462']
  const WhatsappJd = ['22999722326']
  const [RandoZap, setRandoZap] = useState(0)

  return (
    <>
      <S.container id={id}>
        <TitlesTop
          titles={'NOSSOS MATERIAIS'}
          description={
            'Esses sãos os produtos vendidos em nossas lojas, caso não encontre o que procura fique a vontade para entrar em contato para ter mais informações.'
          }
        />
        <S.containerBox>
          <S.BoxGrid id="ItemsDivs">
            {divs.map((items, key) => {
              return (
                <S.Boxs key={key}>
                  <img src={'/assets/material/' + items.img + '.webp'} />
                  <h3>
                    <strong>MATERIAL DE</strong>
                    {items.title}
                  </h3>
                  <p>{items.description}</p>
                  <S.Table>
                    <S.TitleTable>
                      <p>Tipos</p>
                      <p>Preços</p>
                    </S.TitleTable>
                    <S.InfoTable>
                      {items.modelos.map((itensmodelos, index_) => (
                        <div key={index_}>
                          <p className="drescrip">{itensmodelos.descri}</p>
                          <p className="price">R$ {itensmodelos.price}</p>
                        </div>
                      ))}
                    </S.InfoTable>
                  </S.Table>
                  <br />
                  <S.Contatos>
                    <a
                      href={
                        'https://api.whatsapp.com/send?phone=5522' +
                        Whatsapp[RandoZap] +
                        '&text=Desejo saber mais sobre o ' +
                        items.title
                      }
                    >
                      Cabo Frio
                    </a>
                    <a
                      href={
                        'https://api.whatsapp.com/send?phone=5522' +
                        WhatsappJd[0] +
                        '&text=Desejo saber mais sobre o ' +
                        items.title
                      }
                    >
                      Jardim Esperança
                    </a>
                  </S.Contatos>
                </S.Boxs>
              )
            })}
          </S.BoxGrid>
          <br className="none" />
          {/* <button onClick={handleClick} className="none">
            Ver Mais +
          </button> */}
        </S.containerBox>
      </S.container>
    </>
  )
}

export default Material
