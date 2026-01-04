       // Smooth scroll animation for skills
        const skillBars = document.querySelectorAll('.bar div');

        window.addEventListener('scroll', () => {
            skillBars.forEach(bar => {
                const barTop = bar.getBoundingClientRect().top;
                if (barTop < window.innerHeight - 50) {
                    bar.style.width = bar.getAttribute('data-width');
                }
            });
        });
