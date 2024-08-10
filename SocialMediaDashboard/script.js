document.getElementById('refreshButton').addEventListener('click', function() {
    // Simulate fetching new data
    document.getElementById('followersCount').textContent = getRandomNumber();
    document.getElementById('postsCount').textContent = getRandomNumber();
    document.getElementById('likesCount').textContent = getRandomNumber();
});

function getRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
}
