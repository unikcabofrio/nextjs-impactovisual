import NoData from "./noData"
import TableProdutos from "./produtos"

export default function PainelAtivo({namePanel}){
    function returnScreen(nameScreen){
        switch (nameScreen) {
            case 'produtos':
               return <TableProdutos nametable={nameScreen}/>
        
            default:
               return <NoData/>
        }
    }
    return(
        <>
            {returnScreen(namePanel)}
        </>
    )
}