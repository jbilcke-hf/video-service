import { getValidNumber } from "./getValidNumber.mts"

export const getValidResolution = (something: any) => {
  const strValue = `${something || ''}`
  const chunks = strValue.split('x')
  if (chunks.length < 2) {
    throw new Error('Invalid resolution (should be written like "1280x720" etc)')
  }

  const [widthStr, heightStr] = chunks
  const width = getValidNumber(widthStr, 256, 1280, 1280)
  const height = getValidNumber(widthStr, 256, 720, 720)

  return `${width}x${height}`
}