const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('public/sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('public/styles'))
}

function watchTask () {
    watch(['public/sass/**/*.scss'],buildStyles)
}

exports.default = series(buildStyles,watchTask)