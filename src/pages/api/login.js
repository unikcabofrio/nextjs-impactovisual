import mysql from 'mysql2'

export default async function handler(req, res) {
  try {
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

    connection.connect()

    connection.query(
      // eslint-disable-next-line no-undef
      `${process.env.SQL_LOGIN} '${req.body.token}'`,
      (error, results) => {
        if (error) {
          return res.status(200).json(error)
        } else {
          return res.status(200).json(results)
        }
      }
    )

    connection.end()
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode || 500).json(error)
  }
}
