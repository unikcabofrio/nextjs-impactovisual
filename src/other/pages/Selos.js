import {useEffect,useState} from 'react'
import jQuery from 'jquery';
import { Slide } from 'react-slideshow-image';

export default function Index(props) {

    const CountImgArray = 18
    const [ImgArray, setImgArray] = useState([])
   
    useEffect(() => {

        (
          function ($) {
            $( 'document' ).ready(function() {
              const ImgArraylist = []
              for (let index = 1; index < CountImgArray; index++) {
                ImgArraylist.push({
                  url:"/assets/selos/img"+index+".webp",
                  caption: 'Slide '+index
                })
                
              }
              setImgArray(ImgArraylist)
             });
          }
        )
        (jQuery);
        
    },[])

  return (
    <>
     <div className='ml-selos' id={props.id}>
            <div className='ml-top'> 
              <h1>NOSSOS SELOS DE QUALIDADE</h1>
              <p>
                A On Byte® é uma rede de educação profissional. que há mais de 20 anos, 
                investe no futuro do país. Premiada pela ABF e Revista Pequenas Empresas Grandes 
                Negócios, da editora Globo
              </p>
            </div>
            <div className='ml-middle'>
              <Slide
                duration={1000}
                transitionDuration={500}
                arrows={false}
                responsive={[
                  {breakpoint: 1000,settings: {slidesToShow: 10,slidesToScroll:1}},
                  {breakpoint: 600,settings: {slidesToShow: 5,slidesToScroll:1}},
                  {breakpoint: 0,settings: {slidesToShow: 1,slidesToScroll:1}}
                ]}
              >
                {ImgArray.map((ImgArray, index)=> (
                  <img key={index} src={ImgArray.url} alt={ImgArray.caption} />
                ))} 
              </Slide>
            </div>
          </div>
    </>
  )
}
    