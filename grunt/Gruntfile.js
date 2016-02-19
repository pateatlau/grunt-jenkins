// Wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
    grunt.initConfig({
        // get the configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),

        // configure jshint to validate js files
        jshint: {
            options: {
                // use jshint-stylish to make our errors look and read good
                reporter: require('jshint-stylish')
            },

            // when this task is run, lint the Gruntfile and all js files in src
            build: [
                'Gruntfile.js',
                '../app/**/*.js',
                '!../app/bower_components/**/*.js',
                '!../app/**/*test.js'
            ]
        },

        watch: {
            jshint: {
                files: [
                    '../app/**/*.js',
                    '!../app/bower_components/**/*.js',
                    '!../app/**/*test.js'
                ],
                tasks: ['jshint']
            }
        }
    });

    // LOAD GRUNT PLUGINS
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'watch']);
};


/*
* JS tasks:
* jshint
* concat
* minify (with sourcemap)
*
* CSS tasks:
* LESS compilation with auto-prefixer
* concat
* minify (with sourcemap)
*
* HTML tasks:
* minify
*
* GENERAL tasks:
* Cache busting
* Image optimiser
* Conditional serving of minified / unminified JS & CSS based on URL param flag switch (is it possible from Grunt?)
 */