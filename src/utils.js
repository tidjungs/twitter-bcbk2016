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

// for testing scroll
export const dupicateTweets = () => {
	let arr = []
	for(var i=0; i<100; i++) {
		arr.push(
			{
		    name: 'tidjungs',
		    screen_name: 'handmakers',
		    text: ['hello ' ,'#bcbk'],
		    time: 'Sep 4',
		    profile_image: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
		  }
	  )
	}
	return arr
}

