System.config({
    // Map "index" to the "build" folder
    map: {
      main: 'build'
    },
    // Define settings for loading files in "build"
    packages: {
      build: {
        main: 'index.js',
        format: 'system',
        defaultExtension: 'js'
      }
    }
});
