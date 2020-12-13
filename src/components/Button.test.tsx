import * as React from 'react';
import { renderApollo } from '../test-utils';
import { expect } from 'chai';
import Button from './Button';

describe('<Button>', () => {
  it('renders learn react link', () => {
    const { getByText } = renderApollo(<Button>Text button</Button>);

    expect(getByText('Text button'));
  });
});
