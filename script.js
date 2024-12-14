// You can add smooth scrolling for the buttons if desired
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {

    const videos = document.querySelectorAll('.hobby-video, .video-hadar'); 

    videos.forEach(video => {
        // עצירת הסרטון ברגע שהעמוד נטען
        video.pause();

        // הפעלת הסרטון בעת ריחוף עם העכבר
        video.parentElement.addEventListener('mouseenter', () => {
            video.play();
        });

        // עצירת הסרטון כאשר העכבר עוזב את האלמנט
        video.parentElement.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // חזרה לתחילת הסרטון
        });
    });
});



//קוד ליצרת טקסט בעת לחיצה על אחד התחביבים

document.addEventListener('DOMContentLoaded', () => {
    const videoContainers = document.querySelectorAll('.video-container');
    const dynamicText = document.getElementById('dynamic-text');

    videoContainers.forEach(container => {
        container.addEventListener('click', () => {
            // קבלת הטקסט מתוך מאפיין data-extra-text
            const extraText = container.getAttribute('data-extra-text');

            // עדכון הטקסט הדינמי
            dynamicText.textContent = extraText;

            // גלילה למקום שבו מתחיל הטקסט
            window.scrollTo({
                top: dynamicText.offsetTop - 20, // יש אפשרות לשחק עם הערך 20 כדי לשלוט במרחק
                behavior: 'smooth'  // תנועה חלקה
            });
        });
    });
});
