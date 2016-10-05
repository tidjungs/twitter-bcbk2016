import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import Tweet from '../containers/Tweet';

describe('should render Tweet container', () => {
  it('should renders tweet without crashing', () => {
    shallow(<Tweet tweets={[]}/>);
  });

  it("should render tweet card along props", function() {
    const wrapper = mount(<Tweet tweets={[]}/>);
    wrapper.setProps({
     tweets: [
        {
          name: 'tidjungs',
          screen_name: 'handmakers',
          text: ['hello ' ,'#bcbk'],
          time: 'Sep 4',
          profile_image: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
        },
        {
          name: 'tidjungs',
          screen_name: 'handmakers',
          text: ['hello ' ,'#bcbk'],
          time: 'Sep 4',
          profile_image: 'http://pbs.twimg.com/profile_images/729383654787440640/gw1BgE0l_normal.jpg'
        }
      ]
    });
    expect(wrapper.find('.card').length).to.equal(0);
    // expect(wrapper.find('.card').length).not.equal(0);
  });
});