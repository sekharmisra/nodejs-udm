/*
HTML - 

<button id="get">Get Posts</button>
<button id="post">Create a Post</button>

//Javascript:

const getButton = document.getElementById('get');
const postButton = document.getElementById('post');

getButton.addEventListener('click', () => {
  fetch('http://localhost:8080/feed/posts')
  .then(res => res.json())
  .then(resData => console.log(resData))
  .catch(err => console.log(err));
});

postButton.addEventListener('click', () => {
  fetch('http://localhost:8080/feed/post',{
    method: 'POST',
    body: JSON.stringify({
      title: 'Titletest',
      content: 'ContentTest'
    }),
   headers: {
     'Content-type': 'application/json'
   }
  })
  .then(res => res.json())
  .then(resData => console.log(resData))
  .catch(err => console.log(err));
});
*/