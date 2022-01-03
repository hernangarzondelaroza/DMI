import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';

describe('Layout', () => {
  it('Should take a snapshot', () => {
    const component = renderer
      .create(<Layout />);
    expect(component).toMatchSnapshot();
  })
})