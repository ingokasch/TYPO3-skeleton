/************************************************************************************************************************************
 1. Configuration
 ************************************************************************************************************************************/
var jsFilename = 'my_javascript_file';                  // File name for the minified JavaScript file

/************************************************************************************************************************************
 2. Variables
 ************************************************************************************************************************************/
var gulp 		= require('gulp');						// Main gulp module
var sass 		= require('gulp-sass');					// Gulp libsass
var sourcemaps  = require('gulp-sourcemaps');           // SASS sourcemaps
var prefix 		= require('gulp-autoprefixer');			// CSS autoprefixer
var rename		= require('gulp-rename');				// Rename files
var concat		= require('gulp-concat');				// Javascript concatination
var uglify		= require('gulp-uglify');				// Javascript minification
var notify		= require('gulp-notify');				// Notifications
var plumber 	= require('gulp-plumber');				// Continue on error
var jscs 		= require('gulp-jscs');					// Javascript code style
var typescript  = require('gulp-typescript');           // Typescript
var merge       = require('merge2');                    // Merge multiple streams into one stream in sequence or parallel

/************************************************************************************************************************************
 3. Default Task
 ************************************************************************************************************************************/
gulp.task('default', ['sass', 'iconizr', 'javascript-with-vendor'], function() {});

/************************************************************************************************************************************
 4. Watch
 ************************************************************************************************************************************/
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch([
         'fileadmin/.assets/sass/**/*.scss'
        ,'!fileadmin/.assets/sass/iconizr/*.scss'], ['sass']
    );

    // Watch .scss iconizr files
    gulp.watch([
        'fileadmin/.assets/sass/iconizr/*.scss',
    ], ['iconizr']);

    // Watch .js files
    gulp.watch([
        'fileadmin/.assets/js/**/*.js'
        ,'!fileadmin/.assets/js/vendor/**/*.js'
    ], ['javascript']);

    gulp.watch([
        'fileadmin/.assets/js/vendor/**/*.js'
    ], ['javascript-vendor']);
});

/************************************************************************************************************************************
 5. SASS
 ************************************************************************************************************************************/
gulp.task('sass', function () {
    gulp.src([
             'fileadmin/.assets/sass/**/*.scss'
            ,'!fileadmin/.assets/sass/iconizr/*.scss'
        ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(plumber())
        .pipe(prefix(
            "last 3 version",
            "> 5%",
            "ie 8",
            "ie 7"
        ))
        .pipe(rename({suffix: '.min'}))
        .pipe(plumber())
        .pipe(sourcemaps.write('./sourcemaps'))
        .pipe(gulp.dest('fileadmin/css/'))
        .pipe(notify({message:'SASS finished'}));
});

gulp.task('iconizr', function () {
    gulp.src('fileadmin/.assets/sass/iconizr/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(plumber())
        .pipe(prefix(
            "last 3 version",
            "> 5%",
            "ie 8",
            "ie 7"
        ))
        .pipe(plumber())
        .pipe(sourcemaps.write('./sourcemaps/iconizr'))
        .pipe(gulp.dest('fileadmin/css/'))
        .pipe(notify({message:'SASS Iconizr finished'}));
});

/************************************************************************************************************************************
 6. Javascript
 ************************************************************************************************************************************/
gulp.task('javascript', function(){
    return gulp.src(['fileadmin/.assets/js/**/*.js', '!fileadmin/.assets/js/vendor/**/*.js'])
        .pipe(concat('fileadmin/js/'+ jsFilename +'.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('.'))
        .pipe(notify({ message: 'Javascript "General" finished' }));
});

gulp.task('javascript-vendor', function(){
    return gulp.src(['fileadmin/.assets/js/vendor/**/*.js'] )
        .pipe(concat('fileadmin/js/vendors.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(plumber())
        .pipe(gulp.dest('.'))
});

gulp.task('javascript-with-vendor', function(){
    return gulp.src(['fileadmin/.assets/js/vendor/**/*.js', 'fileadmin/.assets/js/**/*.js'])
        .pipe(concat('fileadmin/js/'+ jsFilename +'.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('.'))
        .pipe(notify({ message: 'Javascript "General" finished' }));
});

// JSCS - You will need a JSCS configuration file in the root folder in order to run JSCS
gulp.task('jscs', function(){
    return gulp.src(['fileadmin/.assets/js/**/*.js', '!fileadmin/.assets/js/vendor/**/*.js'])
        .pipe(jscs());
});

/************************************************************************************************************************************
 7. Typescript
 ************************************************************************************************************************************/
gulp.task('typescript', function() {
    var tsResult = gulp.src(['fileadmin/.assets/typescript/**/*.ts'])
        .pipe(typescript({
            declarationFiles: true,
            noResolve: true
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest('fileadmin/.assets/typescript/definitions')),
        tsResult.js.pipe(gulp.dest('fileadmin/.assets/js'))]
    );
});
