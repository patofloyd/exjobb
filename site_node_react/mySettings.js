
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
      webroot: 'views',
      indexFile: 'index',
      port: 2000,
      name: "Underground Defenders"
    },
    DrupalData: {
      albums: "http://localhost:80/exjobb/headless_drupal/allalbums",
      artists: "http://localhost:80/exjobb/headless_drupal/allartists",
      musicstyles: "http://localhost:80/exjobb/headless_drupal/allmusicstyles",
      musicformat: "http://localhost:80/exjobb/headless_drupal/allmusicformat"
    },
    REST: {
      GetJson: "/drupal/:model/:modelID?"
    },
    StaticComponents: {
      jquery: '/node_modules/jquery/dist',
      bootstrap_js: '/node_modules/bootstrap/dist/js',
      bootstrap_css: '/node_modules/bootstrap/dist/css',
      myJs: '/public/js',
      myCss: '/public/css'
    }
  };
};