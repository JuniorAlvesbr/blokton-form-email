import formidable from 'formidable'
import fs from 'fs'
import sgMail from '@sendgrid/mail'

// Config API KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Set bodyParse to false for nextjs
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  const isPost = req.method

  if (isPost !== 'POST') {
    res.status(405).send("method unathorized")
    return
  }

  await handleData(req)

  res.status(200).send("arquivos enviados")
}

const handleData = async (req) => {
  const form = formidable({ uploadDir: './public/uploads' })

  form.parse(req, (err, fields, files) => {

    const renameFiles = (item) => {
      console.log(item)
      const oldPath = files[item].filepath
      const newPath = `./public/uploads/${item}.jpg`
      fs.rename(oldPath, newPath, (err) => err)
    }

    Object.keys(files).forEach(renameFiles)

    sendMessage(fields)

  })
}

const sendMessage = (body) => {
  const message = createMessage(body)

  sgMail.send(message)
    .then(console.log('mensagem enviada com sucesso'))
    .catch(err => console.log(err))
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
    html: `<div>${message}</div>`,
    attachments: [
      {
        content: `${fs.readFileSync('./public/uploads/docPessoal.jpg').toString("base64")}`,
        filename: "docPessoal.jpg",
        type: "image/jpg",
        disposition: "attachment",
        contentId: "imageDocument"
      },
      {
        content: `${fs.readFileSync('./public/uploads/docAddress.jpg').toString("base64")}`,
        filename: "docAddress.jpg",
        type: "image/jpg",
        disposition: "attachment",
        contentId: "imageDocument"
      },
      {
        content: `${fs.readFileSync('./public/uploads/docSalario.jpg').toString("base64")}`,
        filename: "docSalario.jpg",
        type: "image/jpg",
        disposition: "attachment",
        contentId: "imageDocument"
      },
    ]
  }
}