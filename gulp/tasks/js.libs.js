'use strict';

module.exports = function() {
    $.gulp.task('js:libs', function() {
        return $.gulp.src($.path.libs)
        // .pipe($.gp.sourcemaps.init())
        .pipe($.gp.concat('libs.min.js'))
        // .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root + '/js'))
    })
};
