const request = require("request");
let args = process.argv.slice(2);
let arg = args[0];

request(`https://api.thecxxatapi.com/v1/breeds/search?q=${arg}`, function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  if (!error) {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);

    if (data.length === 0) {
      console.log("The requested breed was not found.");
    } else {
      console.log(data[0]["description"]);
    }
  }
});
