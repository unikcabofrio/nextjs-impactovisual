import Image from "next/image"
import {useEffect,useState} from 'react'
import jQuery from 'jquery'

export default function Index() {
  const Whatsapp = ['22981591576','22992158462','22999722326']
  const [RandoZap,setRandoZap] = useState(0);
  
  useEffect(() => {
    (function ($) {})(jQuery);
    setRandoZap(Math.floor(Math.random() * 3))
  },[jQuery])

  return (
    <>
      <div className='wp-app'>
        <a href={'https://wa.me/55'+Whatsapp[RandoZap]}>
          <Image src="/assets/wp-icon.webp" alt="Whatsapp-img" width={'30px'} height={'30px'}/>
          <p>FALE CONOSCO</p>
        </a>
      </div>
    </>
  )
}
    