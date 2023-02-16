const libList = [
  /* npm i -S jquery */
  // 'node_modules/jquery/dist/jquery.min.js',
];

const libjs = () => {
  return $.gulp.src(libList)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'Lib JS',
        message: error.message
      }))
    }))
    .pipe($.gp.concat('libs.min.js'))
    .pipe($.gp.uglify())
    .pipe($.gulp.dest($.path.js.dest));
};

module.exports = libjs;