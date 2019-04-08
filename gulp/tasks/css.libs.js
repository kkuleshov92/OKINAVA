'use strict';

module.exports = function() {
    $.gulp.task('css:libs', function() {
        return $.gulp.src('bower_components/slick-carousel/slick/slick.css')
            // .pipe($.gp.sourcemaps.init())
            // .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
            // .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
            // .pipe($.gp.sourcemaps.write())
            .pipe($.gp.concat('libs.min.css'))
            .pipe($.gulp.dest($.config.root + '/css'))
            // .pipe($.browserSync.stream());
    })
};
