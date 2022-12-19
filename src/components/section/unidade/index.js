// Unidade
import { useEffect, useState } from 'react'
import * as S from './style'

// Import Components
import { TitlesTop } from 'components/text'

function Unidade({ id }) {
  const [divs] = useState([
    {
      src: '/assets/und/und2.webp',
      description: 'Unidade de São Cristovão | Cabo Frio | RJ'
    },
    {
      src: '/assets/und/und1.webp',
      description: 'Unidade do Jardim Esperança | Cabo Frio | RJ'
    }
  ])

  useEffect(() => {}, [])

  return (
    <>
      <S.container id={id}>
        <TitlesTop
          titles={'IMPACTO VISUAL'}
          description={
            'Diferenciada na produção de produtos, possibilitando o nosso clientes facilidade e agilidade na entrega dos serviços.'
          }
        />
        <S.containerBox>
          {divs.map((items, key) => {
            return (
              <S.Boxs key={key}>
                <img src={items.src} />
                <p>{items.description}</p>
              </S.Boxs>
            )
          })}
        </S.containerBox>
      </S.container>
    </>
  )
}

export default Unidade
