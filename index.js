const result = document.getElementById("result");

const button = document.getElementById("button");

//The function below was generated by fetching the Postman-generated API using Yelp's parameters. Since Yelp needs an authorization to access the API, I had to use a specific key to generate the results.

function getLocation() {
  fetch("https://api.yelp.com/v3/businesses/search?term=parking&location=all&rating=2<&review_count=all", {
    method: "GET",
    headers: {
      authorization: "Bearer C5r0SppKfubNHEW4ZY2iB6OFLbnKG5OCI4eXMN1RooAlPTS5GOh1wJhnq_xYwUSAo-cvyrlDQpN0JT6RBfaoHtLRThsESN9YORbNef05W69mUEbgIt-g52IzB6o8YnYx"
    }
  })
  .then(res =>res.json())
  .then(data=>{
    if(data.url.includes(string)) {
      getLocation();
    } else {   document.getElementById("result").innerHTML = "This location does not have a bad parking lot";
    }
  })
}

button.addEventListener('click', getLocation());

const api_url = 'https://api.yelp.com/v3/businesses/search?term=parking&location=all&rating=2<&review_count=all';

async function getLocation(){
  const response = await fetch(api_url);
  const data = await response.json();
  const {review_count, rating} = data;
  
  document.getElementById("score").textContent = (review_count * rating)/(review_count + 1);
}

getLocation();