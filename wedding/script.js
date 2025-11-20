// ============= QUẢN LÝ ÂM LẶP NỀN =============
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = true;

// Tạo nhạc nền mặc định (Tone.js không cần, sử dụng Web Audio API)
initializeAudio();

function initializeAudio() {
    // Cố gắng phát nhạc (một số trình duyệt yêu cầu tương tác người dùng)
    bgMusic.volume = 0.3;
    bgMusic.play().catch(() => {
        console.log('Nhạc sẽ bắt đầu sau khi tương tác');
    });
}

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.add('muted');
        musicToggle.innerHTML = '🔇';
        isMusicPlaying = false;
    } else {
        bgMusic.play();
        musicToggle.classList.remove('muted');
        musicToggle.innerHTML = '🔊';
        isMusicPlaying = true;
    }
});

// Cho phép người dùng tương tác để phát nhạc
document.addEventListener('click', () => {
    if (!isMusicPlaying) return;
    if (bgMusic.paused) {
        bgMusic.play().catch(() => {});
    }
});

// ============= TẠO HIỆU ỨNG TUYẾT RƠI =============
function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 30;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        const snowSymbols = ['❄️', '✨', '⭐', '💫', '✨'];
        snowflake.textContent = snowSymbols[Math.floor(Math.random() * snowSymbols.length)];
        
        const randomX = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.random() * 10 + 10;
        const randomOpacity = Math.random() * 0.5 + 0.3;

        snowflake.style.left = randomX + 'px';
        snowflake.style.animationDelay = randomDelay + 's';
        snowflake.style.animationDuration = randomDuration + 's';
        snowflake.style.opacity = randomOpacity;

        snowContainer.appendChild(snowflake);

        // Tạo lại tuyết khi nó rơi xong
        setTimeout(() => {
            snowflake.addEventListener('animationend', () => {
                snowflake.remove();
                createSnowflake();
            });
        }, (randomDelay + randomDuration) * 1000);
    }
}

function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    const snowSymbols = ['❄️', '✨', '⭐', '💫'];
    snowflake.textContent = snowSymbols[Math.floor(Math.random() * snowSymbols.length)];
    
    const randomX = Math.random() * window.innerWidth;
    const randomDelay = 0;
    const randomDuration = Math.random() * 10 + 10;
    const randomOpacity = Math.random() * 0.5 + 0.3;

    snowflake.style.left = randomX + 'px';
    snowflake.style.animationDelay = randomDelay + 's';
    snowflake.style.animationDuration = randomDuration + 's';
    snowflake.style.opacity = randomOpacity;

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }, randomDuration * 1000);
}

// Khởi tạo tuyết
createSnowflakes();

// ============= TẠO HIỆU ỨNG LÁ BAY =============
function createFloatingLeaves() {
    const leavesContainer = document.querySelector('.leaves-container');
    
    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        
        const randomX = Math.random() * window.innerWidth;
        const randomDuration = Math.random() * 15 + 15;
        const randomDelay = Math.random() * 5;
        const randomRotation = Math.random() * 360;

        leaf.style.left = randomX + 'px';
        leaf.style.top = '-30px';
        leaf.style.transform = `rotate(${randomRotation}deg)`;
        
        leavesContainer.appendChild(leaf);

        // Animation
        let top = -30;
        const animationInterval = setInterval(() => {
            top += 1;
            const opacity = Math.max(0, 0.6 - (top / (window.innerHeight + 30)) * 0.6);
            
            leaf.style.top = top + 'px';
            leaf.style.opacity = opacity;
            leaf.style.transform = `rotate(${randomRotation + (top / 2)}deg) translateX(${Math.sin(top / 50) * 30}px)`;

            if (top > window.innerHeight + 30) {
                clearInterval(animationInterval);
                leaf.remove();
            }
        }, 30);
    }

    // Tạo lá mỗi 2 giây
    setInterval(createLeaf, 2000);
    createLeaf();
}

createFloatingLeaves();

// ============= HIỆU ỨNG PHÁO HOA =============
function initializeFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 2;
            this.speedX = (Math.random() - 0.5) * 8;
            this.speedY = (Math.random() - 0.5) * 8;
            this.life = 1;
            this.decay = Math.random() * 0.015 + 0.015;
            
            // Màu pháo hoa lãng mạn
            const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb', '#ff69b4', '#d4a5a5'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedY += 0.1; // Trọng lực
            this.life -= this.decay;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.life;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function createFireworks(x, y) {
        for (let i = 0; i < 30; i++) {
            particles.push(new Particle(x, y));
        }
    }

    function animateFireworks() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();

            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }

        if (particles.length > 0) {
            requestAnimationFrame(animateFireworks);
        }
    }

    // Bắn pháo hoa ngẫu nhiên
    function randomFireworks() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6; // Chỉ ở phía trên
        createFireworks(x, y);
        animateFireworks();
    }

    // Bắn pháo hoa khi tải trang
    setInterval(randomFireworks, 3000);

    // Cho phép click để bắn pháo hoa
    canvas.addEventListener('click', (e) => {
        createFireworks(e.clientX, e.clientY);
        animateFireworks();
    });

    // Xử lý thay đổi kích thước cửa sổ
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

