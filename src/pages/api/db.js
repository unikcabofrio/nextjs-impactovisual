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

export default connection
