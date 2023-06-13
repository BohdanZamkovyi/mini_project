let userId = new URL(window.location.href).searchParams.get('id');
let requestInfoOfId = new URL(`https://jsonplaceholder.typicode.com/users/${userId}`)
let requestInfoOfPosts = new URL(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
let headInfo = document.getElementsByClassName('head_info')[0];
let userName = document.getElementsByClassName('user_name')[0];
let email = document.getElementsByClassName('email')[0];
let phone = document.getElementsByClassName('phone')[0];
let site = document.getElementsByClassName('site')[0];
let city = document.getElementsByClassName('city')[0];
let street = document.getElementsByClassName('street')[0];
let suite = document.getElementsByClassName('suite')[0];
let zipcode = document.getElementsByClassName('zipcode')[0];
let geo = document.getElementsByClassName('geo')[0];
let companyName = document.getElementsByClassName('company_name')[0];
let phrase = document.getElementsByClassName('phrase')[0];
let bs = document.getElementsByClassName('bs')[0];
let btn = document.getElementById('show_post');
let postsOfHtml =  document.getElementsByClassName('posts')[0];
postsOfHtml.style.display = 'none';
btn.addEventListener('click', ev => {
        if (postsOfHtml.style.display === 'none'){
                postsOfHtml.style.display = 'flex';
                btn.innerText = 'hide post of current user'
        }else {
                postsOfHtml.style.display = 'none';
                btn.innerText = 'post of current user'
        }
})
fetch(requestInfoOfId).then(response => response.json())
    .then(infoOfUser => {
        console.log(infoOfUser);
        headInfo.innerHTML = `<span>Id:</span>${infoOfUser.id} <span>Name:</span> ${infoOfUser.name}`;
        userName.innerHTML = `<span>User name: </span>${infoOfUser.username}`;
        email.innerHTML = `<span>Email: </span>${infoOfUser.email}`;
        email.href = `mailto:${infoOfUser.email}:`
        phone.innerHTML = `<span>Phone: </span>${infoOfUser.phone}`;
        phone.href = `tel:${infoOfUser.phone}`;
        site.innerHTML = `<span>Website: </span>${infoOfUser.website}`;
        site.href = `https:${infoOfUser.website}`;
        site.target = '_blank';
        city.innerHTML = `<span>City: </span>${infoOfUser.address.city}`;
        street.innerHTML = `<span>Street: </span>${infoOfUser.address.street}`;
        suite.innerHTML = infoOfUser.address.suite;
        zipcode.innerHTML = `<span>Zipcode: </span>${infoOfUser.address.zipcode}`;
        geo.children[1].innerHTML = `<span>Lat: </span>${infoOfUser.address.geo.lat}`;
        geo.children[2].innerHTML = `<span>Lng: </span>${infoOfUser.address.geo.lng}`;
        companyName.innerHTML =`<span>Name: </span>${infoOfUser.company.name}`;
        phrase.innerHTML =`<span>Phrase: </span>${infoOfUser.company.catchPhrase}`;
        bs.innerHTML =`<span>BS: </span>${infoOfUser.company.bs}`;
    });
fetch(requestInfoOfPosts).then(response => response.json())
    .then(posts => {
            for (post of posts){
                    let postOfHtml = document.createElement('div');
                    let titleOfPost = document.createElement('p');
                    titleOfPost.innerText = `${post.title.slice(0 , 1).toUpperCase()}${post.title.slice(1 , 25)}...`;
                    let IdOfPost = document.createElement('span');
                    IdOfPost.innerText = `Id post: ${post.id}`;
                    let bodyOfPost = document.createElement('p');
                    bodyOfPost.classList.add('body_post');
                    bodyOfPost.innerText = `${post.body.slice(0 , 1).toUpperCase()}${post.body.slice(1, 100)}...`;
                    postsOfHtml.appendChild(postOfHtml);
                    postOfHtml.classList.add('post');
                    titleOfPost.classList.add('post_title');
                    let linkMoreInfo = document.createElement('a');
                    linkMoreInfo.innerText = 'More';
                    linkMoreInfo.href = `post_details.html?id=${post.id}`;
                    postOfHtml.append(titleOfPost, IdOfPost, bodyOfPost, linkMoreInfo);
            }
    })
