function loadBeef() {
    // Load canvas context
    const canvas = document.getElementById('canvas').getContext('2d');

    // Load and draw beef
    const beef = new Image();
    beef.addEventListener('load', () => {
        canvas.drawImage(beef, 0, 0);
    });
    beef.src = 'beef.png';    
}

function beefify(imageUrl) {
    // Load canvas context
    const canvas = document.getElementById('canvas').getContext('2d');

    // Load and draw beef
    const beef = new Image();
    beef.addEventListener('load', () => {
        canvas.drawImage(beef, 0, 0);

        // Load and draw overlay when beef is drawn
        const overlay = new Image();
        overlay.addEventListener('load', () => {
            canvas.drawImage(overlay, 32, 32, 32, 32);
        });
        overlay.src = imageUrl;
    });
    beef.src = 'beef.png';
}
