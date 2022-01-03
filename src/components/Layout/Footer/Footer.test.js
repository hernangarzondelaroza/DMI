import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer', () => {
  it('Should take a snapshot', () => {
    const component = renderer
      .create(<Footer />);
    expect(component).toMatchSnapshot();
  })
})