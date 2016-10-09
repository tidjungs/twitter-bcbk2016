import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import Tweet from '../containers/Tweet'
import { Card } from '../components/Card';
import { data1 as tweet1 } from '../const/query'  

describe('should render Tweet container', () => {
  it('should renders tweet without crashing', () => {
    shallow(<Tweet tweets={[]}/>);
  });

  it("should render tweet card along props", function() {
    const wrapper = mount(<Tweet tweets={[]}/>);
    wrapper.setProps({
     tweets: [tweet1, tweet1]
    });
    expect(wrapper.find(Card)).to.have.length(2);
  });
});