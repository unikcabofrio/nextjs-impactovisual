import './style.css'

import Imagem from '@/components/image'
import Img from '@/assets/nodata.png'

export default function NoData(){
    return(
        <div className='noData'>
            <Imagem src={Img}/>
           <h2>Opss!</h2>
           <p>Não encontramos nenhum dados no Banco de Dados</p>
        </div>
    )
}