module.exports = function (grunt)
{
    grunt.initConfig({
        // define source files and their destinations
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          js_custom: {
            src: [  '../package/platform/*.js',
                    'js_custom/*.js'
                    ],
            dest:   'temp/custom.js' // Final combined JS file name
          },
          js_admin: {
            src: [
                    'js_public/*.js'
                  ],
            dest:   'temp/public.js' // Final combined JS file name
          },
          js_admin: {
            src: [
                    'js_user/*.js'
                  ],
            dest:   'temp/user.js' // Final combined JS file name
          },
          js_admin: {
            src: [
                    'js_admin/*.js'
                  ],
            dest:   'temp/admin.js' // Final combined JS file name
          },
          js_external: {
            src: [
                    '../package/external/modernizr/modernizr.min.js',
                    '../package/external/select2-3.4.2/select2.js',
                    '../package/external/angularjs/angular.min.js',
                    '../package/external/holderjs/holder.js',
                    '../package/external/flexslider/js/jquery.flexslider-min.js',                    
                    '../package/external/vimeo/froogaloop2.min.js',
                    '../package/external/jquery-FitVids/jquery.fitvid.js',
                    '../package/external/uploadify/jquery.uploadify.js',
                    '../package/external/select2-3.4.2/angular-ui/select2.js',
                    '../package/external/dropzone/js/dropzone.js',
            ],
            dest:   'temp/external.js'
          }
        },
        uglify: {
          options: {
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
          },
          files: { 
              src: 'temp/*.js',  // source files mask
              dest: '../public/js/',    // destination folder
              expand: true,    // allow dynamic building
              flatten: true,   // remove all unnecessary nesting
              ext: '.min.js'   // replace .js to .min.js
          }
        },
        copy: {
          main: {
            files: [
              // includes files within path
              {expand: false, src: ['../package/external/jquery/jquery-2.0.3.min.js'], dest: '../public/js/jquery.min.js'},
              {expand: false, src: ['../package/external/jquery/jquery-2.0.3.min.map'], dest: '../public/js/jquery-2.0.3.min.map'},
              {expand: false, src: ['../package/external/bootstrap/3.0.0/js/bootstrap.3.0.0.min.js'], dest: '../public/js/bootstrap.min.js'},
              {expand: false, src: ['../package/external/modernizr/modernizr.min.js'], dest: '../public/js/modernizr.min.js'},
              {expand: false, src: ['../package/external/angularjs/angular.min.js'], dest: '../public/js/angular.min.js'},

              {expand: true, flatten: true, src: ['../package/external/font-awesome/font/**'], dest: '../public/font/', filter: 'isFile'},
              {expand: true, flatten: true, src: ['../package/external/bootstrap/3.0.0/fonts/**'], dest: '../public/font/', filter: 'isFile'},
              {expand: true, flatten: true, src: ['../package/external/flexslider/fonts/**'], dest: '../public/font/', filter: 'isFile'},

              {expand: false, src: ['../package/external/uploadify/uploadify.php'], dest: '../public/uploadify/uploadify.php'},
              {expand: false, src: ['../package/external/uploadify/check-exists.php'], dest: '../public/uploadify/check-exists.php'},
              {expand: false, src: ['../package/external/uploadify/index.php'], dest: '../public/uploadify/index.php'},
              {expand: false, src: ['../package/external/uploadify/uploadify.swf'], dest: '../public/uploadify/uploadify.swf'},
              
              
              

              // includes files within path and its sub-directories
              //{expand: true, src: ['path/**'], dest: 'dest/'},

              // makes all src relative to cwd
              //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

              // flattens results to a single level
              //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'}
            ]
          }
        },        
        less: {
            options: {
                paths: ["../public/css/*.less"],
                yuicompress: true
                },
            production: {
                files: {
                },
                src:  'css/custom.less',
                dest: '../public/css/custom.css'  // final combined css
            },
            production_ie7: {
                files: {
                },
                src:  'css/custom-ie7.less',
                dest: '../public/css/custom-ie7.css'  // final combined css
            }

        }
    }
);
 
// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');

// register at least this one task
grunt.registerTask('default', ['concat', 'uglify', 'less', 'copy']);

};