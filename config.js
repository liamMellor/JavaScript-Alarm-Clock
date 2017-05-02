System.config({
    // Map "index" to the "build" folder
    map: {
      index: 'build' 
    },
    // Define settings for loading files in "build"
    packages: {
      build: {
        index: 'index.js',
        format: 'system',
        defaultExtension: 'js'
      }
    }
});
