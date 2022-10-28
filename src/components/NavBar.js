import {useEffect,useState} from 'react'
import jQuery from 'jquery'
import JSON from '../json/padrao.json'

export default function Navbar(props) {

    const [jsonTypeResponse,setjsonTypeResponse] = useState(JSON.navbar)
    const [jsonTypeDefault,setjsonTypeDefault] = useState(JSON.navbarDefault)

    const [navBarRespons,setnavBarRespons] = useState('ul-hide')
    const [imgLogo,seimgLogo] = useState('/assets/logo.webp')

    const onClicknbr = () =>{
        navBarRespons == 'ul-hide' ? setnavBarRespons('ul-show') : setnavBarRespons('ul-hide')
    }

    function ClicknavBar(e){
        const ul = document.getElementById('navBar-default')
        for (let index = 0; index < ul.children.length; index++) {
            const element = ul.children[index];
            element.classList.remove('active')
        }
        e.target.localName == 'a' ? resolvenavbar(ul,e.target.hash) : e.target.classList.add('active');
        
    }

    function resolvenavbar(ul,href){
        
        for (let index = 0; index < ul.children.length; index++) {
            const element = ul.children[index];
            if(element.children[0].hash == href){
                element.classList.add('active')
            }
        }
    }

    useEffect(() => {

        (function ($) {
            
            props.type == 'contrato' ? setjsonTypeResponse(JSON.navbarContrato) : setjsonTypeDefault(JSON.navbar)
            props.type == 'contrato' ? setjsonTypeDefault(JSON.navbarContrato) : setjsonTypeDefault(JSON.navbarDefault)
        
            var jElement = $('.navBar-Respons');
            var jElement_ = $('.navBar-Default');

            $(window).scroll(function() {
                if($(window).scrollTop() > 50) {
                    jElement.css({
                        'box-shadow':'0px 0px 20px 0px rgb(0 0 0 / 10%)',
                    });
                    jElement_.css({
                        'box-shadow':'0px 0px 20px 0px rgb(0 0 0 / 10%)',
                        'background-color':'rgb(255 255 255 / 100%)',
                    });
                }else{
                    jElement.css({
                        'box-shadow':'0px 0px 20px 0px rgb(0 0 0 / 0)',
                    });
                    jElement_.css({
                        'box-shadow':'0px 0px 20px 0px rgb(0 0 0 / 0)',
                        'background-color':'rgb(255 255 255 / 0)',
                    });
                }
            });
        })(jQuery);

        const isHover = e => e.parentElement.querySelector(':hover') === e;
        const imgLogo = document.getElementById('logo');
        document.addEventListener('mousemove', function checkHover() {
            const hovered = isHover(imgLogo);
            if (hovered !== checkHover.hovered) {
                hovered ? seimgLogo('/assets/logo.webp') : seimgLogo('/assets/logo.webp')
              checkHover.hovered = hovered;
            }
          });
        
    },[jQuery])


    return(
        <div>
            <div className="navBar-Default">
                <div className="logo">
                    <img src={imgLogo} alt="Menu" id="logo"/>
                </div>
                <ul id="navBar-default" onClick={ClicknavBar}>
                    {jsonTypeDefault.map((items, index_)=> (
                        <li key={index_} className={items.class}>
                            <a href={items.href}>{items.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navBar-Respons">
                <div className="logo">
                    <img src="/assets/logo.webp" alt="Menu"/>
                    <span className="material-symbols-outlined" onClick={onClicknbr}>menu</span>
                </div>
                <ul className={navBarRespons}>
                    {jsonTypeResponse.map((items, index_)=> (
                        <li key={index_}>
                            <a href={items.href} onClick={onClicknbr}>{items.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}