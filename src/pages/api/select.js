import db from 'lib/db'

export default async function handler(req, res) {
  try {
    const { table } = req.body

    db.query(`SELECT * FROM ${table}`, (err, results) => {
      if (err) return res.status(200).json(err)
      res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
      return res.status(200).json(results)
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json(error)
  }
}
