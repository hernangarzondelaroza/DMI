import React from 'react';
import renderer from 'react-test-renderer';
import Shows from './Shows';

describe('Shows', () => {
  it('Should take a snapshot', () => {
    const component = renderer
      .create(<Shows />);
    expect(component).toMatchSnapshot();
  })
})