//API: application programing interface
//api user of github: https://api.github.com/users/MinhBuiIT
const endpoint = "https://api.github.com/users/";
// const promise = fetch(endpoint); //trả về promise response
// promise
//     .then((response) => {
//         return response.json(); //response.json() cũng là promise
//     })
//     .then((data) => {
//         console.log(data); //dữ liệu của người dùng github
//         console.log(data.name);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//c2 dùng async await
const userDes = document.querySelector('.user-des');
async function displayDataUser(username) {
    try {
        userDes.textContent = 'Loading.....'
        const promise = await fetch(`${endpoint}${username}`);
        const data = await promise.json();
        userDes.textContent = data.login;
    } catch (err) {
        console.log('Api not reponse');
    }
}
displayDataUser('MinhBuiIT');