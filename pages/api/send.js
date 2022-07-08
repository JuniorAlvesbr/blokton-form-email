import formidable from 'formidable'
import fs from 'fs'

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

export default async function handler(req, res) {
  const isPost = req.method
  // console.log(req.body)
  if (isPost !== 'POST') {
    res.status(405).send("method unathorized")
    return
  }

  await handleData(req)

  res.status(200).send("arquivos enviados")
}

const handleData = (req) => {
  const form = formidable({ uploadDir: './public/uploads' })

  form.parse(req, (err, fields, files) => {

    const renameFiles = (item) => {
      const oldPath = files[item].filepath
      const newPath = `./public/uploads/${files[item].newFilename}.jpg`
      fs.rename(oldPath, newPath, (err) => err)
    }

    Object.keys(files).forEach(renameFiles)

    console.log(fields)
  })
}
