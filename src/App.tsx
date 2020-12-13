import tw, { GlobalStyles } from 'twin.macro';
import { Button, Logo } from './components';
import { useState } from 'react';

import { useQuery } from '@apollo/client';
import GetCharacters from './graphql/queries/GetCharacters.graphql';

interface AppProps {}
type Character = {
  id: string;
  name: string;
};

const App = ({}: AppProps) => {
  const [status, setStatus] = useState('no clicked');
  const { loading, data } = useQuery(GetCharacters);

  return (
    <div>
      <GlobalStyles />
      <div
        css={[
          tw`flex flex-col items-center justify-center h-screen`,
          tw`bg-gradient-to-b from-electric to-ribbon`,
        ]}
      >
        <div tw="flex flex-col justify-center h-full space-y-5">
          <div tw="w-80 h-80 overflow-auto flex flex-col items-center bg-indigo-600 bg-opacity-30 p-2 text-sm">
            <h1 tw="text-2xl text-gray-800 mt-4">Graphql</h1>

            <small>{process.env.SNOWPACK_PUBLIC_GRAPHQL_URL}</small>

            {loading ? (
              <div>Loading...</div>
            ) : (
              data?.characters?.results?.map((character: Character) => (
                <div key={character.id}>{character.name}</div>
              ))
            )}
          </div>

          <Button isPrimary>Submit</Button>
          <Button isSecondary>Cancel</Button>
          <Button isSmall>Close</Button>
        </div>

        <button
          onClick={() => setStatus('clicked!!!')}
          css={tw`px-4 py-2 bg-green-100 rounded-2xl`}
        >
          Tailwind button
        </button>

        <div id="status">{status}</div>
        <Logo />
      </div>
    </div>
  );
};

export default App;
