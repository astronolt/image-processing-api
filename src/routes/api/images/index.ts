import { promises as fs } from 'fs'
import sharp from 'sharp'

async function fileCheck (file: string): Promise<boolean> {
  try {
    await fs.access(file)
    return true
  } catch (err) {
    return false
  }
}

async function imageEdit (
  inputAsset: string,
  outputAsset: string,
  width: number | undefined,
  height: number | null = null,
  style: string | null = null
): Promise<boolean> {
  try {
    const editImage = sharp(inputAsset).resize(width, height)

    if (style === 'tint') {
      editImage.tint({ r: 255, g: 240, b: 16 })
    }

    if (style === 'greyscale') {
      editImage.greyscale()
    }

    await editImage.toFile(outputAsset)
    console.log('image generated')

    return true
  } catch (err) {
    return false
  }
}

/**
 *
 */
const processImage = async (
  fileName: string,
  width: number,
  height: number | null = null,
  style: string | null = null,
  extension: string | null = null
): Promise<string> => {
  const styleCodes: string[] = ['tint', 'greyscale']
  const styleName: string = styleCodes.includes(style as string)
    ? `_${style as string}`
    : ''

  const ext: string =
        (extension as string) !== '' ? '.jpg' : `.${extension as string}`

  const inputAsset: string = `./assets/full/${fileName}${ext}`
  const outputAsset: string = `./assets/thumb/${fileName}_${width}${
        (height as number) !== null ? `_${height as number}` : ''
    }${styleName}${ext}`

  const inputAssetCheck = await fileCheck(inputAsset)
  const outputAssetCheck = await fileCheck(outputAsset)

  // check if convert file exist
  if (!outputAssetCheck) {
    // check if image file exist
    if (inputAssetCheck) {
      if (
        await imageEdit(
          inputAsset,
          outputAsset,
          width,
          height,
          style
        )
      ) {
        return outputAsset
      }
    }
  } else {
    return outputAsset
  }

  return ''
}

export default processImage
