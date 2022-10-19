import {useEffect} from 'react'
import jQuery from 'jquery'

export default function Index() {

    useEffect(() => {
        (function ($) {})(jQuery);
        
    },[jQuery])

    return (
    <div className={"header"}>
        <h5>Rayan R Dutra</h5>
        <h1>Especialista em Next.js</h1>
        <p>Sites 100% direcionados a divulgações de serviços ou produtos!</p>
        <a href={'https://wa.me/5522992846675'}>Pedir Orçamento</a>
    </div>
    )
}
