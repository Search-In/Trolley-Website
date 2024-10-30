document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('hidden');
});
function toggleDescription(descId) {
    const descElement = document.getElementById(descId);
    descElement.classList.toggle('visible');
}

let currentIndex = 0;
const tweets = document.querySelectorAll('.tweet-card');

function showTweets() {
    tweets.forEach((tweet, index) => {
        tweet.style.display = 'none'; // Hide all tweets
    });
    tweets[currentIndex].style.display = 'block'; // Show current tweet
    currentIndex = (currentIndex + 1) % tweets.length; // Loop back to the start
}

setInterval(showTweets, 3000); // Change tweet every 3 seconds
showTweets(); // Initial call
