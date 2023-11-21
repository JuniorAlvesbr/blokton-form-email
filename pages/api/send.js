import formidable from 'formidable'
import fs from 'fs'
import { Resend } from 'resend'

// Config API KEY
const resend = new Resend(`${process.env.RESEND_API_KEY}`)

// Set bodyParse to false for nextjs
export const config = {
  api: {
    bodyParser: false,
  },
}

//config Upload Path Dir
const uploadPathDir = './public/uploads'

export default async function post(req, res) {
  const isPost = req.method

  if (isPost !== 'POST') {
    res.status(405).send("method unathorized")
    return
  }

  const body = await handleBody(req)
  const message = await createMessage(body)

  resend.emails.send(message)
    .then(response => {
      deleteFiles()
      res.send(response)
    })
    .catch(err => {
      deleteFiles()
      res.send(err)
    })
}

const handleBody = (req) => {
  const form = formidable({
    uploadDir: uploadPathDir,
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

  const attachedFiles = await files.map(file => (
    {
      filename: file,
      content: fs.readFileSync(`${uploadPathDir}/${file}`)
    }
  ))

  return {
    from: 'Formulario <jotar@junioralves.dev>',
    to: 'jrnalves@gmail.com',
    subject: `Formulario do ${body.Nome}`,
    text: 'Formulario de dados',
    html: `<div>${message}</div>`,
    attachments: attachedFiles
  }
}

const getFiles = () => {
  return new Promise(
    function (resolve, reject) {
      fs.readdir(uploadPathDir, function (err, files) {
        if (err) return reject(err)

        const filter = files.filter(file => file !== '.gitkeep')

        resolve(filter)
      })
    }
  )
}

const deleteFiles = () => {
  fs.readdir(uploadPathDir, function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    const deleteFile = (file) => file !== '.gitkeep' && fs.unlinkSync(`${uploadPathDir}/${file}`)

    files.forEach(deleteFile)
  })
}