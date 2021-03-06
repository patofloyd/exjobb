
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
      webroot: 'dist',
      indexFile: 'index.html',
      port: 2000
    },
    DrupalData: {
      albums: "http://localhost:80/exjobb/headless_drupal/allalbums",
      artists: "http://localhost:80/exjobb/headless_drupal/allartists",
      musicstyles: "http://localhost:80/exjobb/headless_drupal/allmusicstyles",
      musicformat: "http://localhost:80/exjobb/headless_drupal/allmusicformat",
      about: "http://localhost:80/exjobb/headless_drupal/aboutlabel"
    },
    REST: {
      GetJson: "/drupal/:model/:modelID?"
    },
    StaticComponents: {
      jquery: '/node_modules/jquery/dist',
      bootstrap_js: '/node_modules/bootstrap/dist/js',
      bootstrap_css: '/node_modules/bootstrap/dist/css'
    }
  };
};