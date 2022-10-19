import {useEffect} from 'react';

export default function Index(props) {

  let linkzap = "https://api.whatsapp.com/send?phone=5522974002820&text="

  const ImgArraylist = [

    {url:"/assets/home/img (2).webp",title:"AUTO CAD", childrenHtml:
      <div className='hl-slide-top'>
        <h1> CURSO DE </h1>
        <h2> AUTO CAD </h2>
        <div className='hl-slide-flex hl-slide-space'>
          <div>
            <p>PERSONAL CAD</p>
            <p> EDIFICAÇÕES DE PROJETOS</p>
            <p>DESIGN DE INTERIORES</p>
          </div>
          <img src={"/assets/home/prom-auto.webp"} alt="AutoCad"/>
        </div>
        <a href={linkzap} className="button violet">
          <b>FALE CONOSCO</b>
        </a>
      </div>
    },

    {url:"/assets/home/img (3).webp",title:"INGLÊS", childrenHtml:
      <div className='hl-slide-top'>
        <h1> CURSO DE </h1>
        <h2> INGLÊS </h2>
        <div className="Cambridge_style">
          <h4> We prepare fo</h4>
          <div id="seta">
            <h2> Cambridge </h2>
          </div>
          <h3> English Qualifications </h3>
        </div>
        <a href={linkzap} className="button violet">
          <b>FALE CONOSCO</b>
        </a>
      </div>
    },

    {url:"/assets/home/img (4).webp",title:"INFORMÁTICA", childrenHtml:
      <div className='hl-slide-top'>
        <h1> CURSO DE </h1>
        <h2> INFORMÁTICA</h2>
        <div className='hl-slide-flex'>
          <div>
            <p>ADULTO</p>
            <p>KIDS</p>
            <p>MELHOR IDADE</p>
          </div>
        </div>
        <a href={linkzap} className="button violet">
          <b>FALE CONOSCO</b>
        </a>
      </div>
    },

    {url:"/assets/home/img (5).webp",title:"PUBLICIDADE", childrenHtml:
      <div className='hl-slide-top'>
        <h1> CURSO DE </h1>
        <h2> PUBLICIDADE </h2>
        <div className='hl-slide-flex'>
          <div>
            <p>DESIGNER GRÁFICO</p>
            <p>CRIAÇÃO E EDIÇÃO DE VÍDEO</p>
            <p>MARKETING DIGITAL</p>
          </div>
        </div>
        <a href={linkzap} className="button violet">
          <b>FALE CONOSCO</b>
        </a>
      </div>
    },

    {url:"/assets/home/img (1).webp",title:"CAMPANHA",  childrenHtml:<div className='hl-slide-top'></div>},
  ]

  useEffect(() => {

    var proximaImagem = 0;
    var zIndexAtual = 0;
    var imagens = document.getElementById("container-slide").children;
 
    function avancarImagem(){
      var imagem = imagens[proximaImagem];
      imagem.style.zIndex = ++zIndexAtual;
      imagem.style.marginLeft = "0%";
    
        proximaImagem++;
        if(proximaImagem >= imagens.length){
            proximaImagem = 0;
        }
  
        setTimeout(resetarImagens,500);
    }
    
    function resetarImagens(){
        var imagemVisivel = proximaImagem -1;
    
        if(imagemVisivel < 0){
            imagemVisivel = imagens.length - 1;
        }
    
        for(var i = 0; i < imagens.length; i++){
            if(i != imagemVisivel){
                imagens[i].style.marginLeft = "100%";
            }
        }
    }
    
    setInterval(avancarImagem,5000);
    
  },[])
 

  return (
    <>
      <div className='header-layout' id={props.id}>
        <div className='hl-slide-container' id="container-slide">
          {ImgArraylist.map((ImgArray, index)=> (
            <div className='hl-slide' key={index}>
              {ImgArray.childrenHtml}
              <img src={ImgArray.url} alt={ImgArray.title}/>
            </div>
          ))} 
        </div>
        <img src={ImgArraylist[ImgArraylist.length - 1].url} alt={ImgArraylist[ImgArraylist.length - 1].title} id={"slide-fixed"} />
      </div>
    </>
  )
}
    