// Compress images
module.exports = {
  dynamic: {
    options: {
      optimizationLevel: 3,
      svgoPlugins: [{ removeViewBox: false }]
    },
    
    files: [{
      expand: true,
      cwd: '<%= paths.src_img %>',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= paths.dist_img %>'
    }]
  }
};
