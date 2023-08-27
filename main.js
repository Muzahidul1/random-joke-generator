
document.querySelector('.btn').addEventListener('click',()=>{
    getJoke();
})

getJoke()
function getJoke(){
    // fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious')
        // .then(res => res.json())
        // .then(data => displayJock(data))
        // .then(data => console.log(data.joke))

    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious')
        .then(res => res.json())
        .then(data => {
           displayJock(data)
        })
}

function displayJock(joke){
    console.log(joke);
    const jokeEl = document.querySelector('.joke');
    if (joke.joke) {
       jokeEl.innerHTML = `
       <p>${joke.joke}</p>
       `
    } else{
        jokeEl.innerHTML = `
        <p class="setup">Setup: ${joke.setup}<p>
        <p class="delivery">Joke: ${joke.delivery}<p>
        `
    }
}

function createEl(){
    const el = document.createElement('p')
    
    jokeEl.append(el);
    return el
}

console.log(1);