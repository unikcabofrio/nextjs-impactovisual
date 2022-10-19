export default function Index(props) {

  let linkzap = "https://api.whatsapp.com/send?phone=5522974002820&text="

  const CursList = [
    {title:"INFORMÁTICA",description:"Windows • Word • Excel • Power Point • Internet"},
    {title:"ESPECIALISTA EM EXCEL",description:"Excel • Excel Avançado"},
    {title:"FARMÁCIA",description:"Operador de Caixa • Excel • Atendente de Farmácia"},
    {title:"ADMINISTRAÇÃO",description:"Secretariado • Gestão de Pessoas • Matemática Financeira • Contabilidade • Propaganda e Marketing"},
    {title:"DESIGNER GRÁFICO",description:"Corel Draw • In Design • Photoshop • Illustrator"},
    {title:"INGLÊS",description:"Inglês Cambridge"},
    {title:"PROJETOS E EDIFICAÇÕES",description:"Auto Cad I • Auto Cad II • 3DS max II	• Sketchup • MS Project • Excel • Excel Avançado • Revit"},
    {title:"EDIÇÃO DE VÍDEOS",description:"After Effects • Premiere • Photoshop"},
    {title:"ANALISTA DASHBOARD",description:"Excel • Excel Avançado • Power BI"},
    {title:"CRIAÇÃO DE GAMES",description:"3DS Max I • HTML 5 + CSS 3 • Games I c/ HTML5 • UDK • Games II Unity 3D"},
    {title:"MARKETING DIGITAL",description:"Corel Draw • Photoshop • Excel • Propaganda e Marketing • Marketing Digital"},
    {title:"POWER BI",description:"Power BI"},
    {title:"SOCIAL MÍDIA",description:"Criação de conteúdo para redes sociais • Marketing digital • Photoshop • Internet • After effects • Youtube"},
    {title:"EMPREENDEDORISMO",description:"Excel • Gestão de Pessoas • Empreendedorismo • Administração financeira"},
    {title:"KIDS",description:"Windows • Word • Excel • Power Point • Internet"},
    {title:"MELHOR IDADE",description:"Windows • Word • Excel • Power Point • Internet"},
    {title:"OP. CAIXA",description:"Operador de Caixa • Técnicas Administrativas c/ Logística • Excel"},
    {title:"LIDERANÇA EMPRESARIAL",description:"Excel • Gestão de Pessoas • Administração Financeira • Liderança Empresarial"},
    {title:"LOGÍSTICA",description:"Administração Financeira • Técnicas Administrativas c/ Logística • Excel • Logística"},
    {title:"HOTELARIA",description:"Secretariado • Gestão de Pessoas • Hotelaria • Turismo"},
    {title:"SECRETARIADO",description:"Windows • Word • Secretariado • Excel"},
    {title:"YOU TUBER",description:"Photoshop • After Effects • Premiere •YouTube"},
    {title:"DESENVOLVEDOR FRONT-END",description:"HTML 5+CSS3 • Lógica de programação • Javascript • Photoshop • Java 1"},
    {title:"DESENVOLVEDOR BACK-END",description:"Java II • Banco de dados • PHP • C# 1 • Lógica orientada a objetos"},
    {title:"DESENVOLVEDOR FULL STACK",description:"Lógica de programação • HTML-CSS • PHP • C# 1 e 2 • Banco de dados • Java 1 e 2 • Photoshop • Lógica de programação orientada a objetos"},
    {title:"DESENVOLVERDOR WEB",description:"HTML 5 + CSS3 • Log. Programação • Java Web • Javascript • PHP • Banco de dados"},
    {title:"WEB DESIGN",description:"Photoshop • HTML 5 + CSS3 • E-Comerce • Wordpress"},
    {title:"PROGRAMADOR MOBILE",description:"Java • Java Web • Java Script • Programador Mobile – Android"},
  ]

  return (
    <>
      <div className='ml-cursos' id={props.id}>
        <div className='ml-cursos-top'> 
          <h1>NOSSOS CURSOS</h1>
          <p>
            Não espere arrumar um emprego para se profissionalizar, profissionalize-se 
            para arrumar um emprego. A On Byte Cabo Frio oferece mais de 70 cursos para 
            que você possa estar pronto quando a oportunidade aparecer.
          </p>
        </div>
        <div className='ml-cursos-middle'> 
          <div className='ml-cm-grid'> 
            {CursList.map((ImgArray, index)=> (
              <div key={index} className='ml-cm-items'> 
                <img src={"/assets/cursos/"+ImgArray.title+".webp"} alt={ImgArray.title} />
                <h3><strong>CURSO DE </strong>{ImgArray.title}</h3>
                <p>{ImgArray.description}</p>
                <a href={linkzap+"Desejo saber mais sobre o curso de "+ImgArray.title}>SABER +</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
    