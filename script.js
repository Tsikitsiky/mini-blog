console.log('it works');
const postList = document.getElementById('post-list');

const newPost = () => { // Create the new post

    // Crete the elements
    const space = document.createElement('div');
    const newPost = document.createElement('div');
    const newPostTitle = document.createElement('h5');
    const newPostContent = document.createElement('p');

    // Grab the input value
    const titleInput = document.getElementById('new-post-title');
    const contentInput = document.getElementById('new-post-content');

    // Add them into their parents
    postList.appendChild(space);
    space.appendChild(newPost);
    newPost.appendChild(newPostTitle);
    newPost.appendChild(newPostContent);

    //Add the classes
    space.classList.add('card', 'card-space');
    newPost.classList.add('card-body');
    newPostTitle.classList.add('card-title');
    newPostContent.classList.add('card-text');

    //Add the content
    newPostTitle.textContent = `${titleInput.value}`;
    newPostContent.textContent = `${contentInput.value}`;
    
    return space;
  };

  // checkbox
  const checkedOption = document.getElementsByClassName('badge');
  const checking = document.querySelectorAll('form-check');
  checking.addEventListener('change', ($event) => {
    if ($event.target.checked === true) {
      checkedOption.classList.remove('badge-light');
    } else if ($event.target.checked === false){
      checkedOption.classList.add('badge-light')
    }
  });

  console.log(newPost());
const submit = document.getElementById('submit-form');
submit.addEventListener('click', ($event) => {
    postList.appendChild(newPost());
    $event.preventDefault(postList);
    
}); 
// code your solution in here
