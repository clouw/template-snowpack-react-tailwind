import * as React from 'react';
import { tick, renderApollo, fireEvent } from './test-utils';
import GetCharacters from './graphql/queries/GetCharacters.graphql';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('renders buttons', async () => {
    const { container, getByText } = renderApollo(<App />);
    const text = container.querySelector('#status');

    expect(text?.innerHTML).to.eq('no clicked');

    fireEvent.click(getByText('Tailwind button'));

    expect(text?.innerHTML).to.eq('clicked!!!');
  });

  it('renders characters with graphql', async () => {
    const mocks = [
      {
        request: {
          query: GetCharacters,
        },
        result: {
          data: {
            characters: {
              results: [{ id: '1', name: 'Rick Sanchez' }],
            },
          },
        },
      },
    ];

    const { getByText } = renderApollo(<App />, { mocks });

    expect(getByText('Loading...'));

    await tick();

    expect(getByText('Rick Sanchez'));
  });
});
