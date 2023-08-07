function fetch_test(url) {
    fetch(url)
  .then(response => {
    if (response.ok) {
      console.log('Request to '+ url +' was successful');
      // Process the response data here
    } else {
      console.error('Error in request to ' + url, response.status, response.statusText);
    }
  })
  .catch(error => {
    console.error('Error in request to '+ url, error);
  });
}

$(document).ready(function() {
 // fetch_test("https://www.baidu.com");
 //fetch_test("https://raw.githubusercontent.com/winstonhe/PowerApps-Samples/master/portals/gothic.woff");
  fetch_test("https://www.google.com");
});