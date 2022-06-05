
export { decodeData, encodeData } from './encode'

export { downloadProject } from './download'

export const copyText = (text: string) => {
  const dom = document.createElement('textarea')
  dom.style.position = 'absolute'
  dom.style.top = dom.style.left = '-10000px'
  dom.value = text
  document.body.appendChild(dom)
  // ie9+
  if (dom.select) {
    dom.select()
    document.execCommand('Copy')
    document.body.removeChild(dom)
    return true
  }
  document.body.removeChild(dom)
  return false
}
