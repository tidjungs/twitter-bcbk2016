import { expect } from 'chai'
import { dupicateTweets } from '../utils'

describe('test dupicateTweets', () => {
  it('should create 100 lengths of array', () => {
    expect(dupicateTweets()).to.have.lengthOf(100);
  });
  
  it('should set data', () => {
    const arr = dupicateTweets();
    expect(arr[0].name).to.equal('tidjungs');
    expect(arr[0].screen_name).to.equal('handmakers');
    expect(arr[0].text).to.have.lengthOf(2)
  });

  it('should have same data in array', () => {
    const arr = dupicateTweets();
    expect(arr[0]).to.equal(arr[10]);
  });
})
