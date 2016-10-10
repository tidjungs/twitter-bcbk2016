import { data1 } from './const/query'

const contains = (data, obj) => {
	let i = data.length
	while(i--) {
		if(data[i].name === obj.name && data[i].screen_name === obj.screen_name) 
			return true
	}
	return false
}

export const convertTextToArr = (text) => text.split(' ').map((word) => word += ' ')

export const addGuest = (guestData, newGuest) => contains(guestData, newGuest) ? guestData : [...guestData, newGuest]

export const checkRetweet = (text) => text[0] === 'R' && text[1] === 'T'

//////// for testing scroll //////////
export const dupicateTweets = () => new Array(100).fill(data1)

export const dupicateGuest = () => {
	let arr = []
	for(var i=0; i<100; i++) {
		let guest =	{ 
				name: 'bot' + i,
				screen_name: 'bot name' + i,
				text: [],
				time: 'Sep 4',
				profile_image: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
			}
		arr.push(guest)
	}
	return arr
}

////////////////////////////////////////

export const random = (data) => data[Math.floor(Math.random() * data.length)]
