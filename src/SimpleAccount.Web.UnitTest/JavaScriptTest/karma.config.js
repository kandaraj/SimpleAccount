/// <reference path="../helper/angular-scenario.js" />
/// <reference path="../helper/jquery.min.js" />

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../..',

        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
        'SimpleAccount.Web.UnitTest/Helper/jquery.min.js',
        'SimpleAccount.Web/Js/angular.min.js',
        'simpleaccount.web/js/angular-sanitize.min.js',
        'SimpleAccount.Web.UnitTest/Helper/angular.mocks.js', 
        'SimpleAccount.Web/Js/App.js',
        'SimpleAccount.Web/Js/SimpleAccountService.js',
        'SimpleAccount.Web/Js/SimpleAccountController.js',
        'SimpleAccount.Web.UnitTest/JavaScriptTest/*Test.js'
        ],

        // list of files to exclude
        exclude: [
            'SimpleAccount.Web.UnitTest/JavaScriptTest/*.conf.js'
        ],

        
        preprocessors: {
            '**/SimpleAccount.Web/Js/**/!(angular|bootstrap|jquery).js': ['coverage']
        },
        
        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots', 'progress'
        // CLI --reporters progress
        reporters: ['progress', 'coverage', 'junit'],

        junitReporter: {
            // will be resolved to basePath (in the same way as files/exclude patterns)
            outputFile: 'jstestresults.xml'
        },

        coverageReporter: {
            type: 'cobertura',
            dir: 'coverage/',
            file: 'coverage.xml'
        },
        
        // web server port
        // CLI --port 9876
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 20000,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: true,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,

        plugins: [
          'karma-jasmine',
          'karma-phantomjs-launcher',
          'karma-junit-reporter',
          'karma-commonjs', 'karma-coverage'
        ]
    });
};