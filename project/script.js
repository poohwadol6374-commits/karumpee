// ==========================================================================
// Better Day Agency — Premium Interactions & Animations
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // ── Auth State — Dynamic Nav ──
    (function setAuthUI() {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const navActions = document.getElementById('navActions');
        const mobActions = document.getElementById('mobActions');
        if (!navActions) return;

        // Add Certificates link to nav when logged in
        if (loggedIn) {
            const navLinksUl = document.querySelector('.nav-links');
            if (navLinksUl && !navLinksUl.querySelector('a[href="certificates.html"]')) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = 'certificates.html';
                a.textContent = 'Certificates';
                if (location.pathname.includes('certificates')) a.classList.add('active');
                li.appendChild(a);
                navLinksUl.appendChild(li);
            }
            // Also add to mobile menu
            const mobLinksUl = document.querySelector('.mobile-nav-links');
            if (mobLinksUl && !mobLinksUl.querySelector('a[href="certificates.html"]')) {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = 'certificates.html';
                a.textContent = 'Certificates';
                if (location.pathname.includes('certificates')) a.classList.add('active');
                li.appendChild(a);
                mobLinksUl.appendChild(li);
            }
        }

        if (loggedIn) {
            // Keep existing theme toggle button if present
            const existingThemeBtn = navActions.querySelector('.theme-toggle');
            navActions.innerHTML = '';

            const avatar = document.createElement('div');
            avatar.className = 'nav-avatar-wrap';
            avatar.innerHTML = `
                <img src="https://i.pravatar.cc/100?img=11" alt="Profile" class="nav-avatar-img">
                <div class="avatar-dropdown">
                    <div class="avatar-dd-header">
                        <img src="https://i.pravatar.cc/100?img=11" alt="Profile">
                        <div><strong>User</strong><span>user@example.com</span></div>
                    </div>
                    <div class="avatar-dd-divider"></div>
                    <a href="dashboard.html" class="avatar-dd-item"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>Dashboard</a>
                    <a href="my-courses.html" class="avatar-dd-item"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>My Courses</a>
                    <a href="certificates.html" class="avatar-dd-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>Certificates</a>
                    <a href="settings.html" class="avatar-dd-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Settings</a>
                    <div class="avatar-dd-divider"></div>
                    <a href="#" class="avatar-dd-item avatar-dd-logout" onclick="event.preventDefault();localStorage.removeItem('isLoggedIn');location.href='index.html'"><svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Logout</a>
                </div>`;
            navActions.appendChild(avatar);

            if (existingThemeBtn) navActions.appendChild(existingThemeBtn);

            if (mobActions) {
                mobActions.innerHTML = `
                    <a href="certificates.html" class="btn btn-outline btn-large" style="width:100%">Certificates</a>
                    <a href="settings.html" class="btn btn-outline btn-large" style="width:100%">Settings</a>
                    <button class="btn btn-primary btn-large" style="width:100%" onclick="localStorage.removeItem('isLoggedIn');location.href='index.html'">Logout</button>`;
            }
        }
    })();

    // ── Theme Toggle ──
    const root = document.documentElement;
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    root.setAttribute('data-theme', savedTheme);

    themeToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const current = root.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateParticleColor();
        });
    });

    // ── Scroll Reveal (Intersection Observer) ──
    const revealElements = document.querySelectorAll('.reveal-up');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));

    // ── Counter Animation ──
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                animateCounter(el, parseInt(el.dataset.target));
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));

    function animateCounter(el, target) {
        const duration = 2000;
        const start = performance.now();
        const ease = t => 1 - Math.pow(1 - t, 4);
        function update(now) {
            const p = Math.min((now - start) / duration, 1);
            el.textContent = Math.floor(ease(p) * target).toLocaleString();
            if (p < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    // ── Navbar Scroll Effect ──
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── Mobile Menu ──
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');

    if (mobileToggle && mobileOverlay) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
        });
        mobileOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ── Floating Particles ──
    const canvas = document.getElementById('particles-canvas');
    let particleRGB = getParticleColor();

    function getParticleColor() {
        const theme = root.getAttribute('data-theme');
        return theme === 'light' ? { r: 193, g: 18, b: 31 } : { r: 230, g: 57, b: 70 };
    }

    function updateParticleColor() {
        particleRGB = getParticleColor();
    }

    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particleRGB.r}, ${particleRGB.g}, ${particleRGB.b}, ${this.opacity})`;
                ctx.fill();
            }
        }

        const count = Math.min(60, Math.floor(window.innerWidth / 25));
        for (let i = 0; i < count; i++) particles.push(new Particle());

        function drawLines() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${particleRGB.r}, ${particleRGB.g}, ${particleRGB.b}, ${0.06 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            drawLines();
            animationId = requestAnimationFrame(animate);
        }
        animate();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) cancelAnimationFrame(animationId);
            else animate();
        });
    }

    // ── Smooth Anchor Scroll ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ── Magnetic Button Effect ──
    document.querySelectorAll('.btn-magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });

    // ── Tilt Effect on Cards ──
    document.querySelectorAll('.course-card, .feature-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-8px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    // ── Parallax on Hero Glow ──
    const heroGlow = document.querySelector('.hero-bg-glow');
    const heroGlow2 = document.querySelector('.hero-bg-glow-2');
    if (heroGlow) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            heroGlow.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
            if (heroGlow2) heroGlow2.style.transform = `translateX(${-x * 0.5}px) translateY(${-y * 0.5}px)`;
        });
    }

}); // end DOMContentLoaded
