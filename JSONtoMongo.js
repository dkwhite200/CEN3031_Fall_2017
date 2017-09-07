'use strict';
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
	uri = "mongodb://Guy:Guyguy@ds127994.mlab.com:27994/cen3031_fall_2017";

var data = fs.readFileSync("./listings.json");
var json = JSON.parse(data);
mongoose.connect(uri, function(err, res){
	if(err){
		console.log("ERROR connected to:\n" + uri + err);
	}
	else {
		console.log("Connected to:\n" + uri);
	}
});

for(var i=0; i< json.entries.length; i++){
	var entry = json.entries[i];
	entry["created_at"] = null;
	entry["updated_at"] = null;
	var nModel = new Listing(entry);
	nModel.save(function(err){
		if (err) return handleError(err);
	});
};

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */