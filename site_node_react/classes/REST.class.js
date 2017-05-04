var s = g.settings;

module.exports = class REST {
  constructor(express) {
    this.settings = s.REST;
    this.DrupalData = s.DrupalData;
    this.app = express;
    this.GetAll();
    this.GetOne();
  
  }

  GetAll(){
    var me = this;
    this.app.get(this.settings.GetAll, function(req, res) {

      var model = req.params.model;
      var isErr = [];
      var models = Object.keys(me.DrupalData);
      var myUrl = "";
      // do we have a 404?
      models.forEach(function(x){
        if (model == x) {
          isErr.push(x);
          myUrl = me.DrupalData[x];
        }
      });

      if (isErr.length == 0) {
        res.sendStatus(404);
        res.end();
        return;
      }
      else{
        m.request({
          url: myUrl,
          json: true
        }, function(error, response, body){
          if (error) {
            console.log("ERROR WITH THE DATA");
          }
          else{
            var obj = {};
            var arr = [];
            var dummyData = [];
            if (model == 'albums') {
              body.forEach(function(x){
                me.createAlbumObj(x, obj);
                arr.push(obj);
                obj = {};
              });
            }
            else{
              arr = body;
            }
            res.json(arr);
          }
        });
      }     
    });
  }

  GetOne(){
    var me = this;
    this.app.get(this.settings.GetOne, function(req, res) {

      var model = req.params.model;
      var modelID = req.params.modelID;
      var myUrl = "";
      var isErr = [];
      var models = Object.keys(me.DrupalData);
      // do we have a 404?
      models.forEach(function(x){
        if (model == x) {
          isErr.push(x);
          myUrl = me.DrupalData[x];
        }
      });

      if (isErr.length == 0) {
        res.sendStatus(404);
        res.end();
        return;
      }
      else{
        m.request({
          url: myUrl,
          json: true
        }, function(error, response, body){
          if (error) {
            console.log("ERROR WITH THE DATA");
          }
          else{
            var isThere = [];
            var obj = {};
            for (var i = 0; i < body.length; i++) {
              if (body[i].nid == modelID) {
                isThere.push(i);
                if (model == 'albums') {
                  me.createAlbumObj(body[i], obj);
                }
                else{
                  obj = body[i];
                }
                console.log("The Object is sent");
                res.json(obj);
              }
              if (i == body.length - 1 && isThere.length == 0) {
                res.json({text: "The Object was not found"});
              }
            }
          }
        });
      }

    });
  }

  createAlbumObj(oldObj, newObj){
    newObj.album_title = oldObj.title;
    newObj.field_album_artist = oldObj.field_album_artist;
    newObj.album_description = oldObj.field_album_description;
    newObj.album_price = oldObj.field_album_price;
    newObj.album_stock = oldObj.field_album_stock;
    newObj.album_style = oldObj.field_album_music_style;
    newObj.album_type = oldObj.field_album_type;
    newObj.album_nid = oldObj.nid;
    newObj.album_image = oldObj.field_image;
    newObj.album_date_updated = oldObj.changed;

    var splitField = newObj['field_album_artist'].split("/");
    var splitFieldOfSplit = splitField[4].split('"');

    newObj.album_artist_nid = splitFieldOfSplit[0];

    var deleteSymbolOne = splitFieldOfSplit[3].substr(1);
    var album_artist = deleteSymbolOne.slice(0,-1);

    newObj.album_artist = album_artist;

  }

  error(err, res) {
    res.status(400);
    res.json(err);
  }
};