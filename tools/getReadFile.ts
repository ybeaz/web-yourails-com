import { promises as fs } from 'fs'

export const getReadJsonFile = async path => {
  const data = await fs.readFile(path, 'utf8')
  return JSON.parse(data)
}
