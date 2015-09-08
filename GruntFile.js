module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            src: ['public/javascripts/*.js'],
            options: {
                specs: ['spec/**/*Spec.js'],
                vendor: []
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
