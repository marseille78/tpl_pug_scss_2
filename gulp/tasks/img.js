const img = () => {
  return $.gulp.src($.path.img.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'IMG',
        message: error.message
      }))
    }))

    /* Розкоментувати, якщо використовуємо WEBP */
    // .pipe($.gp.newer($.path.img.dest))
    // .pipe($.gp.webp())
    // .pipe($.gulp.dest($.path.img.dest))
    // .pipe($.gulp.src($.path.img.src))

    .pipe($.gp.newer($.path.img.dest))
    .pipe($.gp.imagemin($.app.imagemin))
    .pipe($.gulp.dest($.path.img.dest))

    .pipe($.browserSync.stream());
};

module.exports = img;