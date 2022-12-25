import express from 'express'

import processImage from '../api/images'
const routes = express.Router()

routes.get('/', (req, res) => {
  res.end('main api directory')
})

routes.get('/images', (req, res) => {
  // Extract the values of the needed parameters
  const fileName: string = req.query.filename as string
  if (fileName === '') {
    res.end('Error: missing "filename" parameter')
    return
  }

  const width: number = parseInt(req.query.width as string)
  if (isNaN(width)) {
    res.end('Error: missing "width" parameter')
    return
  }

  let height: number | null = parseInt(req.query.height as string)
  if (isNaN(height)) {
    height = null
  }

  let style: string | null = req.query.style as string
  if (style === '') {
    style = null
  }

  let extention: string | null = req.query.ext as string
  if (extention === '') {
    extention = null
  }

  void (async () => {
    const processedImage = await processImage(
      fileName,
      width,
      height,
      style,
      extention
    )

    if (processedImage === '') {
      res.end('Oops!! An error occured, please check your entered data')
    } else {
      console.log('image served')
      res.sendFile(processedImage, {
        root: __dirname + '../../../../'
      })
    }
  })()
})

export default routes
