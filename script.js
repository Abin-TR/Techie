// Add event listener to video list items
document.querySelectorAll('.video-list li').forEach((item) => {
    item.addEventListener('click', () => {
        // Get the video source and title
        const videoSource = item.querySelector('img').getAttribute('src');
        const videoTitle = item.querySelector('h4').textContent;

        // Update the video player
        document.querySelector('.video-player video').src = videoSource;
        document.querySelector('.video-player h2').textContent = videoTitle;

        // Show the video player
        document.querySelector('.video-player').style.display = 'block';
    });
});

