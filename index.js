#!/usr/bin/env node
"use strict";

var minimist = require('minimist');
var app = require('./src/app');

main();

function main() {
    console.log('Starting... Quickstart Command Line App v' + require('./package.json').version);

    // command line options
    var app_parameter_argv = process.argv.slice(2);
    var app_parameter_options = {
        alias : {
            p : 'parameter',
            q : 'quiet'
        },
        boolean : ['quiet']
    };

    if (!app_parameter_argv || app_parameter_argv.length === 0) {
        printUsage();
    }
    else {

        var app_parameters = minimist(app_parameter_argv, app_parameter_options);

        if (app_parameters.parameter) {
            // print the argument
            console.log('Parameter:', app_parameters.parameter);
            // run(app_parameters.parameter);
        }
        if (app_parameters.quiet) {
            // print the argument
            console.log('Quiet:', app_parameters.quiet);
            // run(app_parameters.quiet);
        }

        if (app_parameters._.length > 0) {
            // search youtube and play the first result
            var additionalParameters = app_parameters._.join(' ');
            console.log('Additional parameters:', additionalParameters);
            // run(additionalParameters, function (err, results) {
            //     if (err) {
            //         return console.error(err);
            //     }
            //     console.log('Additional parameters:', additionalParameters);
            //     // run(results[0].parameter);
            // });
        }
    }

}

function printUsage() {
    console.log('Quickstart Command Line App v' + require('./package.json').version);
    console.log();
    console.log('Usage: quickstart-nodejs-app [options] "arguments"');
    console.log();
    console.log('Options:');
    console.log();
    console.log('    -p, --parameter [string] An example parameter');
    console.log('    -q, --quiet              An example parameter to indicate quiet mode');
    console.log();
    process.exit(0);
}
