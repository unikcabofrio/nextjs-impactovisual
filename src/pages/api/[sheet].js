export default async function handler(req, res) {

    const sheet_url = process.env.SHEET_URL
    const sheet_id = process.env.SHEET_ID
    const { sheet } = req.query;

    const url = `${sheet_url}/${sheet_id}/exec`

    try {

        if (req.method === 'GET') {

            const response = await fetch(url+`?SheetByName=${sheet}`)
            const data = await response.json()
            res.status(200).json(data)

        }
    
        else if (req.method === 'POST') {
            
            const {indexRow,valueInsert} = req.body;

            const jsonString = JSON.stringify(valueInsert);
            const encodedArray = jsonString.split(',').map(value => encodeURIComponent(value));
            
            const urlInsert = url + `?SheetByName=${sheet}&indexRow=${indexRow}&valueInsert=${encodedArray}`;

            const response = await fetch(urlInsert, {method: req.method})
            const data = await response.json()
            res.status(200).json(data)
        }
    
        res.status(404).json({ message: 'method not found' });
    } catch (error) {
        res.status(500).json({erro:'Erro no servidor',message:error.message})
    }

    
  }