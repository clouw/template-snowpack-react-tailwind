import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

type RenderApolloOptions = {
  mocks?: any;
  addTypename?: any;
  defaultOptions?: any;
  cache?: any;
  resolvers?: any;
  [st: string]: any;
};

const renderApollo = (
  node: any,
  {
    mocks,
    addTypename,
    defaultOptions,
    cache,
    resolvers,
    ...options
  }: RenderApolloOptions = {},
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
    >
      {node}
    </MockedProvider>,
    options,
  );
};

const tick = (lapsus = 0) => {
  return new Promise((resolve) => setTimeout(resolve, lapsus));
};

export * from '@testing-library/react';
export { renderApollo, tick };
