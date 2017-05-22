var s = g.settings;

module.exports = class REST {
  constructor(express) {
    this.settings = s.REST;
    this.DrupalData = s.DrupalData;
    this.app = express;
    this.GET(); 
  }

  GET(){
    var me = this;
    this.app.get(this.settings.GetJson, function(req, res) {

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
        //return;
      }
      else{
        m.request({
          url: myUrl,
          json: true
        }, function(error, response, body){
          if (error) {
            console.log("ERROR! SOMETHING WENT WRONG!");
          }
          else{
            if (!modelID) {
              var obj = {};
              var arr = [];
              if (model == 'albums') {  // Creating the new object using the album help function if the model is "albums".
                body.forEach(function(x){
                  me.createAlbumObj(x, obj);
                  arr.push(obj);
                  arr.push(obj); // DUMMYDATA
                  arr.push(obj); // DUMMYDATA
                  obj = {};
                });
              }
              else{
                for (var i = 0; i < body.length; i++) {
                  if (body[i].field_image) {
                    body[i].image = me.getImage(body[i].field_image); // Calling the function that creates the image link if there are images.
                  }
                  arr.push(body[i]);
                }
              }
              res.json(arr);
            }
            else{
              var obj = {};
              var arr = [];
              for (var i = 0; i < body.length; i++) {
                if (body[i].nid == modelID) { // Getting one object depending on the id
                  var arr2 = [];
                  if (model == 'albums') {
                    me.createAlbumObj(body[i], obj);
                    arr2.push(obj);
                  }
                  else{
                    arr2.push(body[i]);
                  }
                  console.log("The Object is sent");
                  res.json(arr2);
                  break;
                }
                else if (model == 'albums' && me.getArtistNameAndNid(body[i].field_album_artist).name.toLowerCase().indexOf(modelID.toLowerCase()) >= 0) {
                  me.createAlbumObj(body[i], obj); // Getting the data with some filters.
                  arr.push(obj);
                  obj = {};
                }
                else if (model == 'albums' && body[i].field_album_music_style.toLowerCase().indexOf(modelID.toLowerCase()) >= 0) {
                  me.createAlbumObj(body[i], obj); // Getting the data with some filters.
                  arr.push(obj);
                  obj = {};
                }
                else if (model == 'albums' && body[i].field_album_type.toLowerCase().indexOf(modelID.toLowerCase()) >= 0) {
                  me.createAlbumObj(body[i], obj); // Getting the data with some filters.
                  arr.push(obj);
                  obj = {};
                }               
                if (i == body.length - 1 && arr.length == 0) {
                  console.log("The Object was not found");
                  res.json({text: "The Object was not found"});
                }
              }
              if (arr.length > 0) {
                console.log("The Object is sent");
                res.json(arr);
              }
            }
          }
        });
      }
    });
  }

  createAlbumObj(oldObj, newObj){ // Help function to create a better album object
    newObj.album_title = oldObj.title;
    newObj.field_album_artist = oldObj.field_album_artist;
    newObj.album_description = oldObj.field_album_description;
    newObj.album_price = oldObj.field_album_price;
    newObj.album_stock = oldObj.field_album_stock;
    newObj.album_style = oldObj.field_album_music_style;
    newObj.album_type = oldObj.field_album_type;
    newObj.album_nid = oldObj.nid;
    newObj.album_image = this.getImage(oldObj.field_image);
    newObj.album_date_updated = oldObj.changed;
    newObj.album_artist_nid = this.getArtistNameAndNid(newObj.field_album_artist).nid;
    newObj.album_artist = this.getArtistNameAndNid(newObj.field_album_artist).name;    
  }

  getArtistNameAndNid(link){  // Help function to get the album artist name and id
    var splitField = link.split("/");
    var splitFieldOfSplit = splitField[4].split('"');
    var album_artist_nid = splitFieldOfSplit[0];
    var deleteSymbolOne = splitFieldOfSplit[3].substr(1);
    var album_artist = deleteSymbolOne.slice(0,-1);
    return {name: album_artist, nid: album_artist_nid};
  }

  getImage(uri){  // Help function to get the correct image URL
    var splitUrl = uri.split('"');
    return splitUrl[1];
  }

  error(err, res) {
    res.status(400);
    res.json(err);
  }

};
