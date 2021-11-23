const getJokebutton = document.getElementById ('get-joke-btn');
getJokebutton.addEventListener('click', jokeGenHandler);

function jokeGenHandler(){
  fetch('https://v2.jokeapi.dev/joke/Any')
  .then (response => response.json())
  .then(data => {
    let joke, jokedelivery;
    if (data.joke){
      joke = data.joke;
      jokedelivery = "";
    }else {
      joke = data.setup;
      jokedelivery = data.delivery;

    }
    document.getElementById ('category').innerHTML = data.category;
    document.getElementById ('setup').innerHTML = joke;
    document.getElementById ('delivery').innerHTML = jokedelivery;

  })
}

jokeGenHandler();
