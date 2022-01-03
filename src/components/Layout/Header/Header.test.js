import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  it('Should take a snapshot', () => {
    const component = renderer
      .create(<Header />);
    expect(component).toMatchSnapshot();
  })
})