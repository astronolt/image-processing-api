import sharp from 'sharp'
import fileCheck from 'utilities/fs'

console.log(process.cwd())

describe('resizing test', () => {
  const testImage: string = './assets/full/fjord.jpg'
  const resizeWidth: number = 100
  const resizeHeight: number = 100

  it('should check if test image present', async () => {
    expect(await fileCheck(testImage)).toEqual(true)
  })

  it('should resize the image to the specified dimensions', async () => {
    const output = await sharp(testImage)
      .resize(resizeWidth, resizeHeight).toBuffer()
    const { width, height } = await sharp(output).metadata()
    const outputWidth = width as number
    const outputHeight = height as number

    expect(outputWidth).toEqual(resizeWidth)
    expect(outputHeight).toEqual(resizeHeight)
  })
})
