/*
 Build configurations specifying where various folders are located and build to.
 This is not intended to be modified by editors
 */
var src = './src';

var mapCss = ['./bower_components/mapbox.js/mapbox.css'];
var mapImg = ['./bower_components/mapbox.js/**/*.png'];

module.exports = {
    javascript: {
        src: [
            './bower_components/gbif-ssg/bower_build/script.js',
            './bower_components/mapbox.js/mapbox.js',
            src + '/js/**/*.js'
        ]
    },
    stylus: {
        entries: [src + '/stylus/index.styl'].concat(mapCss)
    },
    fonts: {
        iconsSrc: ['./bower_components/gbif-ssg/bower_build/icons/**/*.svg', src + '/icons/**/*.*'],
        template: './bower_components/gbif-ssg/bower_build/icons/fonttemplate.styl'
    },
    mapImg: {
        src: mapImg,
        dest: './dist/css/'
    },
    googleAnalyticsId: 'UA-42057855-3'
};
