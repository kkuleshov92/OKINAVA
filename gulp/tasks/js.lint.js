'use strict';

module.exports = function() {
  $.gulp.task('js:lint', function() {
    return $.gulp.src($.path.app, $.path.libs)
      .pipe($.gp.eslint())
      .pipe($.gp.eslint.format());
  })
};
