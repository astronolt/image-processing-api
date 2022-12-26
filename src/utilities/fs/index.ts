import { promises as fs } from 'fs'

async function fileCheck (file: string): Promise<boolean> {
  try {
    await fs.access(file)
    return true
  } catch (err) {
    return false
  }
}

export default fileCheck
