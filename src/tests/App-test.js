import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import App from '../App';
import Tweet from '../containers/Tweet';

describe('test App component', () => {
  const wrapper = mount(<App />);

  it('should renders App without crashing', () => {
    shallow(<App />);
  });

  it("should render tweet", function() {
    expect(wrapper.find(Tweet)).to.have.length(1);
  });

});
