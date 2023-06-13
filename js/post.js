let postID = new URL(window.location.href).searchParams.get('id');
let btnBack = document.getElementById('back');
let postDivHead = document.getElementsByClassName('header_post')[0];
let postDivBody = document.getElementsByClassName('body_post')[0];
let commentsDiv = document.getElementsByClassName('comments_inner')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`).then(response => response.json())
    .then(post => {
        btnBack.href = `./user-details.html?id=${post.userId}`;
        postDivHead.innerHTML = `
            <h3 class="title">${post.title.slice(0,1).toUpperCase()}${post.title.slice(1)}</h3>
            <span>Id Post: ${post.id}</span>
            <span>Author Id: ${post.userId}</span>
        `;
        postDivBody.innerHTML = `${post.body.slice(0,1).toUpperCase()}${post.body.slice(1)}</p>`
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then(response => response.json())
            .then(comments => {
                    for (comment of comments){
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    let commentHead = document.createElement('div');
                    commentHead.classList.add('comment_head');
                    let commentBody = document.createElement('div');
                    commentBody.classList.add('comment_body');
                    commentsDiv.appendChild(commentDiv);
                    commentDiv.append(commentHead, commentBody);
                    let titleOfComment = document.createElement('h3');
                    titleOfComment.classList.add('title_comment');
                    titleOfComment.innerHTML = `${comment.name.slice(0,1).toUpperCase()}${comment.name.slice(1, 40)}...`;
                    let emailOfComment = document.createElement('p');
                    emailOfComment.classList.add('email_comment');
                    emailOfComment.innerHTML = `Author:<br><a href="mailto:${comment.email}">${comment.email}</a>`;
                    let idOfComment = document.createElement('span');
                    idOfComment.classList.add('id_comment');
                    idOfComment.innerText = `Id comment: ${comment.id}`;
                    let bodyOfComment = document.createElement('div');
                    bodyOfComment.classList.add('body_comment');
                    bodyOfComment.innerText = `${comment.body.slice(0,1).toUpperCase()}${comment.body.slice(1)}...`
                    commentHead.append(titleOfComment, emailOfComment, idOfComment);
                    commentBody.appendChild(bodyOfComment);
                    }
                    let countComments = document.getElementsByClassName('titleOfComent')[0];
                    countComments.innerText = `Comments ${comments.length}`;
            })
    })
