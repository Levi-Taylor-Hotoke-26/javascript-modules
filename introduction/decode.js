// decode.js
export function decode(codedText) {
  let decodedText = ' '
  for (let i = 1; i < codedText.length; i++) {
    let cc = codedText.charCodeAt(i) - 9
    decodedText += String.fromCharCode(cc)
  }
  return decodedText
}