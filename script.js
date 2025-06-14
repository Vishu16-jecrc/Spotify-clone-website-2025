<script>
    // Get all play buttons
    const playButtons = document.querySelectorAll('.play-btn');

    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Find the audio element inside the clicked item's parent
            const audio = this.closest('.item').querySelector('audio');

            // Pause all other audios
            document.querySelectorAll('audio').forEach(aud => {
                if (aud !== audio) {
                    aud.pause();
                    aud.currentTime = 0;
                }
            });

            // If audio exists, play it
            if (audio) {
                audio.play();
            }
        });
    });
</script>
