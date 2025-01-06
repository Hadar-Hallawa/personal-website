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
   



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.video-container').forEach(container => {
        container.addEventListener('click', () => {
            const extraText = container.getAttribute('data-extra-text');
            const textContainer = container.querySelector('.text-container');
            const video = container.querySelector('.hobby-video');
            
            if (container.classList.contains('expanded')) {
                // Restore original content
                video.style.display = 'block';
                textContainer.style.display = 'block';
                textContainer.innerHTML = container.dataset.originalContent;
                container.classList.remove('expanded');
            } else {
                // Save original content
                if (!container.dataset.originalContent) {
                    container.dataset.originalContent = textContainer.innerHTML;
                }
                // Replace content
                video.style.display = 'none';
                textContainer.style.display = 'block';
                textContainer.innerHTML = `<p>${extraText}</p>`;
                container.classList.add('expanded');
            }
        });
    });
});
// Toggle navigation menu
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const hamburger = document.querySelector('.hamburger');
    
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('mainNav');
        const hamburger = document.querySelector('.hamburger');
        
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.getElementById('mainNav');
    const hamburger = document.querySelector('.hamburger');
    
    if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("mobile-video");

    // בדיקת רוחב מסך
    if (window.innerWidth <= 768) {
        video.autoplay = true; // הפעלה אוטומטית בנייד
        video.play();
    }
});

