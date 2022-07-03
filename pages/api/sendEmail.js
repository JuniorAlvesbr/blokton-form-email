import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function POST(req, res) {
  const isPost = req.method

  if (isPost !== 'POST') {
    res.status(405).json({ mesage: 'Method not allowed' })
    return
  }

  const body = req.body

  const message = await createMessage(body)

  sgMail
    .send(message)
    .then((response) => {
      res.status(200).json({ message: response[0].statusCode })
    })
    .catch((error) => {
      res.status(500).json({ message: error })
    })
}

const createMessage = (body) => {
  const message = Object.keys(body).reduce((acc, item) => {
    let next = `<div style="padding: 5px">${item}: <strong style="font-size: 16px">${body[item]}</strong></div>`

    return (
      acc ? `${acc} ${next}` : `${next}`
    )
  }, "")

  return {
    to: 'jrnalves@gmail.com',
    from: 'jr.junior@live.com',
    subject: `Formulario do ${body.name}`,
    text: 'Formulario de dados',
    html: `<div>${message}</div>`
  }
}