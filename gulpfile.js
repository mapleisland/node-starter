const { src, dest, series, parallel, watch } = require('gulp');
const del = require('del');
const babel = require('gulp-babel');

const srcDir = 'src/**/*.js';
const distDir = 'dist'

async function clean() {
  await del([distDir]);
}

function compileEs() {
  return src(srcDir)
    .pipe(babel())
    .pipe(dest(distDir))
}

function copyPackagejson() {
  return src('package.json')
    .pipe(dest(distDir))
}

watch([srcDir], () => {
  return compileEs()
})

watch(['package.json'], () => {
  return copyPackagejson()
})

exports.default = series(clean, parallel(compileEs, copyPackagejson));