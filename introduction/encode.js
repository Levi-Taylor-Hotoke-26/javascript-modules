// encode.js
export function encode(plaintext) {
  let codedText = ' '
  for (let i = 0; i < plaintext.length; i++) {
    let cc = plaintext.charCodeAt(i) + 9
    codedText += String.fromCharCode(cc)
  }
  return codedText
}