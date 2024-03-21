export default async function handler(req, res) {
    try{
        const posts = []
        const url = process.env.SHEET_ID
        const response = await fetch(url)
        const text = await response.text()
        const data = JSON.parse(text.substr(47).slice(0, -2)).table.rows
    
        for (const row of data) {
            const element = row.c
            const json_element = {
                name_product: element[0].v,
                descript_product: element[1].v,
                image_product: element[2].v,
                model_product: []
            }
    
            for (let i = 3; i <= 50; i += 2) {
                const i_ = i + 1
                if (element[i] != null) {
                    json_element.model_product.push({
                        descri: element[i].v,
                        price: element[i_].v
                    })
                } else {
                    break
                }
            }
            posts.push(json_element)
        }
        res.status(200).json({ posts:posts })
    } catch{
        res.status(500).json({erro:'Erro no servidor'})
    }
   

    
}