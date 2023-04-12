const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function automateFile() {
  return src('./src/**/*.scss').pipe(sass()).pipe(dest('./public/css'))
}

function watchTask() {
  watch(['./src/**/*.scss'], automateFile)
}

exports.default = series(automateFile, watchTask)
