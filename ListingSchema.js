var mongoose = require('mongoose'), 
	Schema = mongoose.Schema;

var listingSchema = new Schema({
	
	code: {type: String, required: true, unique: true},
	name: {type: String, required: true},
	coordinates: {
		latitude: Number, 
		longitude: Number
		},
	address: String,
	
	created_at: String,
	updated_at: String
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
	
	var currentDate = new Date();
	if(!this.created_at){
		this.created_at = currentDate;
	}
	this.updated_at = currentDate;
	next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
