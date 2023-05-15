import mysql from 'mysql2'

export default async (req, res) => {
  try {
    const connection = mysql.createConnection({
      // eslint-disable-next-line no-undef
      host: process.env.RAILWAY_MYSQLHOST,
      // eslint-disable-next-line no-undef
      user: process.env.RAILWAY_MYSQLUSER,
      // eslint-disable-next-line no-undef
      port: process.env.RAILWAY_MYSQLPORT,
      // eslint-disable-next-line no-undef
      password: process.env.RAILWAY_MYSQLPASSWORD,
      // eslint-disable-next-line no-undef
      database: process.env.RAILWAY_MYSQLDATABASE
    })

    connection.connect()

    connection.query(req.body.query, (error, results) => {
      if (error) {
        return res.status(200).json(error)
      } else {
        res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
        return res.status(200).json(results)
      }
    })

    connection.end()
  } catch (error) {
    return res.status(error.statusCode || 500).json(error)
  }
}
