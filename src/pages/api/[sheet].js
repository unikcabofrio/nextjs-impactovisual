export default async function handler(req, res) {

    const sheet_url = process.env.SHEET_URL
    const sheet_id = process.env.SHEET_ID
    const token = process.env.SHEET_TOKEN
    const { sheet } = req.query;

    const url = `${sheet_url}/${sheet_id}/exec`

    try {

        if (req.method === 'GET') {

            const response = await fetch(url+`?SheetByName=${sheet}&tokenSheet=${token}`)
            const data = await response.json()
            return res.status(200).json(data)

        }
    
        else if (req.method === 'POST') {
            
            const {indexRow,valueInsert} = req.body;

            const jsonString = JSON.stringify(valueInsert);
            const encodedArray = jsonString.split(',').map(value => encodeURIComponent(value));
            
            const urlInsert = url + `?SheetByName=${sheet}&tokenSheet=${token}&indexRow=${indexRow}&valueInsert=${encodedArray}`;

            const response = await fetch(urlInsert, {method: req.method})
            const data = await response.json()
            return res.status(200).json(data)
        }
    
        return res.status(404).json({ message: 'method not found' });
    } catch (error) {
        return res.status(500).json({erro:'Erro no servidor',message:error.message})
    }

    
  }