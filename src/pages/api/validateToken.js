import { verifyToken } from '@/utils/authUtils'

export default async function handler(req, res) {

    const tokenSecurity = process.env.JWT_TOKEN

    try {

        if (req.method === 'POST') {
            const {token} = JSON.parse(req.body)
            const decodedToken = verifyToken(token,tokenSecurity);
            return res.status(200).json({ result: decodedToken })
        }
        return res.status(404).json({ result: false });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro no servidor', message: error.message })
    }


}