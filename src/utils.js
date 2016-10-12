import { data1 } from './const/query';

export const convertTextToArr = (text) => text.split(' ').map((word) => word += ' ')

export const addGuest = (guestData, newGuest) => [...guestData.filter((d) => d.screen_name !== newGuest.screen_name), newGuest]

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
