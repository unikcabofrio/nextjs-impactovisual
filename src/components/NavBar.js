import {useEffect} from 'react'
import jQuery from 'jquery'

export default function Index() {

    useEffect(() => {
        (function ($) {
            var jElement = $('.navbar');

            $(window).scroll(function() {
                if($(window).scrollTop() > 100) {
                    jElement.css({
                        'box-shadow':'0px 0px 20px 0px rgb(0 0 0 / 10%)',
                    });
                }else{
                    jElement.css({
                        'box-shadow':'0px 0px 20px 0px rgb(0 0 0 / 0)',
                    });
                }
            });
        })(jQuery);
        
    },[jQuery])

    function ClicknavBar(e){
        const ul = document.getElementById('navbar-ul')
        for (let index = 0; index < ul.children.length; index++) {
            const element = ul.children[index];
            element.children[0].classList.remove('active-navbar')
        }
        e.target.classList.add('active-navbar')
    }
    

    return (
    <div className={"navbar"}>
        <a href={""} className="logo">
            <img src={"/assets/logo.webp"} alt='logo'/>
        </a>
        <ul id='navbar-ul' onClick={ClicknavBar}>
            <li><a href='#Home' className='active-navbar'>Home</a></li>
            <li><a href='#Material'>Material</a></li>
            <li><a href='#Modelos'>Modelos</a></li>
            <li><a href='#Sobre'>Lojas</a></li>
            <li><a href='#Contato'>Contato</a></li>
        </ul>
    </div>
    )
}
