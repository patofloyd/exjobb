
// constructs g.settings object
module.exports = function() {
  var appRoot = m.path.normalize(__dirname +'/');
  
  g.settings = {
    appRoot: appRoot,
    classLoader: {
      baseDir: m.path.join(appRoot,'classes/'),
      toLoad: [
        'Server',
        'REST'
      ]
    },
    Server: {
      endpoint: '*',
      webroot: 'src',
      indexFile: 'index.html',
      port: 2000
    },
    DrupalData: {
      albums: "http://localhost:80/music_webshop/allalbums",
      artists: "http://localhost:80/music_webshop/allartists"
    },
    REST: {
      GetAll: "/drupal/:model",
      GetOne: "/drupal/:model/:modelID"
    }
  };
};