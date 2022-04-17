const data = require('./quotes.json')

let notification_bar = document.getElementById('notifications');
let motivation_text = document.getElementById('motivational-speech');

//consume api
//random jokes
// function get_from_api(){ 
//     axios.get("https://api.chucknorris.io/jokes/random")
//     .then ( response => motivation_text.innerHTML =  response['data'].value)//output will be the required data
//     .catch (error => console.log(error))
// }

//my quotes
// function get_from_api(){ 
//     axios.get("https://drive.google.com/file/d/1TBvVXOo9Oj7jjjG43jPo74tMWmMGfHje/view?usp=sharing")
//     .then ( response => console.log(response))//output will be the required data
//     .catch (error => console.log(error))
// }

console.log(data)
// get_from_api();

// setInterval(get_from_api , 2000);
