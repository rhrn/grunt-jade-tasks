module.exports = function(grunt) {

  'use strict';

  var jade = require('jade');

  var jadeCompile = function(filepath, options) {

        var src  = grunt.file.read(filepath);
        var dest = filepath.replace('.jade', '.html');

        options.filename = filepath;

        var compiler = jade.compile(src, options);

        grunt.file.write(dest, compiler(options.locals));
        grunt.log.writeln('File "' + dest + '" saved.');
  };

  grunt.registerMultiTask('jade', 'Compile and watch jade...', function() {

    var defaults = this.options();

    var options = {
      pretty:  this.data.options.pretty || defaults.pretty,
      files: this.data.options.files || defaults.files,
      locals: this.data.options.locals || defaults.locals
    };

    // don't work: maybe grunt miss 
    //options.files["*"].push("!node_modules/*");

    var files = grunt.file.expand(options.files["*"]).map(function(filepath) {
      return filepath;
    });

    files.forEach(function(filepath) {
      jadeCompile(filepath, options);
    });

    if (this.target === 'watch') {
        grunt.log.writeln('Not implemented');
    }

  });

};
