module.exports = function (config) {
  config.set({
    testRunner: 'mocha',
    mutator: 'javascript',
    reporter: ['clear-text', 'progress', 'html', 'dashboard'],
    testFramework: 'mocha',
    coverageAnalysis: 'off',
    mutate: ['imports/**/*.js'],

    // use Babel to transpile our ES code first ...
    transpilers: ['babel'],
    babelrcFile: '.babelrc',

    // specify where the test files are
    mochaOptions: {
      files: [ 'tests/**/*.js' ]
    }
  })
}
