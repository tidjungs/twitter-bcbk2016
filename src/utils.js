export const convertTextToArr = (text) => {
	let textArr = []
	let sentence = ''
  for(let i=0; i<text.length; i++) {
    sentence += text[i]
    if(text[i] === ' ') {
      textArr.push(sentence)
      sentence = ''
    }
  }
  if(sentence !== '') {
    textArr.push(sentence)
  }
  return textArr
}