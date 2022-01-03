import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'
import Show from './Show';

const mockedData = [
  {
    "show": {
      "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"
      },
      "name": "Girls",
      "summary": "Lorem ipsum...",
      "id": 139,

    }
  }
]

describe('Show', () => {
  it('Should take a snapshot', () => {
    const component = renderer
      .create(<MemoryRouter><Show data={mockedData} /></MemoryRouter>);
    expect(component).toMatchSnapshot();
  })
})