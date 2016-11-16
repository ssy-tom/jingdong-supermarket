/**
 * Created by Administrator on 2016/11/2 0002.
 */
var gulp=require('gulp');
var browserify=require('browserify');
var babelify=require('babelify');
var source=require('vinyl-source-stream');
var less=require('gulp-less');
var concat=require('gulp-concat');
gulp.task('jsCompile',function(){
   return browserify('./js/app.js')
       .transform(babelify,{presets:["react"]})
       .bundle()
       .pipe(source('supermarket.js'))
       .pipe(gulp.dest('./build/'));
});
gulp.task('less',function(){
   gulp.src('./less/*.less')
       .pipe(less())
       .pipe(gulp.dest('css'));
});

gulp.task('concat',function(){
   gulp.src(['css/*.css','!css/supermarket.css'])
       .pipe(concat('supermarket.css'))
       .pipe(gulp.dest('./css'))
});

gulp.task('default', function () {
   gulp.watch('./js/*.js', ['jsCompile']);
   gulp.watch('./less/*.less', ['less']);
   gulp.watch('./css/*.css', ['concat']);
});

