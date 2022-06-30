export default function POST(req, res) {
  console.log(req.body)
  return res.status(200).json({ mesage: "foi pego" })
}