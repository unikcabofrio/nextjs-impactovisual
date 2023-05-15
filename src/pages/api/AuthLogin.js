export default async (req, res) => {
  // eslint-disable-next-line no-undef
  const keyTrue = process.env.AUTH_LOGIN
  const value = req.body.valueKey
  if (keyTrue == value) {
    return res.status(200).json({ result: true })
  }
  return res.status(200).json({ result: false })
}
