'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    banner: 	'/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      		    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      		    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      		    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      		    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    // Task configuration.
    clean: {
      files: ['dist']
    },
    
    connect: {
      data:{
        port: 9001,
        base: 'dist/',
        keepAlive: true,
        livereload: true
      }
    },

    assemble: {
      options: {
        flatten:   true, 
        engine:   'handlebars',
        partials: 'src/partials/*.hbs',
        helpers:  'src/helpers/*.js',
        layout:   'src/layouts/core.hbs',
        data:     'src/data/*.js',
        assets:   'src/assets',
        site: {
            author: 'Philip A Senger',
            keywords: 'twitter bootstrap 3.0, html5, web'
        }
      },
      project: {
        options: {
          data: ['core.js','package.json'] 
        },
        files:  {
          'dist/': ['src/views/*.hbs']
        }
      },
    },

    compass: {
      dist:{
        options: {
          sassDir: 'scss', 
          cssDir: 'dist/css',
          outputStyle: 'expanded' 
        }        
      }

    },

    watch: {
      data: {
        files: [ 'scss/**', 'src/**',' Gruntfile.js', 'package.json' ],
        tasks: [ 'clean', 'build' ],
        options: {
          livereload: true
        }        
      }
    }    
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-connect'); 
  grunt.loadNpmTasks('grunt-contrib-compass'); 
  grunt.loadNpmTasks('assemble');


  // Default task.
  grunt.registerTask( 'default', ['jshint', 'qunit', 'clean', 'concat', 'uglify']);
  grunt.registerTask( 'build', [ 'compass', 'assemble' ] )

};
