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
        {text: 'test1'},
        {text: 'test2'},
        {text: 'test3'}
      ]
    });
    expect(wrapper.find('.card').length).to.equal(3);
    expect(wrapper.find('.card').length).not.equal(0);
  });
});