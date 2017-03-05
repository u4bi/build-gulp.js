var gulp = require('gulp');
var sass = require('gulp-sass'); /* sass파일 빌드를 위한 걸프 플러그인 */
var uglify = require('gulp-uglify'); /* 파일 소스 압축을 위한 걸프 플러그인 */
var concat = require('gulp-concat'); /* 파일들을 합치기 위한 걸프 플러그인 */
var coffee = require('gulp-coffee'); /* 커피 스크립트를 js로 변환하는 걸프 플러그인 */

/**
 * 정의한  Task
 * @name scss
 * SCSS 파일을 빌드한다.
 *
 */
gulp.task('scss', function(){
    return gulp.src('app/scss/styles.scss') /* 해당 주소지 파일을 */
        .pipe(sass())
        /* 파이프를 통해 sass() 메서드를 호출
           즉 sass - > css 파일로 변환
        */
        .pipe(gulp.dest('app/css'))
        /* 해당 주소지에 반환값이 담긴다.
           즉 변환된 styles.css 파일이 생성
        */
});

/**
 * 정의한  Task
 * @name uglify
 * 파일의 소스를 압축한다.
 *
 */
gulp.task('uglify', function(){
    return gulp.src('app/src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

/**
 * 정의한  Task
 * @name concat
 * 파일들을 합친다.
 *
 */
gulp.task('concat', function(){
    return gulp.src('app/src/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
});

/**
 * 정의한  Task
 * @name min
 * 파일들을 합치고 소스를 압축한다.
 *
 */
gulp.task('min', function(){
    return gulp.src('app/src/*.js')
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

/**
 * 정의한  Task
 * @name coffee
 * 커피스크립트를 js파일로 변환한다.
 *
 */
gulp.task('coffee', function(){
    return gulp.src('app/src/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('dist'))
});

gulp.task('u4bi', function(){
    console.log('wow u4bi');
});