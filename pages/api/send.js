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

const dirPath = './public/uploads'

const deleteFiles = () => {

  fs.readdir(dirPath, function (err, files) {

    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    console.log(files)

    const deleteFile = (file) => file !== '.gitkeep' && fs.unlinkSync(`${dirPath}/${file}`)

    files.forEach(deleteFile)

  })
}

export default async function handler(req, res) {
  const isPost = req.method

  if (isPost !== 'POST') {
    res.status(405).send("method unathorized")
    return
  }


  const body = await handleData(req)
  const message = await createMessage(body)

  // deleteFiles()

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

const handleData = (req) => {
  const form = formidable({
    uploadDir: dirPath,
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

const createMessage = (body) => {

  const message = Object.keys(body).reduce((acc, item) => {
    let next = `<div style="padding: 5px">${item}: <strong style="font-size: 16px">${body[item]}</strong></div>`

    return (
      acc ? `${acc} ${next}` : `${next}`
    )
  }, "")

  const getFiles = fs.readdir(dirPath, function (err, files) {
    if (err) throw err

    return files.filter(file => file !== '.gitkeep')

  })

  const attachments = getFiles.map(file => (
    {
      content: `${fs.readFileSync(file.path).toString("base64")}`,
      filename: `${file.name}`,
      type: "image/png",
      disposition: "attachment",
      contentId: "imageDocument"
    }
  ))

  return {
    to: ['alonsomaringa@gmail.com', 'alonso.mga@blokton.com.br', 'jrnalves@gmail.com'],
    from: 'jr.junior@live.com',
    subject: `Formulario do ${body.Nome}`,
    text: 'Formulario de dados',
    html: `<div>${message}</div>`,
    attachments: attachments
  }
}