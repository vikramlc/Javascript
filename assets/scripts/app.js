const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  //   // xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  //   xhr.open(method, url);
    
  //   xhr.responseType = 'json';
    
  //   // Error handling is triggered when there is an error from the API call.
  //   xhr.onload = function() {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       resolve(xhr.response);
  //     } else {
  //       reject(new Error('Something went wrong!!'));
  //     }
  //     // const listOfPosts = JSON.parse(xhr.response);
      
  //   };

  //   // This is triggered if there is any network error like timeout or no internet
  //   xhr.onerror = function() {
  //     reject(new Error('Failed to send request.'));
  //   };
    
  //   xhr.send(JSON.stringify(data));
  // });

  // return promise;

  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      return response.json().then(errData => {
        console.log(errData);
        throw new Error('Something went wrong - server-side.');
      });
    }
  })
  .catch(error => {
    console.log(error);
  });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
    const listOfPosts = responseData;
    console.log('data', responseData);
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
    // sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    //   .then(responseData => {
    //     const listOfPosts = responseData;
    //     console.log('data', responseData);
    //     for (const post of listOfPosts) {
    //       const postEl = document.importNode(postTemplate.content, true);
    //       postEl.querySelector('h2').textContent = post.title.toUpperCase();
    //       postEl.querySelector('p').textContent = post.body;
    //       listElement.append(postEl);
    //     }
    //   });
  } catch(error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    content: content,
    userId: userId
  };
  
  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event => {
  if (event.target.tagName == 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});