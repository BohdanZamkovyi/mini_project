let mainInner = document.getElementsByClassName('main_inner')[0];
let usersHolder = new URL('https://jsonplaceholder.typicode.com/users');
fetch(usersHolder).then(response => response.json())
.then(users => {
    for (const user of users) {
    let div = document.createElement('div');
    let divInner = document.createElement('div');
    divInner.innerHTML = `<span class="article_id">Id: ${user.id}</span><p><span class="article_name">Name:</span> ${user.name}`;
    let a = document.createElement('a');
    a.innerText = 'More info';
    // a.href = usersHolder + `?id=${user.id}`;
    a.href = 'user-details.html' + `?id=${user.id}`;
    mainInner.appendChild(div);
    div.append(divInner, a);
    }
});
