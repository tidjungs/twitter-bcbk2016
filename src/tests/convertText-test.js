import { expect } from 'chai'
import { convertTextToArr } from '../utils'
describe('test text converter ', () => {
	var text = 'hello #bcbk #cpe #ske barcamp bangkhen'
	var result = convertTextToArr(text)
	it('should convert text separate by space', () => {
		expect(result.length).to.equal(6)
  });
})