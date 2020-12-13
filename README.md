# Snowpack + React + Tailwind

## Features

This template includes:

- **Snowpack**
- **Typescript**
- **Testing Library**
- **Emotion**
- **Tailwind css 2.0 with twin.macro**
- **Apollo Client**

## How to Use

Install degit

```bash
yarn global add degit
```

In your terminal, run the following command

```bash
yarn exec degit clouw/template-snowpack-react-tailwind snowpack-app
cd snowpack-app
yarn install
```

## Available Scripts

### yarn dev

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### yarn run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

### yarn test or yarn test:watch

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) or `yarn test:watch` to run in interactive watch mode.

## Sources

- [twin.macro-snowpack-react-emotion-typescript](https://github.com/quangv/twin.macro-snowpack-react-emotion-typescript)
- [Snowpack](https://www.snowpack.dev/tutorials/react)
