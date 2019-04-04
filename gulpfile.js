'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    app: require('./gulp/paths/app.js'),
    libs: require('./gulp/paths/libs.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'css:libs',
    'pug',
    'js:process',
    'js:libs',
    'copy:image'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
