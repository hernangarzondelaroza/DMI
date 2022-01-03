import React from 'react';
import renderer from 'react-test-renderer';
import Details from './Details';

describe('Details', () => {
  it('Should take a snapshot', () => {
    const component = renderer
      .create(<Details />);
    expect(component).toMatchSnapshot();
  })
})