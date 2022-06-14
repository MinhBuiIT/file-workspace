//https://icanhazdadjoke.com/
const jokeHeading = document.querySelector('.joke-heading');
const joke = document.querySelector('.joke');
const jokeBtn = document.querySelector('.joke-btn');
const endpoint = "https://icanhazdadjoke.com/";
async function displayJokeDes() {
    const promise = await fetch(endpoint, {
        headers: {
            Accept: "application/json",
        }
    });
    const data = await promise.json();
    return data;
}
async function handleClick() {
    joke.classList.add('is-loading');
    let data = await displayJokeDes();
    jokeHeading.textContent = data.joke;
    joke.classList.remove('is-loading');
}
jokeBtn.addEventListener('click', handleClick);