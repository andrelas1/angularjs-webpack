// Karma configuration
// Generated on Sun May 13 2018 18:31:34 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      "./node_modules/angular/angular.js",
      "./node_modules/angular-ui-router/release/angular-ui-router.js",
      "./node_modules/angular-mocks/angular-mocks.js",
      { pattern: "src/*.spec.js", watched: false },
      { pattern: "src/**/*.spec.js", watched: false }
    ],

    // list of files / patterns to exclude
    exclude: ["node_modules"],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    preprocessors: {
      "src/*.spec.js": ["webpack"],
      "src/**/*.spec.js": ["webpack"]
    },

    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
          },
          {
            test: /\.s?[ac]ss$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader", options: { sourceMap: true } },
              { loader: "sass-loader", options: { sourceMap: true } }
            ]
          },
          {
            test: /\.(html)$/,
            loader: "html-loader"
          }
        ]
      },
      mode: "development"
    },
    webpackServer: {
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress", "spec"],
    specReporter: {
      maxLogLines: 8, // limit number of lines logged per test
      suppressErrorSummary: false, // do not print error summary
      suppressFailed: false, // do not print information about failed tests
      suppressPassed: false, // do not print information about passed tests
      suppressSkipped: false, // do not print information about skipped tests
      showSpecTiming: true, // print the time elapsed for each spec
      failFast: false // test would finish with error when a first fail occurs.
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],
    // customLaunchers: {
    //   PhantomJS_custom: {
    //     base: "PhantomJS",
    //     options: {
    //       windowName: "my-window",
    //       settings: {
    //         webSecurityEnabled: false
    //       }
    //     },
    //     flags: ["--load-images=true"],
    //     debug: true
    //   }
    // },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
