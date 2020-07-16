module.exports = function (config) {
  config.set({
    files: [
      './**/*.test.js'
    ],
    preprocessors: {
      './**/*.test.js': ['webpack']
    },
    webpack: {
      mode: 'development'
    },
    frameworks: [
      'mocha',
      'chai'
    ],
    reporters: [
      'mocha',
      // 'progress'
    ],
    browsers: [
      // 'Chrome',
      'ChromeHeadless'
    ],
    autoWatch: false,
    singleRun: true
  })
}
