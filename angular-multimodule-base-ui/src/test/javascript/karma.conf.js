// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

'use strict';

module.exports = function (config) {

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../../../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            '../bower_components/jquery/jquery.js',
            '../bower_components/lodash/dist/lodash.js',
            '../bower_components/angular/angular.js',
            '../bower_components/angular-resource/angular-resource.js',
            '../bower_components/angular-mocks/angular-mocks.js',
            'src/main/javascript/**/module.js',
            'src/main/javascript/**/*.js',
            'src/test/javascript/**/*.spec.js'
        ],

        // list of files / patterns to exclude
        exclude: [
        ],

        plugins: [
            'karma-teamcity-reporter',
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'coverage', 'teamcity'],

        // web server port
        port: 8089,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        // Coverage reporter generates the coverage
        coverageReporter: {
            reporters: [
                {type: 'lcov', dir: 'build/coverage/'},
                {type: 'text-summary', dir: 'build/coverage/'}
            ]
        }
    });
};
