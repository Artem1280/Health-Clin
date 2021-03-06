var project = require('../../project.json');

var paths = {
    lint: {
        es6: ['./content/app/**/*.js']
    },
    source: {
        root: './content/',
        spa: {
            root: './content/app/'
        },
        sass: {}
    },
    dest: {
        root: './' + project.webroot + '/',
        spa: {
            root: './' + project.webroot + '/app/',
            files: {
                js: 'app.js',
                jsMin: 'app.min.js'
            }
        },
        files: {
            js: 'site.js',
            jsMin: 'site.min.js',
            libJs: 'lib.js',
            libJsMin: 'lib.min.js',
            libCss: 'lib.css',
            libCssMin: 'lib.min.css'
        }
    }
};

//This paths are constructed
paths.source.js = paths.source.root + 'js/**/*.js';
paths.source.minJs = paths.source.root + 'js/**/*.min.js';

paths.source.sass.files = paths.source.root + 'styles/**/*.scss';

paths.source.css = paths.source.root + 'css/*.css';
paths.source.minCss = paths.source.root + 'css/**/*.min.css';

paths.source.images = paths.source.root + 'images/**/*.{png,jpg}';
paths.source.fonts = paths.source.root + 'fonts/**/*.{eot,ttf,woff,svg}';

paths.source.spa.js = paths.source.spa.root + '**/*.js';
paths.source.spa.templates = paths.source.spa.root + '**/*.{htm,html}';

paths.dest.css = paths.dest.root + 'css/';
paths.dest.js = paths.dest.root + 'js/';
paths.dest.libJs = paths.dest.root + 'lib/js/';
paths.dest.libCss = paths.dest.root + 'lib/css/';
paths.dest.images = paths.dest.root + 'images/';
paths.dest.fonts = paths.dest.root + 'fonts/';

module.exports = paths;