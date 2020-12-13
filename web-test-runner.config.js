// NODE_ENV=test - Needed by "@snowpack/web-test-runner-plugin"
process.env.NODE_ENV = 'test';

module.exports = {
  files: 'test/**/*.test.tsx',
  plugins: [require('@snowpack/web-test-runner-plugin')()],

  // browserLogs: false,
  filterBrowserLogs: ({ type, args }) => {
    if (/^Download the Apollo DevTools for a better/.test(args[0])) {
      return false;
    }
    return true;
  },
};
