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
  const message = await createMessage(body)


  sgMail.send(message)
    .then(response => {
      res.send("ok")
      fs.unlinkSync('./public/uploads/docPessoal.jpg')
      fs.unlinkSync('./public/uploads/docAddress.jpg')
      fs.unlinkSync('./public/uploads/docSalario.jpg')
    })
    .catch(err => {
      fs.unlinkSync('./public/uploads/docPessoal.jpg')
      fs.unlinkSync('./public/uploads/docAddress.jpg')
      fs.unlinkSync('./public/uploads/docSalario.jpg')
      res.send(err)
    })
}

const handleData = (req) => {
  const form = formidable({ uploadDir: './public/uploads' })

  return new Promise(
    function (resolve, reject) {

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err)

        const renameFiles = (key) => {
          const oldPath = files[key].filepath
          const newPath = `./public/uploads/${key}.jpg`
          fs.rename(oldPath, newPath, (err) => err)
        }

        Object.keys(files).forEach(renameFiles)
        resolve(fields)
      })
    }
  )
}

const createMessage = (body) => {

  const message = Object.keys(body).reduce((acc, item) => {
    let next = `<div style="padding: 5px">${item}: <strong style="font-size: 16px">${body[item]}</strong></div>`

    return (
      acc ? `${acc} ${next}` : `${next}`
    )
  }, "")

  const docsExist = [
    {
      name: 'docPessoal.jpg',
      path: './public/uploads/docPessoal.jpg'
    },
    {
      name: 'docAddress.jpg',
      path: './public/uploads/docAddress.jpg'
    },
    {
      name: 'docSalario.jpg',
      path: './public/uploads/docSalario.jpg'
    },
  ]

  const getAttachments = docsExist.filter(item => fs.existsSync(item.path))

  const attachments = getAttachments.map(doc => (
    {
      content: `${fs.readFileSync(doc.path).toString("base64")}`,
      filename: `${doc.name}`,
      type: "image/png",
      disposition: "attachment",
      contentId: "imageDocument"
    }
  ))

  return {
    to: 'jrnalves@gmail.com',
    from: 'jr.junior@live.com',
    subject: `Formulario do ${body.Nome}`,
    text: 'Formulario de dados',
    html: `<div>${message}</div>`,
    attachments: attachments
  }
}