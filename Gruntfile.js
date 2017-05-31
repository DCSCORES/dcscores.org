//  _____                  _
// |  __ \                | |
// | |  \/_ __ _   _ _ __ | |_
// | | __| '__| | | | '_ \| __|
// | |_\ \ |  | |_| | | | | |_
//  \____/_|   \__,_|_| |_|\__|
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['scripts/_src/fonts.js', 'scripts/_src/header.js', 'scripts/_src/slick.js', 'scripts/_src/carousel.js', 'scripts/_src/scroll-reveal.js', 'scripts/_src/scroll-in.js', 'scripts/_src/count-up.js', 'scripts/_src/numbers.js', 'scripts/_src/progress-bar.js', 'scripts/_src/youtube.js'],
        dest: 'scripts/app.js',
      },
    },
    /*uglify: {
      my_target: {
        files: {
          'scripts/app.js': ['scripts/app.js']
        }
      }
    },*/
    watch: {
      scripts: {
        files: ['scripts/_src/*.js'],
        tasks: ['concat'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks.
  grunt.registerTask('default', ['concat']);
  grunt.registerTask('dev', ['concat', 'watch']);

};