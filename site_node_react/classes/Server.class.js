module.exports = class Server {
  constructor() {
    // save our settings to this
    this.settings = g.settings.Server;
    this.staticSettings = g.settings.StaticComponents;
    // add express to this
    this.app = m.express();

    // run the setup method
    this.setup();
  }

  setup() {
    // compress all files using gzip
    this.app.use(m.compression());
    
    // tell express to use middleware to parse JSON
    this.app.use(m.bodyparser.json());
    // declare a webroot
    this.app.use(
      m.express.static(
        m.path.join(g.settings.appRoot, this.settings.webroot)
      )
    );
    // some statics roots
    this.app.use(
      '/js', 
      m.express.static(
        m.path.join(g.settings.appRoot, this.staticSettings.jquery)
      )
    );
    this.app.use(
      '/js', 
      m.express.static(
        m.path.join(g.settings.appRoot, this.staticSettings.bootstrap_js)
      )
    );
    this.app.use(
      '/js', 
      m.express.static(
        m.path.join(g.settings.appRoot, this.staticSettings.myJs)
      )
    );
    this.app.use(
      '/css', 
      m.express.static(
        m.path.join(g.settings.appRoot, this.staticSettings.bootstrap_css)
      )
    );
    this.app.use(
      '/css', 
      m.express.static(
        m.path.join(g.settings.appRoot, this.staticSettings.myCss)
      )
    );

    // compress all files using gzip
    this.app.use(m.compression({threshold: 0}));

    // parse all request cookies
    this.app.use(m.cookieparser());

    // parse all urlencoded request body data
    // for example from "standard" HTML forms
    this.app.use(m.bodyparser.urlencoded({extended: false}));

    new g.classes.REST(this.app);

    // view engine setup
    this.app.set('views', this.settings.webroot);
    this.app.set('view engine', 'jsx');
    this.app.engine('jsx', m.expressreactviews.createEngine());

    // create an endpoint ("*")
    var me = this;
    this.app.get(this.settings.endpoint, function(req, res) {
      // send my index.html file
      res.render(me.settings.indexFile, {name: me.settings.name});
    });

    // listen on port 2000
    this.app.listen(this.settings.port,  function() {
      console.log("Server listening on port "+me.settings.port);
    });
  }
}