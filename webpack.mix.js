const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


// Javascript stuff
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css').scss;
mix.js('resources/js/app1.js', 'public/js');


mix.js('resources/js/scripts.bundle.js', 'public/js');
mix.js('resources/js/custom.js', 'public/js');


//  CSS Stuff
mix.postCss('resources/css/auth1.css', 'public/css').scss;
mix.postCss('resources/css/custom.css', 'public/css').scss;
mix.postCss('resources/css/style.bundle.css', 'public/css').scss;
mix.postCss('resources/css/dataview.css', 'public/css').scss;



















