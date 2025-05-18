// Анимация появления элементов при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.token-card, .step');
    elements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Инициализация
window.addEventListener('load', () => {
    document.querySelectorAll('.token-card, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();
// Переключатель темы
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌓';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '70px';
themeToggle.style.right = '20px';
themeToggle.style.background = 'var(--dark-gray)';
themeToggle.style.color = 'var(--light)';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '50%';
themeToggle.style.width = '40px';
themeToggle.style.height = '40px';
themeToggle.style.cursor = 'pointer';
themeToggle.style.zIndex = '100';
themeToggle.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '🌓';
    }
});

document.body.appendChild(themeToggle);

// Подключение кошелька Phantom
async function connectWallet() {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            const publicKey = response.publicKey.toString();
            connectWalletBtn.textContent = publicKey.slice(0, 4) + '...' + publicKey.slice(-4);
            alert('Successfully connected: ' + publicKey);
        } catch (err) {
            console.error('Connection error:', err);
        }
    } else {
        alert('Phantom wallet not found! Please install it from https://phantom.app/');
    }
}
async function buyTokens() {
    if (window.solana && window.solana.isPhantom) {
        try {
            // Здесь будет код для взаимодействия с смарт-контрактом
            alert('Redirecting to token purchase interface...');
        } catch (err) {
            console.error('Transaction error:', err);
        }
    } else {
        alert('Please connect your Phantom wallet first');
    }
}



        // Анимация header при скролле
        window.addEventListener('scroll', function() {
            const header = document.getElementById('main-header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Параллакс эффект
        document.addEventListener('mousemove', function(e) {
            const parallaxBg = document.querySelector('.parallax-bg');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            parallaxBg.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
        });
        
        // Анимация частиц
        function createParticles() {
            const particlesContainer = document.querySelector('.hero');
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.width = `${Math.random() * 6 + 2}px`;
                particle.style.height = particle.style.width;
                particle.style.background = `hsl(${Math.random() * 60 + 270}, 100%, 70%)`;
                particle.style.borderRadius = '50%';
                particle.style.position = 'absolute';
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite ${Math.random() * 5}s`;
                particlesContainer.appendChild(particle);
            }
        }
        
        // Запуск анимаций после загрузки
        window.addEventListener('load', function() {
            createParticles();
            
            // Анимация появления элементов
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.token-card, .step, .stat-card');
                elements.forEach(el => {
                    const elTop = el.getBoundingClientRect().top;
                    if (elTop < window.innerHeight - 100) {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }
                });
            };
            
            document.querySelectorAll('.token-card, .step, .stat-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.6s ease-out';
            });
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll();
        });