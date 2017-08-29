var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

//handler for server, if parsed url is "/listing" it will print out data stored in listingData
var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url).pathname;
  
  if (parsedUrl == "/listings" && request.method == "GET"){		//good request
	  response.writeHead(200, {"Content-Type" : "application/json"});
	  response.end(listingData);
  }

  else {														//bad request
	  response.writeHead(404);									
	  response.end("Bad gateway error");
  }
};

//File reader that reads 'listings.jason' into listingData and then starts server
fs.readFile('listings.json', 'utf8', function(err, data) {
	if (err) throw err;
	listingData = data;
});

server = http.createServer(requestHandler);
server.listen(port, function() {
	console.log("Server Running")
});

