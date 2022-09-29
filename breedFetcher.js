const request = require('request');


request('https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2], (error, response, body) => {
  if (error) {
    console.log("Error, api inaccessable");
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found");
    return;
  }
  console.log(data["0"].description);
  console.log(typeof data);
});
