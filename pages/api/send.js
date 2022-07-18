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

const pathDir = './public/uploads'

export default async function post(req, res) {
  const isPost = req.method

  if (isPost !== 'POST') {
    res.status(405).send("method unathorized")
    return
  }

  const body = await handleBody(req)
  const message = await createMessage(body)

  sgMail.send(message)
    .then((response) => {
      res.send(response)
      deleteFiles()
    })
    .catch(err => {
      deleteFiles()
      res.send(err)
    })
}

const handleBody = (req) => {
  const form = formidable({
    uploadDir: pathDir,
    keepExtensions: true,
  })

  return new Promise(
    function (resolve, reject) {

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err)

        resolve(fields)
      })
    }
  )
}

const createMessage = async (body) => {

  const message = Object.keys(body).reduce((acc, item) => {
    let next = `<div style="padding: 5px">${item}: <strong style="font-size: 16px">${body[item]}</strong></div>`

    return (
      acc ? `${acc} ${next}` : `${next}`
    )
  }, "")

  const files = await getFiles()

  const attachments = files.map(file => (
    {
      content: `${fs.readFileSync(`${pathDir}/${file}`).toString("base64")}`,
      filename: `${file}`,
      type: "image/png",
      disposition: "attachment",
      contentId: "imageDocument"
    }
  ))

  return {
    to: 'jrnalves@gmail.com',
    // to: ['alonsomaringa@gmail.com', 'alonso.mga@blokton.com.br', 'jrnalves@gmail.com'],
    from: 'jr.junior@live.com',
    subject: `Formulario do ${body.Nome}`,
    text: 'Formulario de dados',
    html: `<div>${message}</div>`,
    attachments: attachments
  }
}

const getFiles = () => {
  return new Promise(
    function (resolve, reject) {
      fs.readdir(pathDir, function (err, files) {
        if (err) return reject(err)

        const filter = files.filter(file => file !== '.gitkeep')

        resolve(filter)
      })
    }
  )
}

const deleteFiles = () => {
  fs.readdir(pathDir, function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    const deleteFile = (file) => file !== '.gitkeep' && fs.unlinkSync(`${pathDir}/${file}`)

    files.forEach(deleteFile)
  })
}