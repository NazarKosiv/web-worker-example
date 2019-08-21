function getUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.addEventListener('load', (data) => {
    const users = JSON.parse(data.target.response);
    postMessage(users);
  })
  xhr.send();
}

getUsers();

addEventListener('message', data => {
  getUsers();
})


