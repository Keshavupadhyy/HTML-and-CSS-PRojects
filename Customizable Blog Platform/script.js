// Sample posts
const posts = [
    {
        id: 1,
        title: "First Post",
        content: "This is the content of the first post. It's very interesting! Here you can explore various topics and dive deep into each subject."
    },
    {
        id: 2,
        title: "Second Post",
        content: "This is the content of the second post. It's even more interesting! Discover new ideas and concepts that will expand your knowledge."
    }
];

// Function to display posts
function displayPosts() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        mainContent.appendChild(postElement);
    });
}

// Function to display new post form
function displayNewPostForm() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>Create New Post</h2>
        <form id="newPostForm">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
            <br>
            <label for="content">Content:</label>
            <textarea id="content" name="content" rows="5" required></textarea>
            <br>
            <input type="submit" value="Add Post">
        </form>
    `;
    document.getElementById('newPostForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const newPost = {
            id: posts.length + 1,
            title,
            content
        };
        posts.push(newPost);
        displayPosts();
    });
}

// Event listeners for navigation
document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    displayPosts();
});

document.getElementById('newPostLink').addEventListener('click', function(event) {
    event.preventDefault();
    displayNewPostForm();
});

// Initialize with posts view
displayPosts();
