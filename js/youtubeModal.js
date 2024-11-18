const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const closeButton = document.querySelector('.close-button');
const slideBoxes = document.querySelectorAll('.slide-box');

slideBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const videoId = box.getAttribute('data-video-id');
        videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
        modal.style.display = 'block';
    });
});

function closeModal() {
    modal.style.display = 'none';
    videoPlayer.src = '';
}

closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});