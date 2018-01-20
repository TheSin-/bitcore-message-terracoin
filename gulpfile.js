'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-terracoin');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
