export default async function handler(req,res) {
    try{
        const url = process.env.SHEET_ID
        const response = await fetch(url+'?SheetByName=products')
        const data = await response.json()
        
        res.status(200).json(data)
    } catch{
        res.status(500).json({erro:'Erro no servidor'})
    }
}