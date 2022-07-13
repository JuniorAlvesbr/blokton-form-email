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

  const body = await handleData(req)
  const message = createMessage(body)

  sgMail.send(message)
    .then(res.status(200).send('ok'))
    .catch(err => res.send(err))
}

const handleData = (req) => {
  const form = new formidable.IncomingForm()
  return new Promise(
    function (resolve, reject) {
      form.uploadDir = './public/uploads'
      form.keepExtensions = true;

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err)
        Object.keys(files).forEach(renameFiles)
        resolve(fields)
      })
    }
  )
}

const renameFiles = (item) => {
  console.log(item)
  const oldPath = files[item].filepath
  const newPath = `./public/uploads/${item}.jpg`
  fs.rename(oldPath, newPath, (err) => err)
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
    subject: `Formulario do ${body.Nome}`,
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
