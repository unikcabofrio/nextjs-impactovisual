import { createHash } from 'crypto';
import { generateToken } from '@/utils/authUtils'

export default async function handler(req, res) {

    const sheet_url = process.env.SHEET_URL
    const sheet_id = process.env.SHEET_ID
    const token = process.env.SHEET_TOKEN
    const tokenSecurity = process.env.JWT_TOKEN

    const url = `${sheet_url}/${sheet_id}/exec`

    try {

        if (req.method === 'POST') {

            const userData = JSON.parse(req.body)

            if (!userData.email && !userData.password) {
                return res.status(200).json({ message: 'E-mail e Senha não podem estár vazios' })
            }

            const email = userData.email
            const md5Password = createHash('md5').update(userData.password).digest('hex');

            const response = await fetch(url + `?SheetByName=loginUser&tokenSheet=${token}`)
            const data = await response.json()

            for (const usuario of data.data) {
                if (email === usuario.email && md5Password === usuario.password) {
                    const token = generateToken({
                        email: email,
                        password: md5Password
                    }, tokenSecurity);
                   
                    return res.status(200).json({ message: 'Login autorizado',auth: token})
                }
            }

            return res.status(200).json({ message: 'Login não autorizado' })

        }

        return res.status(404).json({ message: 'Método não encontrado' });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro no servidor', message: error.message })
    }


}