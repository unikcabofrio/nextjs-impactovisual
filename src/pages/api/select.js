import mysql from 'mysql2'

const connection = mysql.createConnection({
  // eslint-disable-next-line no-undef
  host: process.env.GC_MYSQLHOST,
  // eslint-disable-next-line no-undef
  user: process.env.GC_MYSQLUSER,
  // eslint-disable-next-line no-undef
  port: process.env.GC_MYSQLPORT,
  // eslint-disable-next-line no-undef
  password: process.env.GC_MYSQLPASSWORD,
  // eslint-disable-next-line no-undef
  database: process.env.GC_MYSQLDATABASE
})

connection.connect((err) => {
  if (err) return err
  return true
})

export default async function handler(req, res) {
  try {
    const { table } = req.body

    connection.query(`SELECT * FROM ${table}`, (err, results) => {
      if (err) return res.status(200).json(err)
      res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
      return res.status(200).json(results)
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json(error)
  }
}