initializeFireworks();

// ============= HIỆU ỨNG CUỘN TRANG =============
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Quan sát tất cả phần tử với lớp fade-in-up
    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });
}

setupScrollAnimations();

// ============= HIỆU ỨNG HẠT ĐỨC MUA =============
function createConfetti() {
    const confettiCount = 50;
    const container = document.body;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#d4a5a5'][
            Math.floor(Math.random() * 5)
        ];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '10';

        container.appendChild(confetti);

        const duration = Math.random() * 3 + 2;
        const xOffset = (Math.random() - 0.5) * 100;

        let top = -10;
        const animationInterval = setInterval(() => {
            top += 2;
            confetti.style.top = top + 'px';
            confetti.style.left = 'calc(' + Math.random() * 100 + '% + ' + Math.sin(top / 20) * 20 + 'px)';
            confetti.style.opacity = Math.max(0, 1 - (top / (window.innerHeight + 10)));

            if (top > window.innerHeight + 10) {
                clearInterval(animationInterval);
                confetti.remove();
            }
        }, 30);
    }
}

// Tạo hạt đức mua khi tải trang
setTimeout(() => {
    createConfetti();
}, 1000);

// ============= HIỆU ỨNG CHUỖI TRÁI TIM =============
function createHeartChain() {
    const hearts = ['💕', '💗', '💖', '💝', '💓'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-30px';
        heart.style.opacity = '0.8';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '5';
        heart.style.animation = 'none';

        document.body.appendChild(heart);

        let top = -30;
        const interval = setInterval(() => {
            top += 1;
            heart.style.top = top + 'px';
            heart.style.opacity = Math.max(0, 0.8 - (top / (window.innerHeight + 30)) * 0.8);
            heart.style.transform = `rotate(${Math.sin(top / 30) * 20}deg)`;

            if (top > window.innerHeight + 30) {
                clearInterval(interval);
                heart.remove();
            }
        }, 40);
    }

    // Tạo trái tim mỗi 1.5 giây
    setInterval(createHeart, 1500);
}

createHeartChain();

// ============= HIỆU ỨNG NHẤp NHAng =============
function createGlowEffect() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glow {
            0%, 100% { box-shadow: 0 0 10px rgba(255, 105, 180, 0.5); }
            50% { box-shadow: 0 0 20px rgba(255, 105, 180, 0.8); }
        }
        
        .section-title {
            animation: glow 3s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
}

createGlowEffect();

// ============= ĐỢI TRANG TẢI XONG RỒI TẠO HIỆU ỨNG CHÀO MỪNG =============
window.addEventListener('load', () => {
    // Tạo hạt đức mua thoáng nữa
    setTimeout(() => {
        createConfetti();
    }, 2000);

    // Đảm bảo nghe nhạc nền
    bgMusic.play().catch(() => {
        console.log('Cần tương tác để phát nhạc');
    });
});

// ============= HIỆU Ứng VÙNG DỄ TƯƠNG TÁC =============
function addInteractiveEffects() {
    const interactiveElements = document.querySelectorAll('.bride, .groom, .venue-card, .rsvp-card, .message-card');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.background = `linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 182, 193, 0.1))`;
        });

        element.addEventListener('mouseleave', function() {
            this.style.background = '';
        });
    });
}

addInteractiveEffects();

// ============= CẮP NHẬT ĐẾM NGƯỢC (TÙY CHỌN) =============
function startCountdown() {
    const weddingDate = new Date('2025-12-15T17:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance > 0) {
            console.log(`Thời gian đếm ngược: ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`);
        } else {
            console.log('Đã tới ngày cưới rồi!');
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// startCountdown(); // Bỏ comment để sử dụng

// ============= HIỆU ỨNG ÁNH SÁNG NỀN ĐỘNG =============
function createDynamicLighting() {
    const style = document.createElement('style');
    
    style.textContent = `
        @keyframes backgroundShift {
            0% {
                background: linear-gradient(135deg, #fff9f7 0%, #fff0f5 50%, #ffe0ec 100%);
            }
            50% {
                background: linear-gradient(135deg, #fff0f5 0%, #ffe0ec 50%, #fff9f7 100%);
            }
            100% {
                background: linear-gradient(135deg, #fff9f7 0%, #fff0f5 50%, #ffe0ec 100%);
            }
        }
        
        body {
            animation: backgroundShift 15s ease-in-out infinite;
        }
    `;
    
    document.head.appendChild(style);
}

createDynamicLighting();

// ============= KHẢNHIẾP BIT TRẼ ĐƯ ỠNGNIỆU SỰ =============
console.log('%c❤️ THIỆP CƯỜng CÓ LÝ CẢM XỨC TỪ TRÁI TIM ❤️', 
    'color: #ff69b4; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(255, 105, 180, 0.5);');
console.log('%cTrang web này được thiết kế với tình yêu và sự chu đáo', 
    'color: #d4a5a5; font-size: 14px; font-style: italic;');
