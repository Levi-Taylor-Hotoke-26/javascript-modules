// main.js
import { encode } from './encode'
import { decode } from './decode'

const input = document.getElementById('PlainTextArea')
const output = document.getElementById('CodedText')
const decoded = document.getElementById('DecodedText')

input.addEventListener('change', () => {
  const plaintext = input.value
  const codedText = encode(plaintext)
  const decodedText = decode(codedText)
  output.textContent = codedText
  decoded.textContent = decodedText
})