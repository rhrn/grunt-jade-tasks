###Grunt tasks for jade template engine
Compile jade files into html

####Installing
```
npm install grunt-jade-tasks --save-dev
```
####Configure `Gruntfile.js`
```
jade: {
  options: {
    pretty: true,
    files: {
      "*": ["**/*.jade", "!layouts/*.jade"]
    }
  },
  debug: {
    options: {
      locals: {
        livereload: true
      }
    }
  },
  publish: {
    options: {
      locals: {
        livereload: false
      },
      files: {
        "*": ["**/*.jade", "!some/*.jade", "!layouts/*.jade"]
      },
      pretty: false
    }
  }
}
```
####Descriptions
* html compiled same file name and level directory as jade
* 1st level `options` - global configuration
* locals - variables pass to template
